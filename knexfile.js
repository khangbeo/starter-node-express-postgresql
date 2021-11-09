const path = require("path");
// imports dotenv 
// dotenv loads the environment variables defined in .env
// into process.env
require("dotenv").config();
// stores the value of process.env.DATABASE_URL in DATABASE_URL
const { DATABASE_URL } = process.env;
console.log(DATABASE_URL)

module.exports = {
  development: {
    client: "postgresql",
    // sets the location of the database for the dev environment
    connection: DATABASE_URL,
    migrations: {
      // tells Knex to store migration files in the migrations
      // folder at src/db/migrations
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  },
};
