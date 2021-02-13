const { Pool } = require('pg');

const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Spread Joy',
  port: 5432,
});

client.connect();

module.exports = client;
