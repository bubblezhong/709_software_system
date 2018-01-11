import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col } from 'antd';

const FormItem = Form.Item;
class DeploymentRequestDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
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
        unitName: '声呐控制',
        softwareModule: '应用软件->C类应用软件->对下声呐定位',
        moduleRelation: '声呐定位指示软件>目标指示模块>声呐控制',
        saveTypeApply: '自持',
        MD5CodeApply: ' 259a2d1f68fef2c2b38eddd9b4eb2f10',
        codeScale: '100kloc',
        operateSystem: '塞班2.0',
        assortSoftware: '无',
        installPostion: '中控板',
        fileApply: '无',
      },
    };
  }
  render() {
    const { initialData } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <div className="InputDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 900 }}>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>调配软件基本信息</div>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
              >
                <span>{initialData.softwareName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件单元名称"
              >
                <span>{initialData.unitName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件等级"
              >
                <span>{initialData.softwareRank}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件单元版本"
              >
                <span>{initialData.unitVersion}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件谱系"
              >
                <span>{initialData.softwareModule}</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>调配软件描述信息</div>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                <span>{initialData.saveTypeApply}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="典型安装位置"
                hasFeedback
              >
                <span>{initialData.installPostion}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="操作系统"
                hasFeedback
              >
                <span>{initialData.operateSystem}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="配套软件"
                hasFeedback
              >
                <span>{initialData.assortSoftware}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="代码规模"
                hasFeedback
              >
                <span>{initialData.codeScale}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
                hasFeedback
              >
                <span>{initialData.fileApply}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="版本描述"
              >
                <span>{initialData.versionDescribe}</span>
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>调配申请单信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="单号"
                hasFeedback
              >
                <span>{initialData.oddNumbersApply}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="申请人"
                hasFeedback
              >
                <span>{initialData.applicant}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="任务来源"
                hasFeedback
              >
                <span>{initialData.taskSource}</span>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

DeploymentRequestDetailThird.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapDeploymentRequestDetailThird = Form.create()(DeploymentRequestDetailThird);
export default WrapDeploymentRequestDetailThird;
