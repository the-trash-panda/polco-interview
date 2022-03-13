const { Client } = require('pg');
const client = new Client({
  user: 'root',
  database: 'polco_interview',
  port: 5432
})
const db = client.connect();


db
  .then(db => console.log(`Connected to: PSQL`))
  .catch(err => {
    console.log(`There was a problem connecting to PSQL`);
    console.log(err);
  });

module.exports = client;