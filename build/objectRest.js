function doStuff(){
  console.log("object rest properties {x, y, ...z}");

  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }; 

  console.log("Result:", x, y, z);
}

doStuff();
