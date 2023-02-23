import ttf2woff2 from 'gulp-ttf2woff2';

export const getWoff2Fonts = () => {
  return app.src(app.dev.fonts)
    .pipe(ttf2woff2())
    .pipe(app.sync.stream())
    .pipe(app.dest(app.build.fonts));
};
