import React, { Component } from 'react';

class ChampStats extends Component {
  render() {
    
    return <li key={this.props.champId}> {this.props.champId} {this.props.champName} = Wins = {this.props.gamesWon} | Losses = {this.props.gamesPlayed - this.props.gamesWon} | Winrate = {Math.round((this.props.gamesWon / this.props.gamesPlayed * 100))}%</li>
  }
}

export default ChampStats;