
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },

    min: function(numList){
      var min = +Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] < min ) {
          min = numList[i];
        }
      };
      return min;
    },

    each: function( list, action ) {
      for( var i = 0; i < list.length; i++ ) {
        action( list[i] );
      }
      return list;
    },

    map: function( list, action ) {
      var result = [];
      for( var i = 0; i < list.length; i++ ) {
        var x = action( list[i] );
        result.push(x);
      }
      return result;
    },

    filter: function( list, test ) {
      var result = [];
      for( var i = 0; i < list.length; i++ ) {
        if( test( list[i] ) ) {
          result.push( list[i] );
        }
      }
      return result;
    },

    reject: function( list, test ) {
      var result = [];
      for( var i = 0; i < list.length; i++ ) {
        if( !test( list[i] ) ) {
          result.push( list[i] );
        }
      }
      return result;
    },

    reduce: function( list, combiner ) {
      // too complicated
      if( list.length === 0 ) { return null; }

      var result = list[0];

      for( var i = 1; i < list.length; i++ ) {
        result = combiner( result, list[i] );
      }
      return result;
    }

  }
  return api;
})();

module.exports = Iterators;