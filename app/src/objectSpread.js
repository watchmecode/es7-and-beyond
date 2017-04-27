let x = 1
let y = 2
let z = { a: 3, b: 4 }
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
