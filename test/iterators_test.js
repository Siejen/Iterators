var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

// var gte21 = function( x ) { return x >= 21; }
// var myArr = [16, 18, 21, 32, 64 ];
// console.log(myArr);
// console.log(Iterators.filter( myArr, gte21 ));


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

  describe('#filter', function(){

    var gte21 = function( x ) { return x >= 21; }

    it('should return the legal ages', function(){
      var myArr = [16, 18, 21, 32, 64 ];
      expect(Iterators.filter( myArr, gte21 )).to.eql( [21, 32, 64] );
      expect(myArr).to.eql( [16, 18, 21, 32, 64] );
    })
    it('should return the legal ages', function(){
      var myArr = [1, 10, 100 ];
      expect(Iterators.filter( myArr, gte21 )).to.eql( [100] );
      expect(myArr).to.eql( [1, 10, 100] );
    })
  })

  describe('#map', function(){

    var squarer = function( x ) { return x*x; }

    it('map should square the values', function(){
      var myArr = [ 1, 2, 3 ];
      expect(Iterators.map( myArr, squarer )).to.eql( [1, 4, 9] );
      expect(myArr).to.eql( [1, 2, 3] );
    })
  })


  describe('#reduce', function(){

    var adder = function( x, y ) { return x+y; }

    it('should return the sum', function(){
      var myArr = [ 1, 2, 3 ];
      expect(Iterators.reduce( myArr, adder )).to.equal( 6 );
      expect(myArr).to.eql( [1, 2, 3] );
    })

    it('should return the sum', function(){
      var myArr = [ 1, 2 ];
      expect(Iterators.reduce( myArr, adder )).to.equal( 3 );
      expect(myArr).to.eql( [1, 2 ] );
    })

    it('should return the sum', function(){
      var myArr = [ 1, 2, 3, 4 ];
      expect(Iterators.reduce( myArr, adder )).to.equal( 10 );
      expect(myArr).to.eql( [1, 2, 3, 4 ] );
    })

    it('should return the sum', function(){
      var myArr = [ 3 ];
      expect(Iterators.reduce( myArr, adder )).to.equal( 3 );
      expect(myArr).to.eql( [3] );
    })

    it('should return the sum', function(){
      var myArr = [];
      expect(Iterators.reduce( myArr, adder )).to.equal( null );
      expect(myArr).to.eql( [] );
    })
  })

})

