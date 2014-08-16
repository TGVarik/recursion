// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var found = [];
  var that;
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
    if (that.children[el].classList) {
      if (that.children[el].classList.contains(className)) {
        found.push(that.children[el]);
      }
    }
    if (that.children[el].children) {
      if (that.children[el].children.length > 0) {
        found = found.concat(getElementsByClassName.call(that.children[el], className));
      }
    }
  }
  return found;
};
