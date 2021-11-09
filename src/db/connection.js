/* 
determines the current environment where the app code 
is running and stores the value in the env variable. If
process.env.NODE_ENV is not defined, then set it to development
*/
const env = process.env.NODE_ENV || "development";
/*
requires the database config object from the knexfile.js
for the current environment and stores it in config. If env
is set to development, then config will be set to the
development config object from knexfile.js
*/
const config = require("../../knexfile")[env];
/*
initializes a Knex instance by calling the knex module
passing in config as an argument
*/
const knex = require("knex")(config);
// exports knex instance for other files to use it
module.exports = knex;