// const { response } = require('express');
const express = require('express');
const client = require('../database/index');

const joy = express.Router();


joy.get('/api/joy', (req, res) => {
  client.query(`
  SELECT joy 
  FROM joy 
  OFFSET floor(random()* 36) 
  LIMIT 1`,
  (err, response) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
    } else {
      res.status(200).send(response.rows[0].joy);
    }
  });
});

joy.post('/api/newjoy', (req, res) => {
  console.log(req);
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
