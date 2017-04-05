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
    this.enterSummonerName = this.enterSummonerName.bind(this);
    this.updateStats = this.updateStats.bind(this);
  }

  enterSummonerName(event) {
    this.setState({
      summonerName: event.target.value
    });
  }

  updateStats(event) {

    axios.get('api/summonerName?&summonerName=' + this.state.summonerName.toLowerCase())
    .then(response => {

      console.log(response);

      /*this.setState({
        summonerName: 'Sonicrida',
      });*/

      axios.get('api/summonerStats?&summonerId=' + response.data[this.state.summonerName.toLowerCase().replace(/\s/g,'')].id)
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

    event.preventDefault();
  }

  render() {

    //console.log(champList);
    let formattedChampList = [];

    champList.forEach(function(item, index) {
      if (item.id != 0) {

        formattedChampList[item.id] = item.name;
      }
    });

    return (
      <div className="Summoner-stats">

        <form onSubmit={this.updateStats}>
          <label>
            Summoner Name:
            <input type="text" value={this.state.summonerName} onChange={this.enterSummonerName}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        {this.state.summonerName}
        <ul>
          {this.state.rankedChampList.map(champ =>

            <ChampStats champId={champ.id} champName={formattedChampList[champ.id]} gamesWon={champ.stats.totalSessionsWon} gamesPlayed={champ.stats.totalSessionsPlayed} />

            

          )}
        </ul>
      </div>
    );
  }
}

class ChampStats extends Component {
  render() {
    
    return <li key={this.props.champId}> {this.props.champId} {this.props.champName} = Wins = {this.props.gamesWon} | Losses = {this.props.gamesPlayed - this.props.gamesWon} | Winrate = {Math.round((this.props.gamesWon / this.props.gamesPlayed * 100))}%</li>
  }
}

export default App;
