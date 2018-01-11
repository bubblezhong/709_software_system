import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, Select, TreeSelect, Button, Form, Input, Row, Upload, Icon, Col } from 'antd';
import DeploymentSchemeDetailFirstAddRecord from './DeploymentSchemeDetailFirstAddRecord';

const FormItem = Form.Item;
const Search = Input.Search;
const ButtonGroup = Button.Group;
class DeploymentSchemeDetailFirstEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      initialData: {
        oddNumbers: 'CL-20170427-0001',
        makeUnit: 'XX日常管理部门',
        registeUnit: '中船重工XX研究所',
        schemeName: '应用软件xx调配方案',
        taskSourse: 'DD2017051102111-调度任务',
        handler: '李四',
        softwarename: '指示软件',
        ancestary: '参数测量软件',
        saveCode: 'ltuirt89498324',
        Md5Confirm: 'ljudsery8347d',
        relativeFile: '无',
        distribution: '张三',
        InfoExplain: '软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役',
        ancestaryTreeData: [{
          label: '应用软件',
          value: '0-0',
          key: '0-0',
          children: [{
            label: '参数测量软件',
            value: '0-0-1',
            key: '0-0-1',
          }, {
            label: '参数测量软件',
            value: '0-0-2',
            key: '0-0-2',
          }],
        }, {
          label: '参数测量软件',
          value: '0-1',
          key: '0-1',
        }],
      },
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }],
      deploymentSchemeData: [{
        key: '0',
        num: '0',
        softwarePos: '岸基指挥所',
        softwareType: '',
        moduleInfo: '',
        children: [
          {
            key: '00',
            num: '00',
            softwarePos: 'XX指挥所',
            softwareType: '',
            moduleInfo: '',
            children: [
              {
                key: '000',
                num: '000',
                softwarePos: '主控板0',
                softwareType: '岸用软件',
                moduleInfo: '总体模块、xx模块、xx模块',
              }, {
                key: '001',
                num: '0021',
                softwarePos: '主控板1',
                softwareType: '岸用软件',
                moduleInfo: '总体模块、xx模块、xx模块',
              }, {
                key: '002',
                num: '0022',
                softwarePos: '主控板2',
                softwareType: '岸用软件',
                moduleInfo: '总体模块、xx模块、xx模块',
              },
            ],
          },
        ],
      }],
    };
  }
  componentWillMount() {
    if (this.props.newStatus) {
      this.setState({ initialData: {} });
    }
  }
  setKey = (dataNow, fatherKey) => {
    console.log(fatherKey);
    for (let ii = 0; ii < dataNow.length; ii++) {
      dataNow[ii].key = fatherKey + ii;
      if (dataNow[ii].children) {
        this.setKey(dataNow[ii].children, dataNow[ii].key);
      } else if (fatherKey.length === 2) {
        for (let j = 0; j < dataNow.length; j++) {
          dataNow[j].key = fatherKey + j;
        }
      } else {
        return;
      }
    }
    return dataNow;
  }
  changeRead = () => {
    console.log('changeRead');
    this.props.changeRead();
  }
  delete = (record) => {
    const key = record.key;
    const fatherkey = '';
    console.log(key);
    // const index1 = parseInt(key.substring(tempI++, tempI), 10); 10
    const deleteData = this.state.deploymentSchemeData;
    if (key.length === 1) {
      const index1 = parseInt(key.substring(0, 1), 10);
      console.log(deleteData);
      deleteData.splice(index1, 1);
      console.log(deleteData);
    } else if (key.length === 2) {
      const index1 = parseInt(key.substring(0, 1), 10);// 01
      const index11 = parseInt(key.substring(1, 2), 10);
      console.log(deleteData[index1].children);
      deleteData[index1].children.splice(index11, 1);
    } else if (key.length === 3) {
      const index1 = parseInt(key.substring(0, 1), 10);// 001
      const index11 = parseInt(key.substring(1, 2), 10);
      const index111 = parseInt(key.substring(2, 3), 10);
      console.log(key);
      console.log(index1);
      console.log(index11);
      console.log(deleteData[index1].children[index11]);
      deleteData[index1].children[index11].children.splice(index111, 1);
    }
    const realData = this.setKey(deleteData, fatherkey);
    this.setState({ deploymentSchemeData: realData });
  }
  copy = (row) => {
    const fatherkey = '';
    // const row = this.setKey(row1, fatherkey);
    // console.log('row', row);
    let tempData = this.state.deploymentSchemeData; // 001
    tempData = this.setKey(tempData, fatherkey);
    let tempI = 0;
    const key = row.key;
    const len = key.length;
    const index1 = parseInt(key.substring(tempI++, tempI), 10);
    let cloneData = JSON.parse(JSON.stringify(tempData[index1]));
    console.log('cloneData', cloneData);
    if (cloneData.children) {
      for (let i = 0; i < len - 1; i++) {
        const index = parseInt(key.substring(tempI++, tempI), 10);
        if (cloneData.children) {
          cloneData = JSON.parse(JSON.stringify(cloneData.children[index]));
        }
      }
    }
    if (len === 1) {
      tempData.splice(parseInt(key.substring(0, 1), 10), 0, cloneData);
      // tempData.push(cloneData);
    } else if (len === 2) {
      const fatherIndex = parseInt(key.substring(0, 1), 10);
      const currentIndex = parseInt(key.substring(1, 2), 10);
      tempData[fatherIndex].children.splice(currentIndex, 0, cloneData);
    } else {
      const grandPaIndex = parseInt(key.substring(0, 1), 10);
      const fatherIndex = parseInt(key.substring(1, 2), 10);
      const currentIndex = parseInt(key.substring(2, 3), 10);
      tempData[grandPaIndex].children[fatherIndex].children.splice(currentIndex, 0, cloneData);
    }
    const realData = this.setKey(tempData, fatherkey);
    console.log('realData', realData);
    this.setState({ deploymentSchemeData: realData });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDec = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    const deploymentSchemeColumns = [{
      title: '软件安装单位与位置',
      dataIndex: 'softwarePos',
      key: 'softwarePos',
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, record) => {
        // console.log('row189', text, record, index);
        return (
          <span className="DeploymentSchemeDetailFirst_editButton">
            <Icon style={{ color: '#48db97' }} type="plus" />
            <Icon style={{ color: '#fab54e' }} type="edit" />
            <Icon onClick={() => { this.copy(record); }} style={{ color: '#de99fd' }} type="copy" />
            <Icon onClick={() => { this.delete(record); }} style={{ color: '#ef5d5d' }} type="delete" />
          </span>
        );
      },
    }, {
      title: '软件类型',
      dataIndex: 'softwareType',
      key: 'softwareType',
    }, {
      title: '模块信息',
      dataIndex: 'moduleInfo',
      key: 'moduleInfo',
    }];
    const columns = [{
      title: '编号',
      dataIndex: 'number',
    }, {
      title: '调配申请标题',
      dataIndex: 'title',
    }, {
      title: '申请单位',
      dataIndex: 'unit',
    }, {
      title: '申请人',
      dataIndex: 'applicant',
    }, {
      title: '申请时间',
      dataIndex: 'time',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareDeployment/DeploymentRequestDetail/${row.key}`}>{text}</Link>,
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    return (
      <div className="RetireDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
          <div style={{ marginBottom: 20, marginTop: 40, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件调配方案信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="编号"
              >
                <span>{this.state.initialData.oddNumbers}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="制定单位"
              >
                <span>{this.state.initialData.makeUnit}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="方案名称"
              >
                {getFieldDecorator('schmeName', {
                  initialValue: this.state.initialData.schemeName,
                  rules: [{ required: true, message: '请输入方案名称' }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="任务来源"
              >
                {getFieldDecorator('saveInfo', {
                  initialValue: this.state.initialData.taskSourse,
                  rules: [{ required: true, message: '请输入任务来源' }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
              >
                {getFieldDecorator('softwarename', {
                  initialValue: this.state.initialData.softwarename,
                  rules: [{
                    required: true,
                    message: '请输入软件名称!',
                    type: 'array',
                  }],
                })(
                  <Select mode="multiple">
                    <Option value="定位软件">定位软件1</Option>
                    <Option value="指示软件">指示软件</Option>
                    <Option value="导航软件">导航软件</Option>
                    <Option value="引导软件">引导软件</Option>
                    <Option value="扫描软件">扫描软件</Option>
                    <Option value="策略生成">策略生成</Option>
                    <Option value="定位计算">定位计算</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="谱系"
              >
                {getFieldDecorator('ancestary', {
                  initialValue: this.state.initialData.ancestary,
                  rules: [{ required: true, message: '请输入谱系!' }],
                })(
                  <TreeSelect
                    style={{ width: 356 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={this.state.initialData.ancestaryTreeData}
                    treeDefaultExpandAll
                    onChange={this.onChange}
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关文件"
                hasFeedback
              >
                {getFieldDecorator('relativeFile', {
                  rules: [{ required: true, message: '请点击上传相关附件' }],
                })(
                  <Upload>
                    <Button>
                      <Icon type="upload" />点击上传
                    </Button>
                  </Upload>
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDec}
                label="方案描述"
              >
                {getFieldDecorator('softwareDescription', {
                  initialValue: this.state.initialData.InfoExplain,
                  rules: [{ required: true, message: '请输入方案描述' }],
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>调配方案提交信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理人"
              >
                <span>{this.state.initialData.handler}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="选择任务分配人"
              >
                {getFieldDecorator('distribution', {
                  initialValue: this.state.initialData.distribution,
                  rules: [{ required: true, message: '请选择任务分配人' }],
                })(
                  <Select>
                    <Option value="定位软件">定位软件1</Option>
                    <Option value="指示软件">指示软件</Option>
                    <Option value="导航软件">导航软件</Option>
                    <Option value="引导软件">引导软件</Option>
                    <Option value="扫描软件">扫描软件</Option>
                    <Option value="策略生成">策略生成</Option>
                    <Option value="定位计算">定位计算</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDec}
                label="说明"
              >
                {getFieldDecorator('Description', {
                  rules: [{ required: true, message: '请输入方案描述' }],
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div style={{ padding: 20, border: '1px solid #ccc', width: '80%', marginLeft: '10%', marginTop: 20 }}>
          <h2 style={{ margin: '20px 20px', display: 'inline-block' }}>调配申请列表</h2>
          <ButtonGroup>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Button onClick={() => this.setState({ visible: true })} icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>添加记录</Button>
            <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
          </ButtonGroup>
          <Search
            style={{ width: 380, height: 40, float: 'right', marginTop: 12 }}
          />
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 10 }}
            bordered
          />
        </div>
        <div style={{ padding: 20, border: '1px solid #ccc', width: '80%', marginLeft: '10%', marginTop: 20 }}>
          <h2 style={{ margin: '20px 20px', display: 'inline-block' }}>调配方案详情</h2>
          <Table
            rowSelection={rowSelection}
            columns={deploymentSchemeColumns}
            dataSource={this.state.deploymentSchemeData}
            bordered
            defaultExpandAllRows
            pagination={false}
          />
        </div>
        <DeploymentSchemeDetailFirstAddRecord
          visible={this.state.visible}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

DeploymentSchemeDetailFirstEdit.propTypes = {
  form: PropTypes.object.isRequired,
  newStatus: PropTypes.bool.isRequired,
  changeRead: PropTypes.func.isRequired,
};
const WrapDeploymentSchemeDetailFirstEdit = Form.create()(DeploymentSchemeDetailFirstEdit);
export default WrapDeploymentSchemeDetailFirstEdit;
