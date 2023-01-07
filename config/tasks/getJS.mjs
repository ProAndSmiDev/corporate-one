import concat from 'gulp-concat';
import ts from 'gulp-typescript';

export const getJS = () => {
  return app.src(app.dev.scripts)
    .pipe(concat('app.min.ts'))
    .pipe(ts({
      outFile: 'app.min.js',
    }))
    .pipe(app.uglJS())
    .pipe(app.dest(app.build.scripts));
};
