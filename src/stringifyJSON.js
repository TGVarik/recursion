// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null){
    return 'null'
  } else if (obj === undefined) {
    return 'undefined';
  } else if (obj instanceof Function){
    return 'undefined';
  } else if (obj instanceof Array){
    return '[' + _.map(obj, stringifyJSON).join(',') + ']';
  } else if (obj instanceof Object) { // Object.prototype.toString.call(obj) === '[object Object]'
    return '{' + _.filter(_.map(obj, function (item, key){
      var v = stringifyJSON(item);
      if (v !== 'undefined'){
        return '"' + key + '":' + v;
      } else {
        return null;
      }
    }), function(item){return item !== null;}).join(',') + '}';
  } else if (typeof obj === 'string'){
    // forgot to escape! Need to escape \, ", '
    return '"' + obj + '"';
  } else {
    return obj.toString();
  }
};
