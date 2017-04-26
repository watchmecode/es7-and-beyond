"use strict";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function doStuff() {
  console.log("object rest properties {x, y, ...z}");

  var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 };

  let x = _x$y$a$b.x,
      y = _x$y$a$b.y,
      z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

  console.log("Result:", x, y, z);
}

doStuff();
