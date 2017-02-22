import express from 'express';
import axios from 'axios';


const app = express();

app.get('/api/summonerName/', (req, res) => {

  let summoner = {};
  console.log(req.params);
  //console.log(req.query.summonerName.toLowerCase());
  let summonerName = req.query.summonerName.toLowerCase();

  axios.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=9a7252b5-2041-40c4-8404-856165308ef0')
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

  axios.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + summonerId + '/ranked?season=SEASON2017&api_key=9a7252b5-2041-40c4-8404-856165308ef0')
  .then(function (response) {
    champData = response.data;
    res.send(champData);
  });


});


export default app;
