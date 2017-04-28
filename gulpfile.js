var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");

const SRC_FILES = "app/src/**/*.js";
const DEST = "app/build";

gulp.task("default", function(){
  return watch(SRC_FILES, function(){
    console.log("Building:", SRC_FILES);
    return gulp.src(SRC_FILES)
      .pipe(babel())
      .pipe(gulp.dest(DEST));
  });
});
