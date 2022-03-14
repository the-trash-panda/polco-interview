const client = require('../database/connection.js');

const getFavorites = (callback) => {
  const text = 'SELECT * FROM myfavorites'
  client.query(text, (error, results) => {
    callback(error, results);
  });
}

const updateFavorites = (req, callback) => {
  const update = {
    text: 'UPDATE myfavorites SET favorite = $3 WHERE artist = $1 AND track = $2',
    values: [req.body.artist, req.body.track, req.body.favorite]
  }
  const insert = {
    text: 'INSERT INTO myfavorites(artist, track, favorite) VALUES ($1, $2, $3)',
    values: [req.body.artist, req.body.track, req.body.favorite]
  }
  client.query(update, (error, results) => {
    if (results.rowCount !== 0) {
      callback(error, results);
    } else {
      client.query(insert, (error, results) => {
        callback(error, results);
      })
    }
  });
};


module.exports.getFavorites = getFavorites;
module.exports.updateFavorites = updateFavorites;