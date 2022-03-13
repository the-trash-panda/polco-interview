/*
run `psql postgres` in terminal to start postgres
run `\i schema.sql` in postgres to run queries
*/

DROP DATABASE IF EXISTS polco_interview;

CREATE DATABASE polco_interview;

\c polco_interview;

CREATE TABLE myfavorites (
  id SERIAL PRIMARY KEY,
  artist VARCHAR DEFAULT NULL,
  track VARCHAR DEFAULT NULL
);