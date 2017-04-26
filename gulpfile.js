var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require("gulp-watch");

const SRC_FILES = "app/src/**/*.js";
const DEST = "app/build";

gulp.task("build", function () {
  return gulp.src(SRC_FILES)
    .pipe(babel())
    .pipe(gulp.dest(DEST));
});

gulp.task("default", ["build"]);
gulp.task("watch", ["build"]);
