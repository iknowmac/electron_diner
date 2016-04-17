var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('should return 0 when the value is present', function () {
      assert.equal(0, [1,2,3].indexOf(1));
    });
  });

});
