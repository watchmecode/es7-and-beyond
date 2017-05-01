// example taken from https://github.com/tc39/proposal-object-rest-spread

let {x, y, ...z} = { x: 1, y: 2, a: 3, b: 4 }; 

console.log("Result:", x, y, z);
