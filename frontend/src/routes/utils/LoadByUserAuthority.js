import React from 'react';
import { asyncGet } from './AsyncGetAndPost';
// import { getData } from './GetData';

const loadByUserAuthority = url => (WrappedComponent) => {
  return class extends React.Component {
    // static propTypes = {
    //   params: PropTypes.object.isRequired,
    // }
    _getData = async (params, cb) => {
      // console.log('getDetailInfo', this.props);
      const newUrl = `${url}?name=${params.name}&type=${params.type}`;
      console.log('newUrl', newUrl);
      asyncGet(newUrl).then((res) => {
        cb(res);
      });
    }
    render() {
      const props = {
        getData: this._getData,
        ...this.props,
      };
      // console.log('this.props.params.id', this.props.params.id);
      // console.log('newUrl', url);
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default loadByUserAuthority;
