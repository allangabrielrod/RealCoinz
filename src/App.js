import React, { Component } from "react";
import ReactGA from "react-ga";
import { Navbar } from "./components/navbar/navbar.component";
import { CoinList } from "./components/coin-list/coin-list.component";
import { Select } from "./components/select/select.component";
import { Option } from "./components/option/option.component";
import { Footer } from "./components/footer/footer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

ReactGA.initialize("UA-178413265-1");
ReactGA.pageview("/dashboard");

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

  handleSort = (event) => {
    switch (event.target.value){
      case "rel":
        this.setState((state) => {
          const sortedCoins = state.coinsData.sort((a, b) => a.rank - b.rank);
          return { coinsData: sortedCoins };
        });
        break;

      case "name":
        this.setState((state) => {
          const sortedCoins = state.coinsData.sort((a, b) => a.name > b.name);
          return { coinsData: sortedCoins };
        });
        break;

      case "lPrice":
        this.setState((state) => {
          const sortedCoins = state.coinsData.sort((a, b) => a.price - b.price);
          return { coinsData: sortedCoins };
        });
        break;

      case "hPrice":
        this.setState((state) => {
          const sortedCoins = state.coinsData.sort((a, b) => b.price - a.price);
          return { coinsData: sortedCoins };
        });
        break;

      default:
        console.log("cant handle :/");
        break;
    }
  }

  render() {
    const {search, coinsData} = this.state;
    const coins = coinsData.filter(coin => (coin.name.toLowerCase().includes(search.toLowerCase())));

    return (
        <div className="App">
          <Navbar 
            handleSearch={this.handleSearch}
          />
          <div className="sort">
            <FontAwesomeIcon icon={ faFilter } size="lg"/>
            <Select
              handleOption={this.handleSort}
            >
              <Option 
                value="rel" 
                text="Relevance"
                icon="faSearch"
              />
              <Option 
                value="name" 
                text="Name"
                icon="fa-search"
              />
              <Option 
                value="hPrice" 
                text="Highest price"
                icon="fa-search"
              />
              <Option 
                value="lPrice" 
                text="Lowest price"
                icon="fa-search"
              />
            </Select>
          </div>
          <CoinList 
            coins={ coins }
          />
          <Footer />
        </div>
    );
  }
}

export default App;