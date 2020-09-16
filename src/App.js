import React, { Component } from "react";
import { Navbar } from "./components/navbar/navbar.component";
import { CoinList } from "./components/coin-list/coin-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      coinsData: []
    };
  }

  componentDidMount() {
    fetch("https://api.coinranking.com/v1/public/coins")
      .then(response => response.json())
      .then(data => this.setState({coinsData: data.data.coins}));
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value});
  }

  render() {
    const {search, coinsData} = this.state;
    const coins = coinsData.filter(coin => (coin.name.toLowerCase().includes(search.toLowerCase())));

    return (
        <div className="App">
          <Navbar 
            handleSearch={this.handleSearch}
          />
          <CoinList 
            coins={ coins }
          />
        </div>
    );
  }
}
export default App;
