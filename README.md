# Polco Interview Challenge

This repository runs on Node.js version 16.9.1 and uses a postgres database.


## Technical Assessment

Install project dependencies by running `npm install` from the root of this directory in your terminal. <br/>
Copy `example.config.js` and rename it as `config.js` at the root of this directory. <br/>
An API key for this repo may be retrieved here: [https://www.last.fm/api](https://www.last.fm/api) <br/>
Run `psql postgres` in terminal to start postgres and then `\i schema.sql` in postgres to run schema. <br/>
Start the app by running `npm start` and `npm run server` from the root of this directory in two different terminal windows. <br/>
Open a browser at `http://localhost:3000/`. <br/>


### Project Description
On page render/main page button click, user should be able to see lastFM's top 50 hits. <br/>
On favorites button click, user should be able to view currently favorited songs. <br/>
On individual track click from main page and favorites, user should be able to see artist, track, album, and genre. <br/>
On heart click, user should be able to add/remove tracks to favorite list. <br/>
