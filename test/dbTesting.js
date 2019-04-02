var chai = require('chai');
var should = chai.should();
var expect = require('chai').expect;
var assert = require('chai').assert;

//require db file with query

describe('FEC DB', function() {
  
     //check for types of each value in db schema
    it('should have specific data types for each property of the item', () => {
      //reference db query
      ((err, results) => {
          //code to check each value of each prop
          done();
      })
    });

    it('should have at least 100 items stored', (done) => {
        //reference db query
        ((err, results) => {
          assert.isAtLeast(results.length, 100)
          done();
        });
    });

});