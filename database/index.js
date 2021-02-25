const { Pool } = require('pg');

const client = new Pool({
  // user: 'postgres',
  // host: '18.217.213.246',
  database: 'postgres',
  host: 'localhost',
  database: 'Spread Joy',
  port: 5432,
});

client.connect();

module.exports = client;
