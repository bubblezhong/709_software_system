/* eslint-disable */
function list2tree(list, pid) {
  const parent_id = parseInt(pid, 10) ? parseInt(pid, 10) : 0;
  // console.log('list');
  return list.filter(function(item) { return item.parent_id === parent_id; }).map(function(item) {
    // console.log('item', item.id, parent_id);
    item.key = item.id.toString();                  // antd 中 Select 的 value 只能为 string
    item.parent_id = item.parent_id.toString();     // antd 中 Select 的 value 只能为 string
    item.value = item.key;  // antd 中 Select 适配
    item.label = item.name; // antd 中 Select 适配
    delete item.id;
    const children = list2tree(list, item.key);
    // console.log(item.key, parent_id, item);
    if (children.length === 0) {
      return item;
    } else {
      item.children = children;
      return item;
    }
  });
  // return result;
}


module.exports = {
  ListToTree: function (list, parent_id) {
    return list2tree(list, parent_id)
  },
};
