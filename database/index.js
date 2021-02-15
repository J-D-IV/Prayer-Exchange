const { Pool } = require('pg');

const client = new Pool({
  user: 'postgres',
  // host: '18.218.122.135',
  host: 'localhost',
  database: 'Spread Joy',
  // database: 'postgres',
  port: 5432,
});

client.connect();

module.exports = client;
