/* eslint-disable no-console */
// require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const joy = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/', joy);

app.engine('handlebars', exphbs({
  extname: '.handlebars'
}));

app.set('view engine', 'handlebars');

app.listen(port, (err) => {
  if (err) {
    console.log('Error Starting server');
  } else {
    console.log('Server Running on Port: ', port);
  }
});


