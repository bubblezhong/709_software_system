// 一个方案数据 转换为任务的列表
const jsonToList = (json) => {
  const result = [];
  // console.log('json', json);

  const jsonMsg = {
    softwareName: json.software_name,
    softwareId: json.software_id,
    treeId: json.tree_id,
  };
  json.items.forEach((xItem) => {
    const xMsg = {
      jsonId: xItem.id,
      category: xItem.category,
    };
    xItem.group.forEach((yItem) => {
      yItem.software.forEach((softItem) => {
        const softMsg = {
          softwareType: softItem.type,
          softwarePosition: softItem.position,
          modules: softItem.modules,
        };
        yItem.organization.forEach((orgItem) => {
          const orgMsg = {
            useOrgId: orgItem.id,
            useOrgName: orgItem.name,
          };
          const otherInfo = {
            scheme_id: 2,
            manageOrgId: orgItem.id,
            manageOrgName: '日常管理部门a',
            deputyOrgId: 1,
            deputyOrgname: '代表室',
          };
          result.push(
            // es6 Object 合并  Node 支持较早  > v6.0
            Object.assign(jsonMsg, xMsg, softMsg, orgMsg, otherInfo)
            // es6 Object 拓展写法  Node 支持较晚  > v7.0
            // {
            //   ...jsonMsg, // json 数据
            //   ...xMsg,    // 分组信息
            //   ...softMsg, // 软件信息
            //   ...orgMsg,  // 安装单位信息
            // }
          );
        });
      });
    });
  });
  // console.log('jsonToList', result);
  return result;
};

module.exports = jsonToList;
