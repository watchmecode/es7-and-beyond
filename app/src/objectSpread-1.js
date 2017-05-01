// example taken from https://github.com/tc39/proposal-object-rest-spread

var x = 1;
var y = 2;
var z = { a: 3, b: 4 };

// spread the {z} object into a new object
var n = { x, y, ...z };

console.log(n);
