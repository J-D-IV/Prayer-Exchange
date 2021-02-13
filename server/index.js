/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const showcase = require('./newShowcase');

const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/', showcase);

app.listen(port, (err) => {
  if (err) {
    console.log('Error Starting server');
  } else {
    console.log('Server Running on Port: ', port);
  }
});


