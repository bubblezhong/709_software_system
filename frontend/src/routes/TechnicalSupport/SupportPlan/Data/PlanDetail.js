import React, { PropTypes } from 'react';
import l2t from 'list2tree';
import config from 'system-config';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class PlanDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: { items: [] },  // 初始非必须选项
      organizationTree: [],
      organizationMap: {},
      moduleTree: [], // 模块树
      moduleList: [], // 模块列表
    };
  }

  componentWillMount() {
    const { params } = this.props;
    this.getOrganization();
    this.getTree();
    if (!(params.id && params.id === 'New')) {
      this.getScheme(params.id);
    }
  }

  getScheme = (id) => {
    asyncGet(`${config.host}/SoftwareDeployment/Scheme/GetOne/${id}`).then((data) => {
      this.getModule(data.data.software_id);
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    });
  };
  getOrganization = () => {
    asyncGet(`${config.host}/SystemSetting/Organization/get_organization`).then((data) => {
      const organizationMap = {};
      data.data.forEach((item) => {
        organizationMap[item.id] = item.name;
      });
      // console.log('organizationMap', organizationMap);
      const result = l2t.ListToTree(data.data, 0);
      this.setState({
        organizationTree: result,
        organizationMap,
      });
    });
  };
  getTree = () => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((tree) => {
      const treeTree = l2t.ListToTree(tree.data, '0');
      this.setState({ treeTree });
    });
  };
  getSoftware = (id) => {
    console.log('getSoftware id', id);
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then((software) => {
      this.setState({ softwareList: software.data });
    });
  };
  getModule = (id) => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/ModuleBySoftwareID/${id}`).then((data) => {
      const moduleTree = l2t.ListToTree(data.data, 0);
      this.setState({ moduleTree, moduleList: data.data });
    });
  };
  // getData = () => {
  //   // console.log('getSoftwareByTree', id); √
  //   asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then((software) => {
  //     // const softwareList = software.data;
  //     const data = {
  //       id: 1,
  //       title: '标题1',
  //       software: '软件1',
  //       create_time: '2017-02-23 22:34:33',
  //       description: '描述信息1',
  //       status: '0',
  //     };
  //     this.setState({ data: data });
  //   });
  // }
  //
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        defaultValue: this.state.data,
        organizationTree: this.state.organizationTree,
        organizationMap: this.state.organizationMap,
        treeTree: this.state.treeTree,
        softwareList: this.state.softwareList,
        moduleTree: this.state.moduleTree,
        moduleList: this.state.moduleList,
        getModule: this.getModule,
        getSoftware: this.getSoftware,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default PlanDetail;

PlanDetail.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};
