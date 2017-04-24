import express from 'express';
import axios from 'axios';
import config from './config'
const path = require('path');


const app = express();
const apiKey = config.API_KEY;


app.get('/api/summonerName/', (req, res) => {

  let summoner = {};
  console.log(req.params);
  //console.log(req.query.summonerName.toLowerCase());
  let summonerName = req.query.summonerName.toLowerCase();

  axios.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=' + apiKey)
  .then(function (response) {
    summoner = response.data;
    //console.log(summoner);
    res.send(summoner);
  });


});

app.get('/api/summonerStats/', (req, res) => {

  console.log("summonerStats requested");

  let champData = {};

  let summonerId = req.query.summonerId;

  axios.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + summonerId + '/ranked?season=SEASON2017&api_key=' + apiKey)
  .then(function (response) {
    champData = response.data;
    res.send(champData);
  });


});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  console.log("Squad");
});


export default app;
