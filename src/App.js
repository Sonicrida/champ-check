import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  com

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <SummonerStats />
        </p>
      </div>
    );
  }
}

class SummonerStats extends Component {
  render() {

    axios.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/20873517/ranked?season=SEASON2017&api_key=9a7252b5-2041-40c4-8404-856165308ef0')
    .then(function (response) {
      console.log(response.data.champions);
    });

    return (
      <div className="Summoner-stats">
        squad
      </div>
    );
  }
}

export default App;
