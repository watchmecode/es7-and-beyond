"use strict";

let doStuff = (() => {
  var _ref = _asyncToGenerator(function* () {
    return new Promise(function (res) {
      setTimeout(function () {
        res("I'm async!");
      }, 1000);
    });
  });

  return function doStuff() {
    return _ref.apply(this, arguments);
  };
})();

let exec = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    console.log("before the awesome async call");

    var result = yield doStuff();
    console.log(result);

    console.log("after the coolest async call");
  });

  return function exec() {
    return _ref2.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

exec();