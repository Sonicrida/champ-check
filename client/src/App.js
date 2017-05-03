import React from 'react';
import logo from './logo.svg';
import './App.css';
import SummonerStats from './SummonerStats';

function App() {
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
export default App;
