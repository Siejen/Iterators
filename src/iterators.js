
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
    }
  };

  return api;
})();

module.exports = Iterators;