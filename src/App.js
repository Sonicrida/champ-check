import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          See stats on a player
        </p>
        <SummonerStats />
      </div>
    );
  }
}

class SummonerStats extends Component {

  constructor(props) {

    super(props);

    this.state = {
      summonerName: '',
      champList: [],
    };

  }

  componentDidMount() {
    axios.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/20873517/ranked?season=SEASON2017&api_key=9a7252b5-2041-40c4-8404-856165308ef0')
    .then(response => {
      const champData = response.data.champions.sort((a, b) => (
        b.stats.totalSessionsWon - a.stats.totalSessionsWon
      ));
      const summId = response.data.summonerId;
      console.log(champData);
      this.setState({
        champList: champData,
        summonerName:summId
       });


    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {



    /*axios.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/sonicrida?api_key=9a7252b5-2041-40c4-8404-856165308ef0')
    .then(function (response) {
      console.log(response);
    });*/



    return (
      <div className="Summoner-stats">
        {this.state.summonerName} = Sonicrida
        <ul>
          {this.state.champList.map(champ =>



            <li key={champ.id}>{champ.id} = Wins: {champ.stats.totalSessionsWon} Winrate = {Math.round((champ.stats.totalSessionsWon / champ.stats.totalSessionsPlayed * 100))}%</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
