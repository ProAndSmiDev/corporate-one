import ttf2woff from 'gulp-ttf2woff';

export const getWoffFonts = () => {
  return app.src(app.dev.fonts)
    .pipe(ttf2woff())
    .pipe(app.sync.stream())
    .pipe(app.dest(app.build.fonts));
};
