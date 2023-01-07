import zip from 'gulp-zip';

export const getZippedProject = () => {
  if (app.isProd) {
    return app.src(`${app.buildFolder}**`)
      .pipe(zip(`${app.rootFolder}.zip`))
      .pipe(app.dest('./'));
  }
  return app.src(app.allFolders, {
    dot: true,
  })
    .pipe(zip(`${app.rootFolder}.zip`))
    .pipe(app.dest('./'));
};
