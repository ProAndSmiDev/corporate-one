import gulp from 'gulp';
import uglJS from 'gulp-uglify';
import rename from 'gulp-rename';
import imgMin from 'gulp-imagemin';
import pngQuant from 'imagemin-pngquant';

const { src, watch, dest, series, parallel, task } = gulp;

export {
  src,
  dest,
  task,
  watch,
  uglJS,
  series,
  rename,
  imgMin,
  pngQuant,
  parallel
};
