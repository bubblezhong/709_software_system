import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col, Tree } from 'antd';

const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
class OutputDetailEighth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oddNumbersRegister: 'CL-20170427-0001',
      register: '张三',
      registerUnit: '中船重工xx研究所',
      handlePerson: '李四',
      saveTypeRegister: '自持',
      saveInfo: '存储介质编号01234500',
      fetchCode: 'MDFO',
      MD5CodeRegister: '259a2d1248ugjhmbt7',
      InfoExplain: '无',
      fileRegister: '无',
      oddNumbersApply: 'CY-20170427-0003',
      applicant: '王五',
      taskSource: '调配任务-DP201705110321',
      softwareName: '远程目标判断软件',
      softwareRank: '内部保密',
      unitVersion: 'V3.0.0.1',
      versionDescribe: '2015年2月8日更新说明 </br>1.修改模式设置类型2.更改尺寸判决条件3.增加支持设置典型反射距离' +
                       '2015年1月31日更新说明1.修正蓝屏的BUG2.修正时间反馈误差积累',
      softwareModule: '应用软件->C类应用软件->对下声呐定位',
      moduleRelation: '声呐定位指示软件>目标指示模块>声呐控制',
      saveTypeApply: '自持',
      MD5CodeApply: ' 259a2d1f68fef2c2b38eddd9b4eb2f10',
      codeScale: '100kloc',
      operateSystem: '塞班2.0',
      assortSoftware: '无',
      installPostion: '中控板',
      fileApply: '无',
    };
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
    };
    return (
      <div className="InputDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 900 }}>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库软件基本信息</div>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
              >
                <span>{this.state.softwareName}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="软件等级"
              >
                <span>{this.state.softwareRank}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="软件谱系"
              >
                <span>{this.state.softwareModule}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="软件单元版本"
              >
                <span>{this.state.unitVersion}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件模块关系"
              >
                <Tree
                  style={{ marginTop: -15 }}
                  showLine
                  defaultExpandedKeys={['0-0-0']}
                  onSelect={this.onSelect}
                >
                  <TreeNode title="远程目标软件" key="0-0">
                    <TreeNode title="模块优化" key="0-0-0">
                      <TreeNode title="模块优化" key="0-0-0-0" />
                    </TreeNode>
                    <TreeNode title="目标指示模块" key="0-0-1">
                      <TreeNode title="声呐控制" key="0-0-1-0" />
                    </TreeNode>
                    <TreeNode title="总体生成" key="0-0-2">
                      <TreeNode title="leaf" key="0-0-2-0" />
                      <TreeNode title="leaf" key="0-0-2-1" />
                    </TreeNode>
                    <TreeNode title="策略生成" key="0-0-3">
                      <TreeNode title="leaf" key="0-0-3-0" />
                      <TreeNode title="leaf" key="0-0-3-1" />
                    </TreeNode>
                  </TreeNode>
                </Tree>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库软件描述信息</div>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                <span>{this.state.saveTypeApply}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="代码规模"
                hasFeedback
              >
                <span>{this.state.codeScale}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="操作系统"
                hasFeedback
              >
                <span>{this.state.operateSystem}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5校验值"
                hasFeedback
              >
                <span>{this.state.MD5CodeApply}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="配套软件"
                hasFeedback
              >
                <span>{this.state.assortSoftware}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="典型安装位置"
                hasFeedback
              >
                <span>{this.state.installPostion}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
                hasFeedback
              >
                <span>{this.state.fileApply}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="版本描述"
              >
                <span>{this.state.versionDescribe}</span>
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库软件申请信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="单号"
                hasFeedback
              >
                <span>{this.state.oddNumbersApply}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="申请人"
                hasFeedback
              >
                <span>{this.state.applicant}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="任务来源"
                hasFeedback
              >
                <span>{this.state.taskSource}</span>
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库软件登记信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="单号"
                hasFeedback
              >
                <span>{this.state.oddNumbersRegister}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="入库登记人"
                hasFeedback
              >
                <span>{this.state.register}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记单位"
                hasFeedback
              >
                <span>{this.state.registerUnit}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                <span>{this.state.saveTypeRegister}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储信息"
                hasFeedback
              >
                <span>{this.state.saveInfo}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="提取码"
                hasFeedback
              >
                <span>{this.state.fetchCode}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5确认"
                hasFeedback
              >
                <span>{this.state.MD5CodeRegister}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="信息说明"
                hasFeedback
              >
                <span>{this.state.InfoExplain}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
                hasFeedback
              >
                <span>{this.state.fileRegister}</span>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

OutputDetailEighth.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapOutputDetailEighth = Form.create()(OutputDetailEighth);
export default WrapOutputDetailEighth;
