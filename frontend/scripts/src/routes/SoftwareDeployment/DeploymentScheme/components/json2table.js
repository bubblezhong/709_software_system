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
            number: jsonI + 1,
            unitType: testJson.category,
            categoryRowSpan: groupIndex + softwareIndex === 0 ? count : 0,
            unit: item.organization.name,
            orgListRowSpan: softwareIndex === 0 ? orgCount[groupIndex] : 0,
            software: software.info,
            installPos: software.position,
            softwareType: software.type,
            moduleInfo: software.modules,
          });
        });
      });
    });
    return tempViewList;
  },
};
