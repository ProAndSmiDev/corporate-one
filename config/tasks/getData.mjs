import mergeData from 'gulp-merge-json';

export const getData = () => {
  return app.src(app.dev.data)
    .pipe(mergeData({
      fileName: 'data.json',
    }))
    .pipe(app.dest(app.build.data));
};
