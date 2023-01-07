import babelify from 'babelify';
import browserify from 'gulp-bro';

export const getLibs = () => {
  return app.src(app.dev.libs, {allowEmpty: true})
    .pipe(browserify({
      transform: [
        babelify.configure({
          presets: ['@babel/env'],
        }),
      ],
    }))
    .pipe(app.rename('libs.min.js'))
    .pipe(app.uglJS())
    .pipe(app.dest(app.build.scripts));
};
