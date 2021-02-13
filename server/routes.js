// const { response } = require('express');
const express = require('express');
const client = require('../database/index');

const joy = express.Router();


joy.get('/api/joy', (req, res) => {
  client.query(`
  SELECT reltuples::
  bigint AS estimate 
  FROM pg_class 
  WHERE relname='joy'`,
  (err, number) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
    } else {
      const random = Math.ceil(Math.random() * number.rows[0].estimate);
      console.log(random);
      client.query(`
      SELECT joy 
      FROM joy 
      WHERE id=${random}`,
      (err, response) => {
        if (err) {
          res.status(400).send(err);
          console.log(err);
        } else {
          res.status(200).send(response.rows[0].joy);
        }
      });
    }
  })
});

joy.post('/api/newjoy', (req, res) => {
  const newjoy = req.body;
  const { joy } = newjoy;

  const text = 'INSERT INTO newjoys (joy, approved) VALUES ($1, $2)';
  const values = [joy, 'false'];

  client.query(text, values, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response);
    }
  });
});

module.exports = joy;
