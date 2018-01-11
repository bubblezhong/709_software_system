import React, { PropTypes } from 'react';
import { asyncGet, asyncPost, asyncPut } from './AsyncGetAndPost';
// import { getData } from './GetData';

const editAndCreate = (loadUrl, editUrl, createUrl) => (WrappedComponent) => {
  return class extends React.Component {
    static propTypes = {
      params: PropTypes.object.isRequired,
    }
    // ？19行调用的 this.getData  隐式带有 cb参数？
    _loadData = async (cb) => {
      const newUrl = `${loadUrl}${this.props.params.id}`;
      console.log('newUrl', newUrl);
      asyncGet(newUrl).then((res) => {
        cb(res);
      });
    }
    _editData = async (body, cb) => {
      const newUrl = `${editUrl}${this.props.params.id}`;
      console.log('newUrl', newUrl);
      asyncPut(newUrl, body).then((res) => {
        console.log(res);
        cb(res);
      });
    }
    _createData = async (body, cb) => {
      console.log('newbody', body);
      asyncPost(createUrl, body).then((res) => {
        console.log(res);
        cb(res);
      });
    }
    render() {
      const props = {
        sendData: this._loadData,
        createData: this._createData,
        editData: this._editData,
        ...this.props,
      };
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default editAndCreate;
