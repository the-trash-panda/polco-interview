const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const prune = require('json-prune');
const axios = require('axios');
const controller = require('../controller/favorites.js');

const lastFM = require('../config.js');


const filePath = path.join(__dirname, '../dist');


app.use(express.static(filePath));

app.use(express.json());

const URL = 'http://ws.audioscrobbler.com/2.0/';


app.get('/api/topTracks', async (req, res) => {
  try {
    const params = {
      method: 'chart.gettoptracks',
      format: 'json',
      api_key: lastFM.API_KEY
    };
    const data = await axios.get(URL, {params});
    let results = prune(data);
    res.send(results).status(200);
  } catch (err) {
    res.send(err).status(404);
  }
});

app.get('/api/trackInfo', async (req, res) => {
  try {
    const params = {
      method: 'track.getInfo',
      format: 'json',
      api_key: lastFM.API_KEY,
      ...req.query,
    };
    const data = await axios.get(URL, {params});
    let results = prune(data);
    res.send(results).status(200);
  } catch (err) {
    res.send(err).status(404);
  }
})

app.get('/api/favorites', (req, res) => {
  controller.getFavorites(req, res);
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});