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
            organizationId: orgItem.id,
            organizationName: orgItem.name,
          };
          result.push({
            ...jsonMsg, // json 数据
            ...xMsg,    // 分组信息
            ...softMsg, // 软件信息
            ...orgMsg,  // 安装单位信息
          });
        });
      });
    });
  });
  // console.log('jsonToList', result);
  return result;
};

export default jsonToList;
