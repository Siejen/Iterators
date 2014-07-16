var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })


  describe('#min', function(){
    it('should return the minimum in an array', function(){
      var myArr = [66,22,67, 34];
      expect(Iterators.min(myArr)).to.equal(22);
    })    
    it('should return +Infinity for empty array', function(){
      var myArr = [];
      expect(Iterators.min(myArr)).to.equal(+Infinity);
    })
    it('should return the minimum in an array', function(){
      var myArr = [66,-1,22,67, 34];
      expect(Iterators.min(myArr)).to.equal(-1);
    })    
    it('should return the minimum in an array', function(){
      var myArr = [66,-1, 22, 67, 34,-2.2];
      expect(Iterators.min(myArr)).to.equal(-2.2);
    })    
  })
})