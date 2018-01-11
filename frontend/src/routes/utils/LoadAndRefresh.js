import React from 'react';
import { asyncGet } from './AsyncGetAndPost';
// import { getData } from './GetData';

const loadAndRefresh = url => (WrappedComponent) => {
  return class extends React.Component {
    // ？19行调用的 this.getData  隐式带有 cb参数？
    constructor(props) {
      super(props);
      this.state = {
        content: { data: {} },
      };
    }
    async _getData() {
      asyncGet(url).then((res) => {
        this.setState({ content: res });
      });
    }
    componentWillMount() {
      this._getData();
    }
    render() {
      // console.log('lads', this.props);
      const props = {
        res: this.state.content,
        ...this.props,
      };
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default loadAndRefresh;
