import React from 'react';
import { message } from 'antd';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

class SchemeList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    asyncGet(`${config.host}/SoftwareDeployment/Scheme/List`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  };

  publishScheme = (id) => {
    const sendData = { id };
    asyncPost(`${config.host}/SoftwareDeployment/Scheme/publish`, sendData)
      .then((data) => {
        if (data.code === 0) {
          message.success('生成成功');
          this.getData();
        }
      });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        publish: this.publishScheme,
        schemeList: this.state.data,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

SchemeList.propTypes = {
  children: React.PropTypes.object.isRequired,
};


export default SchemeList;
