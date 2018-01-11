import React from 'react';
import { Card, Col, Row, Tree } from 'antd';
import OrganizationTree from './OrganizationTree';

const TreeNode = Tree.TreeNode;

class Dictionary extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      filterTarget: {},
    };
  }

  checkboxOption = [
    { label: '序号', value: 'id' },
    { label: '所属模块', value: 'target_modules' },
    { label: '所属页面', value: 'target_page' },
    { label: '字段key', value: 'key' },
    { label: '字段value信息值', value: 'value' },
    { label: '字段label展示值', value: 'label' },
  ];
  handleCancel = () => {
    console.log('this:', this.props);
    this.setState({
      showForm: false,
      editTemp: {},
    });
  };
  activeAuthority = (id, active) => {
    console.log('active authority:', id, active);
  };

  render() {
    // console.log('Dictionary Props', this.props);
    const {
      softwareTree, organization, organizationList,
      orgAuthority,
      dictionaryMap,
      // dictionaryFilter
    } = this.props;
    const { filterTarget } = this.state;
    // 数据字典处理
    console.log('GroupAuthority dictionaryMap', dictionaryMap);
    // // 生成 字段字典

    const loop = data => data.map((item) => {
      if (item.children) {
        // console.log('lop item :', item);
        return (
          <TreeNode key={item.key} title={item.name}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.name} />;
    });

    const orgAuthorityFilter = orgAuthority.filter((item) => {
      // console.log('item', item);
      if (filterTarget.id) {
        return filterTarget.id.toString() === item.organization_id.toString();
      }
      return false;
    }).map(item => (`software_${item.software_id}`));
    console.log('orgAuthorityFilter', orgAuthorityFilter);
    return (
      <Row gutter={8}>
        <Col span={5}>
          <Card style={{ height: '100%' }}>
            <OrganizationTree
              data={organization}
              data_list={organizationList}
              onChange={(result) => {
                this.setState({ filterTarget: result });
              }}
            />
          </Card>
        </Col>
        <Col span={19}>
          <Tree
            checkable
            checkedKeys={orgAuthorityFilter}
          >
            {loop(softwareTree)}
          </Tree>
        </Col>
      </Row>
    );
  }
}


Dictionary.propTypes = {
  softwareTree: React.PropTypes.array,
  organization: React.PropTypes.array,
  organizationList: React.PropTypes.array,
  orgAuthority: React.PropTypes.array,
  dictionaryMap: React.PropTypes.object,
  // dictionaryFilter: React.PropTypes.object,
};


export default Dictionary;
