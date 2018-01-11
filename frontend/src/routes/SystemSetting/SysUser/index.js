import main from './main';

const config = {
  path: 'User',
  component: main,
  // getComponent: ((location, callback) => {
  //   require.ensure([], (require) => {
  //     callback(null, require('./index'));
  //   }, 'ShowingSetting');
  // }),
};
export default config;
