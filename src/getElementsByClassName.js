// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var found = [];
  var that;

  var hasClass = function(node, className){
    if (node.classList){
      if (node.classList.contains(className)){
        return true;
      }
    }
    return false;
  };

  var searchNodes = function(node, className){
    if (hasClass(node, className)){
      found.push(node);
    }
    if (node.children){
      if (node.children.length > 0){

      }
    }
  };

  if (this === window || this === document || this == document.body){
    // When called on the document object, the complete document is searched, including the root node
    that = document.body;
    if (that.classList.contains(className)){
      found.push(that)
    }
  } else {
    // Otherwise, return only elements which are descendants of the specified root element with the given class names
    that = this;
  }
  for (el in that.children) {
    var child = that.children[el];
    if (child.classList && child.classList.contains(className)) {
      found.push(child);
    }
    if (child.children && child.children.length > 0) {
      found = found.concat(getElementsByClassName.call(child, className));
    }
  }
  return found;
};
