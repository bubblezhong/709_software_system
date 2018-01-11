import React from 'react';
import { Button } from 'antd';
import RequestForm from './RequestForm';

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: '新建申请',
    };
  }
  onCancel = () => {
    this.setState({ visible: false });
  }
  onOk = () => {
    this.setState({ visible: false });
  }
  onEdit = () => {
    this.setState({ visible: true });
  }
  render() {
    const {
      type = 'default',
      style = {},
      defaultValue = {},
    } = this.props;
    const { visible } = this.state;
    let buttonShow = null;
    switch (type) {
      case 'edit':
        buttonShow = (
          <button
            className="tableCellAction"
            onClick={() => {
              this.setState({
                visible: true,
                defaultValue,
                title: '编辑申请',
              });
            }}
          >编辑</button>
        );
        break;
      default:
        buttonShow = (
          <Button
            type="primary"
            style={{ marginBottom: 8 }}
            onClick={() => {
              this.setState({
                visible: true,
                defaultValue: null,
                title: '新建申请',
              });
            }}
          >新建申请</Button>
        );
    }
    return (
      <div style={style}>
        {buttonShow}
        <RequestForm
          visible={visible}
          onCancel={this.onCancel}
          onOk={this.onOk}
          defaultValue={defaultValue}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default EditButton;

EditButton.propTypes = {
  style: React.PropTypes.object,
  type: React.PropTypes.string,
  defaultValue: React.PropTypes.object,
};
