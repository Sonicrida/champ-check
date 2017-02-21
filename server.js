import express from 'express';
import axios from 'axios';

const app = express();
app.listen(3001, () => {

  axios.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/sonicrida?api_key=9a7252b5-2041-40c4-8404-856165308ef0')
  .then(function (response) {
    console.log(response.data);

  });

  console.log('Server is running on port 3001!');

});
