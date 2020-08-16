var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass",function(){
  return gulp.src("scss/*.scss")

  .pipe(sass({
    outputstyle: "expanded"
  }))

  .pipe(gulp.dest("css"));
});

gulp.task("watch",function(){
  gulp.watch("scss/*.scss",gulp.task("sass"));
});