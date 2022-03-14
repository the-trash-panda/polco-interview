# Polco Interview Challenge

This repository runs on Node.js version 16.9.1 and uses a postgres database.


## Technical Assessment

Install project dependencies by running `npm install` from the root of this directory. <br/>
Start the app by running `npm start` and `npm run server` from the root of this directory in two different terminal windows. <br/>
Open a browser at `http://localhost:3000/`.
To add sample data to your database, please click on the schema.sql script at the root of this directory.
Copy `example.config.js` and rename it as `config.js` at the root of this directory.


### Project Description
On page render/main page button click, user should be able to see lastFM's top 50 hits.
On favorites button click, user should be able to view currently favorited songs.
On individual track click from main page and favorites, user should be able to see artist, track, album, and genre.
On heart click, user should be able to add/remove tracks to favorite list.