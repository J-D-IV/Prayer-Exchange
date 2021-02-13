// const { response } = require('express');
const express = require('express');
const client = require('../db/newIndex');

const prayer = express.Router();

prayer.get('/api/prayer', (req, res) => {
  // client.query('SELECT * FROM prayer WHERE ratio=1 LIMIT 10', (err, response) => {
  client.query(`
  SELECT * 
  FROM prayer`,
  (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(prayersAndPics);
    }
  });
});

prayer.get('/api/prayer/:id', (req, res) => {
  const id = client.query(`SELECT reltuples::bigint AS estimate FROM pg_class where relname='showcase'`);
  client.query(`
  SELECT * 
  FROM prayer 
  WHERE id=${id}`,
  (err, response) => {
    if (err) {
      res.status(400).send(err);
      // console.log(err);
    } else {
      res.status(200).send(response);
    }
  });
});

prayer.post('/api/prayer/:id', (req, res) => {
  const newprayer = req.body;
  const { prayer } = newprayer;

  const text = 'INSERT INTO newprayers (prayer) VALUES ($1)';
  const values = [prayer];

  client.query(text, values, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response);
    }
  });
});

module.exports = prayer;
