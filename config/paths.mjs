import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './docs/';
const devFolder = './app/';
const assetsFolder = `${devFolder}assets/`;
const allFolders = ['**', '!**/*.+(zip|rar|7zip)/**', '!node_modules/**', '!.idea/**', '!.git/**'];

export const paths = {
  build: {
    scripts: `${buildFolder}js`,
    media: `${buildFolder}img`,
    css: `${buildFolder}css`,
    fonts: `${buildFolder}fonts`,
    data: `${assetsFolder}data`,
  },
  dev: {
    scss: `${assetsFolder}scss/main.scss`,
    views: `${devFolder}views/*.pug`,
    libs: `${devFolder}libs/libs.js`,
    scripts: `${devFolder}**/*.ts`,
    fonts: `${assetsFolder}fonts/**/*.ttf`,
    img: `${assetsFolder}img/**/*.+(png|jpg|jpeg)`,
    webp: `${assetsFolder}webp/**/*.+(png|jpg|jpeg)`,
    svg: `${assetsFolder}svg/*.svg`,
    data: [`${devFolder}**/data.json`, `!${assetsFolder}data/data.json`],
  },
  watch: {
    img: `${assetsFolder}img/**/*.+(png|jpg|jpeg)`,
    webp: `${assetsFolder}webp/**/*.+(png|jpg|jpeg)`,
    fonts: `${assetsFolder}fonts/**/*.ttf`,
    svg: `${assetsFolder}svg/*.svg`,
    scripts: `${devFolder}**/*.ts`,
    libs: `${devFolder}libs/**/*.js`,
    scss: [`${devFolder}**/*.scss`, `${assetsFolder}**/*.scss`],
    data: [`${devFolder}**/data.json`, `!${assetsFolder}data/data.json`],
    pug: [`${devFolder}**/*.pug`, `${assetsFolder}data/data.json`],
  },
  clean: buildFolder,
  buildFolder,
  devFolder,
  rootFolder,
  allFolders,
};
