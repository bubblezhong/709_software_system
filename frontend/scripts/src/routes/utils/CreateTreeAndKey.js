const setKey = (dataNow, fatherKey) => {
  // console.log('dataNow', dataNow);
  for (let ii = 0; ii < dataNow.length; ii++) {
    dataNow[ii].key = fatherKey + ii;
    // console.log(dataNow[ii].key);
    if (dataNow[ii].children) {
      setKey(dataNow[ii].children, dataNow[ii].key);
    } else if (!dataNow[ii].children) {
      dataNow[ii].key = fatherKey + ii;
    }
  }
  return dataNow;
};
const createNode = (node, _list) => {
  // const id = node.id;
  const children = _list.filter((item) => {
    // console.log(node.ID, item.PID);
    return node.ID === item.PID === true;
  });
  // console.log('children', children);
  if (children.length === 0) {
    return {
      label: node.NAME,
      value: node.ID.toString(),
    };
  }
  const temp = children.map((item) => {
    return createNode(item, _list);
  });
  return {
    label: node.NAME,
    value: node.ID.toString(),
    children: temp,
  };
};
const createSelect = (res) => {
  const fatherKey = '';
  // const DataToArr = [];
  // console.log(data);
  const nodes = res.filter((item) => {
    // console.log(item.PID)
    return item.PID === 0;
  });
  // console.log(P_nodes)
  // const _this = this;
  // console.log(this);
  const DataToArr = nodes.map((node) => {
    // console.log(_this);
    // console.log(node);
    const tempData = createNode(node, res);
    // console.log('tempData', tempData);
    return tempData;
  });
  // console.log(DataToArr);
  const keyData = setKey(DataToArr, fatherKey);
  // console.log('keyData', keyData);
  return keyData;
};
module.exports = {
  setKey, createNode, createSelect,
};
