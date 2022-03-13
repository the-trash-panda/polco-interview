const client = require('../database/connection.js');

const getFavorites = (callback) => {
  const text = 'SELECT * FROM myfavorites'
  client.query(text, (error, results) => {
    callback(error, results);
  });
}

module.exports.getFavorites = getFavorites;