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

app.get('/test', function (req, res) {
  res.status(200).send('Success the server is working I think :-)');
});

app.listen(6001, function() {
  console.log('Server listening on port 6001');
});