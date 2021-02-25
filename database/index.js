const { Pool } = require('pg');

const client = new Pool({
  // user: 'postgres',
  // host: '18.217.213.246',
  // database: 'postgres',
  // host: 'localhost',
  user: 'fccseqhawfwmem',
  database: 'd739q6ilskd55v',
  host: 'ec2-54-164-241-193.compute-1.amazonaws.com',
  password: 'e9a6a5645eda0477e16384d6de9abb2f04662b2461de85fe57aefc6487f17112',
  database: 'Spread Joy',
  port: 5432,
});

client.connect();

module.exports = client;
