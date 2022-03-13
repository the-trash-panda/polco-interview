const model = require('../model/favorites.js');

const getFavorites = (req, res) => {
  model.getFavorites((err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.send(results).status(200);
    }
  })
};

module.exports.getFavorites = getFavorites;