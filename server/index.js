const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../db/index.js');
const connection = db.connection;

const app = express();
app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/ingredients', function (req, res) {
  // res.status(200).send('Success the server is working I think :-)');
  connection.query('SELECT * FROM ingredients', (err, data) => {
    if (err) {
      console.log('Error from Server Get', err);
    } else {
      console.log('data from db query in server:', data)
      res.send(data);
    }
  });
});

app.listen(6001, function() {
  console.log('Server listening on port 6001');
});