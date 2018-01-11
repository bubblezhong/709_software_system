import React from 'react';
// import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
// import { asyncGet } from './../../../utils/AsyncGetAndPost';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareList: null,
    };
  }

  componentWillMount = () => {
    const { softwareId } = this.props;
    this.getSoftware(softwareId);
  };
  getSoftware = () => {
    // asyncGet(`${config.host}/SoftwareInfo/Tree/SoftwareList/${id}`).then((data) => {
    const softwareList = [];
    for (let i = 0; i < 10; i++) {
      softwareList.push({
        id: i,
        name: `版本${i + 1}`,
        type: `类别${i + 1}`,
        modules: [
          { id: 1, name: '模块1', parent_id: 0 },
          { id: 2, name: '模块2', parent_id: 0 },
          { id: 3, name: '模块3', parent_id: 1 },
          { id: 4, name: '模块4', parent_id: 1 },
          { id: 5, name: '模块5', parent_id: 2 },
          { id: 6, name: '模块6', parent_id: 4 },
          { id: 7, name: '模块7', parent_id: 4 },
          { id: 8, name: '模块8', parent_id: 3 },
          { id: 9, name: '模块9', parent_id: 4 },
          { id: 10, name: '模块10', parent_id: 5 },
        ].slice(0, i),
      });
    }
    this.setState({ softwareList });
    // });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        dataSource: this.state.softwareList,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

EditModal.propTypes = {
  softwareId: React.PropTypes.num,
  children: React.PropTypes.node,
};

export default EditModal;
