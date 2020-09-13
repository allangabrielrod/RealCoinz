import React, { Component } from 'react';
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

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
          <SearchBox 
            placeholder="Trying to find something ?"
            handleChange={this.handleSearch}
          />
          {coins.map(coin => <h1>{coin.name}</h1>)}
        </div>
    );
  }
}
export default App;
