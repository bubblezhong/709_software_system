import React from 'react';
import l2t from 'list2tree';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class SchemeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: null,
      data: { items: [] },  // 初始非必须选项
      // jsonsTemp: [],
      organizationTree: [],
      organizationMap: {},
      // softwareTree: [],
      moduleTree: [], // 模块树
      moduleList: [], // 模块列表
    };
  }

  componentWillMount = () => {
    this.getOrganization();
    this.getTree();
    if (this.props.activeID) {
      this.getScheme(this.props.activeID);
    }
  };
  getScheme = (id) => {
    asyncGet(`${config.host}/SoftwareDeployment/Scheme/GetOne/${id}`).then((data) => {
      // console.log('tempViewList', tempViewList);
      // const result = {
      //   ...data.data,
      //   items: tempViewList,
      // };
      // 获取 对应软件的 模块列表
      this.getModule(data.data.software_id);
      this.setState({
        data: data.data,
        // jsonsTemp: temp,
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
  getSoftware = (id) => {
    console.log('getSoftware id', id);
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then((software) => {
      this.setState({ softwareList: software.data });
    });
  };
  getTree = () => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((tree) => {
      const treeTree = l2t.ListToTree(tree.data, '0');
      this.setState({ treeTree });
    });
  };

  getModule = (id) => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/ModuleBySoftwareID/${id}`).then((data) => {
      const moduleTree = l2t.ListToTree(data.data, 0);
      this.setState({ moduleTree, moduleList: data.data });
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        defaultValue: this.state.data,
        // jsonsTemp: this.state.jsonsTemp,
        organizationTree: this.state.organizationTree,
        organizationMap: this.state.organizationMap,
        // softwareTree: this.state.softwareTree,
        softwareList: this.state.softwareList,
        treeTree: this.state.treeTree,
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

SchemeView.propTypes = {
  children: React.PropTypes.node,
  activeID: React.PropTypes.num,
};

export default SchemeView;
