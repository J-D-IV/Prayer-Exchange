// const { response } = require('express');
const express = require('express');
const client = require('../database/index');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const joy = express.Router();


const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}
const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex');
}
joy.use(cookieParser());

joy.use((req, res, next) => {
  // Get auth token from the cookies
  const authToken = req.cookies['AuthToken'];

  // Inject the user to the request
  req.user = authToken;

  next();
});

joy.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = getHashedPassword(password);
  // console.log(hashedPassword);
  let text = 'SELECT * FROM users WHERE email=$1 AND password=$2';
  let values = [email, hashedPassword];

  client.query(text, values, (err, response) => {
    console.log(response)
    if (response.rowCount === 0) {
      res.send(err, {
        message: 'Invalid username or password',
        messageClass: 'alert-danger'
    });
    }
    else {
      const authToken = generateAuthToken();
      // Store authentication token
      let text = 'UPDATE users SET token=$1 WHERE email=$2';
      let values = [authToken, email];
      client.query(text, values, (err, result) => {
        if (err) {
          res.redirect('/login')
        } else {
        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken);
        // Redirect user to the protected page
        res.send(result);
        }
      })
    }}
  )  
});

joy.post('/register', (req, res) => {
  const { email, firstName, lastName, password, confirmPassword } = req.body;
  console.log('first name---- ', firstName);
  console.log('last name---- ', lastName);
  const hashedPassword = getHashedPassword(password)
  let text = 'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)';
  let values = [firstName, lastName, email, hashedPassword];

   // Check if the password and confirm password fields match
   if (password === confirmPassword) {

    client.query(`
    SELECT *
    FROM users
    WHERE email=${email}`,
    (err, data) => {

      if (data) {
        res.send(data);
        return;
        } 
      if (err) {
        client.query(text, values, (error, response) => {
            if (error) {
              console.log(error)
              res.status(400).send(error);
            } else {
              res.send(response)
            }
          });
         }
      })
      } 
      
      else {
        res.send(err);
      }
  });

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
  // console.log(req)
  const newjoy = req.body.joy;
  // const addedJoy = newjoy.joy;
  console.log(newjoy);

  const text = 'INSERT INTO newjoy (joy, approved) VALUES ($1, $2)';
  const values = [newjoy, 'false'];

  // client.query(`INSERT INTO newjoy (joy, approved) VALUES (${addedJoy}, 'false')`, (err, response) => {
  client.query(text, values, (err, response) => {
    if (err) {
      // console.log(err)
      res.status(400).send(err);
    } else {
      // console.log(response)
      res.status(200).send(response);
    }
  });
});

module.exports = joy;
