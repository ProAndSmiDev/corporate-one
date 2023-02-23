import webp from 'gulp-cwebp';

export const getWEBPImages = () => {
  return app.src(app.dev.webp)
    .pipe(app.imgMin({
      interlaced: true,
      progressive: true,
      svgoPlugins: {
        removeViewBox: false,
      },
      verbose: true,
      use: app.pngQuant(),
    }))
    .pipe(webp())
    .pipe(app.sync.stream())
    .pipe(app.dest(app.build.media));
};
