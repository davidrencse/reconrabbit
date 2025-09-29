require('dotenv').config();

module.exports = {
  development: {
    url: process.env.PG_URI,
    dialect: 'postgres'
  },
  test: {
    url: process.env.PG_URI,
    dialect: 'postgres'
  },
  production: {
    url: process.env.PG_URI,
    dialect: 'postgres'
  }
};