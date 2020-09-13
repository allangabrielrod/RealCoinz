import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      coinsData: []
    };
  }

  componentDidMount() {
    fetch("https://api.coinranking.com/v1/public/coins")
      .then(response => response.json())
      .then(data => this.setState({coinsData: data.data.coins}));
  }

  render() {
    return (
        <div className="App">
          <h1>Working</h1>
        </div>
    );
  }
}
export default App;
