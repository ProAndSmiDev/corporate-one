export const getOptimizedImages = () => {
  return app.src(app.dev.img)
    .pipe(app.imgMin({
      interlaced: true,
      progressive: true,
      svgoPlugins: {
        removeViewBox: false,
      },
      verbose: true,
      use: app.pngQuant(),
    }))
    .pipe(app.sync.stream())
    .pipe(app.dest(app.build.media));
};
