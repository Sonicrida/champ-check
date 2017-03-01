import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import champList from './champIds'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Champ Check</h2>
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
      rankedChampList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateStats = this.updateStats.bind(this);
  }

  /*componentWillMount() {

    axios.get('api/summonerName?&summonerName=Sonicrida')
    .then(response => {

      this.setState({
        summonerName: 'Sonicrida',
      });

      axios.get('api/summonerStats?&summonerId=' + response.data.sonicrida.id)
      .then(response => {
        //console.log("starting to recieve data");
        //console.log(response.data);

        let champData = response.data.champions.sort((a, b) => (
          b.stats.totalSessionsWon - a.stats.totalSessionsWon
        ));

        //console.log(champData);

        this.setState({
          rankedChampList: champData,
        });

      });

    });

  }*/

  handleChange(event) {



    this.setState({
      summonerName: event.target.value
    });

  }

  updateStats(event) {

    console.log(this.state.SummonerName + "is the current name");
    event.preventDefault();
  }

  render() {


    //console.log(champList);
    let formattedChampList = [];

    champList.forEach(function(item, index) {
      //console.log(item);
      formattedChampList[item.id] = item.name;
    });

    console.log(this.state.summonerName);

    return (
      <div className="Summoner-stats">

        

        {this.state.summonerName}
        <ul>
          {this.state.rankedChampList.map(champ =>



            <li key={champ.id}>{formattedChampList[champ.id]} = Wins: {champ.stats.totalSessionsWon} Winrate = {Math.round((champ.stats.totalSessionsWon / champ.stats.totalSessionsPlayed * 100))}%</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
