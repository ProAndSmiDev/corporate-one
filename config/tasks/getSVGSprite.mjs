import svg from 'gulp-svg-sprite';

export const getSVGSprite = () => {
  return app.src(app.dev.svg)
    .pipe(svg({
      mode: {
        stack: {
          sprite: '../sprite.svg',
        },
        symbol: false,
        padding: 0,
      },
    }))
    .pipe(app.sync.stream())
    .pipe(app.dest(app.build.media));
};
