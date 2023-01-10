import { paths } from './config/paths.mjs';
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
  sync,
  uglJS,
  isProd,
  imgMin,
  rename,
  pngQuant,
  dev: paths.dev,
  build: paths.build,
  watch: paths.watch,
  clean: paths.clean,
  devFolder: paths.devFolder,
  allFolders: paths.allFolders,
  rootFolder: paths.rootFolder,
  buildFolder: paths.buildFolder,
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

  watch(app.watch.fonts, parallel([getWoffFonts, getWoff2Fonts]));
  watch(app.watch.svg, getSVGSprite);
  watch(app.watch.img, getOptimizedImages);
  watch(app.watch.webp, getWEBPImages);
  watch(app.watch.scripts, getJS);
  watch(app.watch.libs, getLibs);
  watch(app.watch.scss, getStyles);
  watch(app.watch.data, getData);
  watch(app.watch.pug, getHTML);
};

const getAssets = series([
  parallel(getWoffFonts, getWoff2Fonts),
  parallel(getSVGSprite, getWEBPImages, getOptimizedImages),
  parallel(getLibs, getJS, getStyles),
  series(getData, getHTML),
]);

const build = series([cleanDir, getAssets]);
const buildWithWatcher = series([build, watchFiles]);
const zipFiles = series([build, getZippedProject]);
/* Таски всего проекта */

/* Итоговые таски для работы */
task('build', buildWithWatcher);
task('zip', zipFiles);
task('default', watchFiles);
/* Итоговые таски для работы */

