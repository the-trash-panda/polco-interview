/*
run `psql postgres` in terminal to start postgres
run `\i schema.sql` in postgres to run queries
*/

DROP DATABASE IF EXISTS polco_interview;

CREATE DATABASE polco_interview;

\c polco_interview;

DROP TABLE IF EXISTS myfavorites;

CREATE TABLE myfavorites (
  id SERIAL PRIMARY KEY,
  artist VARCHAR DEFAULT NULL,
  track VARCHAR DEFAULT NULL,
  favorite BOOLEAN DEFAULT NULL
);

/* Example data set: */

INSERT INTO myfavorites (artist, track, favorite) VALUES ('The Weeknd', 'Blinding Lights', true);
INSERT INTO myfavorites (artist, track, favorite) VALUES ('Doja Cat', 'Woman', false);
