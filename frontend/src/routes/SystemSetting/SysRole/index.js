import main from './main';

const config = {
  path: 'Role',
  component: main,
  // getComponent: ((location, callback) => {
  //   require.ensure([], (require) => {
  //     callback(null, require('./index'));
  //   }, 'ShowingSetting');
  // }),
};
export default config;
