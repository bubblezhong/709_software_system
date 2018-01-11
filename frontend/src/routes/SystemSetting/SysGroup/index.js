import main from './main';

const config = {
  path: 'Group',
  component: main,
  // getComponent: ((location, callback) => {
  //   require.ensure([], (require) => {
  //     callback(null, require('./index'));
  //   }, 'ShowingSetting');
  // }),
};
export default config;
