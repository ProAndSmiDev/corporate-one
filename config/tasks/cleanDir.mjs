import del from 'del';

export const cleanDir = async () => {
  return del([app.build.data, app.clean]);
};
