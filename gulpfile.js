import { path } from './config/paths.mjs';
import browserSync from 'browser-sync';
import {
  src,
  dest,
  task,
  watch,
  uglJS,
  series,
  rename,
  imgMin,
  parallel,
  pngQuant,
} from './config/plugins.mjs';

const sync = browserSync.create();
const isProd = (process.env.NODE_ENV === 'prod');

global.app = {
  src,
  dest,
  task,
  sync,
  uglJS,
  isProd,
  series,
  imgMin,
  rename,
  parallel,
  pngQuant,
  dev: path.dev,
  watcher: watch,
  build: path.build,
  watch: path.watch,
  clean: path.clean,
  allFolders: path.allFolders,
  rootFolder: path.rootFolder,
  buildFolder: path.buildFolder,
};

/* Таски для работы с файлами */
import { cleanDir } from './config/tasks/cleanDir.mjs';
import { getZippedProject } from './config/tasks/zipProject.mjs';
/* Таски для работы с файлами */

/* Таски для работы со шрифтами */
import { getWoffFonts } from './config/tasks/getWoffFonts.mjs';
import { getWoff2Fonts } from './config/tasks/getWoff2Fonts.mjs';
/* Таски для работы со шрифтами */

/* Таски для работы с медиа */
import { getSVGSprite } from './config/tasks/getSVGSprite.mjs';
import { getWEBPImages } from './config/tasks/getWEBPImages.mjs';
import { getOptimizedImages } from './config/tasks/getOptimizedImages.mjs';
/* Таски для работы с медиа */

/* Таски для работы с библиотеками */
import { getLibs } from './config/tasks/getLibs.mjs';
/* Таски для работы с библиотеками */

/* Таски для работы со скриптами */
import { getJS } from './config/tasks/getJS.mjs';
/* Таски для работы со скриптами */

/* Таски для работы со стилями */
import { getStyles } from './config/tasks/getStyles.mjs';
/* Таски для работы со стилями */

/* Таски для работы с шаблонами */
import { getData } from './config/tasks/getData.mjs';
import { getHTML } from './config/tasks/getHTML.mjs';
/* Таски для работы с шаблонами */

/* Таски всего проекта */
const watchFiles = () => {
  sync.init({
    server: {
      baseDir: app.buildFolder,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    notify: false,
  });

  app.watcher(app.watch.fonts, app.parallel([getWoffFonts, getWoff2Fonts]));
  app.watcher(app.watch.svg, getSVGSprite);
  app.watcher(app.watch.img, getOptimizedImages);
  app.watcher(app.watch.webp, getWEBPImages);
  app.watcher(app.watch.scripts, getJS);
  app.watcher(app.watch.libs, getLibs);
  app.watcher(app.watch.scss, getStyles);
  app.watcher(app.watch.data, getData);
  app.watcher(app.watch.pug, getHTML);
};

const getAssets = app.series([
  app.parallel(getWoffFonts, getWoff2Fonts),
  app.parallel(getSVGSprite, getWEBPImages, getOptimizedImages),
  app.parallel(getLibs, getJS, getStyles),
  app.series(getData, getHTML),
]);

const build = app.series([cleanDir, getAssets]);
const buildWithWatcher = app.series([build, watchFiles]);
const zipFiles = app.series([build, getZippedProject]);
/* Таски всего проекта */

/* Итоговые таски для работы */
task('build', buildWithWatcher);
task('zip', zipFiles);
task('default', watchFiles);
/* Итоговые таски для работы */
