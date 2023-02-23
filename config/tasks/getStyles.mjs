import dartSass from 'sass';
import csso from 'gulp-csso';
import notify from 'gulp-notify';
import gulpSass from 'gulp-sass';
import prefix from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import gcmq from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const getStyles = () => {
  if (app.isProd) {
    return app.src(app.dev.scss)
      .pipe(sass({
        includePaths: ['node_modules'],
      }).on('error', notify.onError()))
      .pipe(prefix([
        '> 1%',
        'ie 8',
        'ie 7',
        'last 15 versions',
      ]))
      .pipe(app.rename({
        basename: 'styles',
        suffix:   '.min',
      }))
      .pipe(gcmq())
      .pipe(csso())
      .pipe(app.dest(app.build.css));
  } else {
    return app.src(app.dev.scss)
      .pipe(sourcemaps.init())
      .pipe(sass({
        includePaths: ['node_modules'],
      }).on('error', notify.onError()))
      .pipe(prefix([
        '> 1%',
        'ie 8',
        'ie 7',
        'last 15 versions',
      ]))
      .pipe(app.rename({
        basename: 'styles',
        suffix:   '.min',
      }))
      .pipe(gcmq())
      .pipe(sourcemaps.write("."))
      .pipe(app.sync.stream())
      .pipe(app.dest(app.build.css));
  }
};
