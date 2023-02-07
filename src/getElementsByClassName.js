// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {

  // create nodelist variable
  var nodeList = document.body;
  // create result variable
  var result = [];
  // initiate it with document.body
  var search = function (node) {
  // if current node has classname
    console.log('node', node);
    if (node.classList && node.classList.contains(className)) {
    // push node into result variable
      console.log('node2', node);
      result.push(node);
      console.log('result', result);
    }
    // if current node has children
    for (var i = 0; i < node.childNodes.length; i++) {
      search(node.childNodes[i]);
    }
  // return result
  // loop through each child node and recursively call function
  };
  search(document.body);
  // return result
  return result;

};

/*
// your code here

  // create nodelist variable
  var nodeList = document.body;
  // create result variable
  var result = [];
  // initiate it with document.body
  var search = function (node) {
  // if current node has classname
    console.log('node', node);
    if (node.classList && node.classList.contains(className)) {
    // push node into result variable
    console.log('node2', node);
      result.push(node);
      console.log('result', result);
    }
    // if current node has children
    for (var i = 0; i < node.childNodes.length; i++) {
      search(node.childNodes[i]);
    }
  // return result
  // loop through each child node and recursively call function
  };
  search(document.body);

*/
