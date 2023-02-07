// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // if obj is undefined, return 'null'
  if (obj === undefined) {
    return undefined;
  }

  // if obj is a function, return undefined
  if (typeof obj === 'function') {
    return undefined;
  }
  // if obj is null, return 'null';
  if (obj === null) {
    return 'null';
  }
  // if obj is a string, return ' + "string" + '
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // if obj is a boolean, return string version of boolean
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  // if obj is a number, return string version of number
  if (typeof obj === 'number') {
    return '' + obj;
  }
  // if obj is an array,
  if (Array.isArray(obj)) {
    //if length is 0, return []
    if (obj.length === 0) {
      return '[]';
    }
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }

    return '[' + result + ']';
  }
  // if obj is an object,
  if (typeof obj === 'object') {
    // if object is an empty object
    console.log(obj, 'obj');
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        delete obj[key];
      }
    }
    var result = '';
    for (var i = 0; i < Object.keys(obj).length; i++) {
      // push stringified key into result
      var key = Object.keys(obj)[i];

      result += stringifyJSON(key);
      result += ':' + stringifyJSON(obj[key]);

      if (i !== Object.keys(obj).length - 1) {
        result += ',';
      }

      console.log('result', result);
      // push stringified value into result
    }

    return '{' + result + '}';
  }
};
