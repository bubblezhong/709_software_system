const loadAndRefresh = url => (WrappedComponent) => {
  return class extends React.Component {
    _sendData = (cb) => {
      asyncGet(url).then((res) => {
        console.log(res);
        cb(res);
      });
    }
    render() {
      const props = {
        sendData: this._sendData,
        ...this.props,
      };
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default loadAndRefresh;