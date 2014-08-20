// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var pointer;

  var match = function(symbol){
    if (symbol === json[pointer+1]){
      pointer += 1;
      return true;
    } else {
      return false;
    }
  };

  var obj = function(){};
  var members = function(){};
  var pair = function(){};
  var arr = function(){};
  var elements = function(){};
  var value = function(){};



};


