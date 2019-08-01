--RESET DATABASE SCRIPT

--local directory: c:/Users/jcf12/dc/development/april2019dc/project_4/designs/database

--REMOVES
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS portfolios;
DROP TABLE IF EXISTS coins;
DROP DATABASE IF EXISTS cryptonative_app;

--CREATE & CONNECT
CREATE DATABASE cryptonative_app;
\c cryptonative_app;
\i schema.sql;
\i seed.sql;