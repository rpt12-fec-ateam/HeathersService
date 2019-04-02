var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/index.js');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = chai.should();

chai.use(chaiHTTP);

describe('FEC Server', () => {

    it('should list ALL ingredients on /ingredients GET', function(done) {
        chai.request(server)
            .get('/ingredients')
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
        });
    
    it('should respond with a list of at least 100 items', () => {
      chai.request(server)
        .get('/ingredients')
        .end((err, res) => {
          assert.isAtLeast(res.body.ingredients.length, 100)
          done();
        });
    });
    
    
});