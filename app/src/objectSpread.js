// example taken from https://github.com/tc39/proposal-object-rest-spread

let x = 1
let y = 2
let z = { a: 3, b: 4 }
let n = { x, y, ...z };
console.log(n);
