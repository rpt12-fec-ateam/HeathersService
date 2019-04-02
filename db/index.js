const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
    if (err) {
      console.log('DB ERROR', err);
    } else {
      console.log('Connected to DB!')
    }
  });

connection.query('CREATE DATABASE IF NOT EXISTS dh', function(err, data) {
    if(err) {
      console.log('DB ERROR creating dh', err)
    } else {
      console.log(null, data)
    }
  });
  
  connection.query('USE dh', function(err, data) {
    if(err) {
      console.log('DB ERROR using dh', err)
    } else {
      console.log(null, data)
    }
  });
  
  connection.query(`CREATE TABLE IF NOT EXISTS ingredients (
    id int NOT NULL AUTO_INCREMENT,
    dishName VARCHAR(50),
    keyIngredients VARCHAR(300),
    ingredients VARCHAR(400),
    nutritionFacts VARCHAR(400),
    photoUrl VARCHAR(200),
    category VARCHAR(50)`, function(err, data) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log('Created ingredients table in dh DB')
    }
  });


  

  module.exports.connection = connection;