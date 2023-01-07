import data from 'gulp-data';
import fs from 'fs';
import pug from 'gulp-pug';

export const getHTML = () => {
  return app.src(app.dev.views)
    .pipe(data(() => JSON.parse(fs.readFileSync(`${app.build.data}/data.json`, 'utf-8'))))
    .pipe(pug({
      pretty: !app.isProd,
      locals: `${app.build.data}/data.json`,
    }))
    .pipe(app.sync.stream())
    .pipe(app.dest(app.buildFolder));
};
