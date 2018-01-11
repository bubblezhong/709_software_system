
module.exports = {
  json2table: (json) => {
    // 处理 json 数据 =》 table 数据
    const temp = json;
    const tempViewList = [];
    temp.forEach((testJson, jsonI) => {
      let count = 0;
      const orgCount = [];
      testJson.group.forEach((item, i) => {
        orgCount[i] = item.software.length;
        item.software.forEach(() => {
          count += 1;
        });
      });
      // console.log('orgCount', count, orgCount);
      testJson.group.forEach((item, groupIndex) => {
        item.software.forEach((software, softwareIndex) => {
          // console.log('item', item);
          tempViewList.push({
            jsonId: testJson.id,
            key: `${jsonI}_${groupIndex}_${softwareIndex}`,
            category: testJson.category,
            categoryRowSpan: groupIndex + softwareIndex === 0 ? count : 0,
            organization: item.organization,
            orgListRowSpan: softwareIndex === 0 ? orgCount[groupIndex] : 0,
            software: software.info,
            position: software.position,
            type: software.type,
            modules: software.modules,
          });
        });
      });
    });
    return tempViewList;
  },
};
