function createNode(node, _list) {
  var id = node.id;
  var children = _list.filter(function(item) {
    console.log(node.id, "++++", item.parent_id);
    return node.id === item.parent_id === true;
  });
  console.log("children", children);
  if (children.length === 0) {
    return {id: id, name: node.name};
  } else {
    var temp = children.map(function(item) {
      return createNode(item, _list);
    });
    return {id: id, name: node.name,  children: temp} ;
  }
}

export const ListToTree = (node, _list) => {
  return createNode(node, _list);
}
