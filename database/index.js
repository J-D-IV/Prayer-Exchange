const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

module.exports = client;

// const { Pool } = require('pg');

// const client = new Pool({
//    user: 'postgres',
//    host: '18.217.213.246',
//    database: 'postgres',
//    host: 'localhost',
//    database: 'Spread Joy',
//    port: 5432,
// });
