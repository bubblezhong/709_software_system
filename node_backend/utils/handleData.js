/**
 * 数组里面的对象去重
 * 数组里面包含的是对象
 * input  [{"a": 1}, {"a": 1}]
 * output: [{"a": 1}]
 */ 

const arrayDuplicateRemoval = (arr) => {
  let unique = {};
  arr.forEach((item) => { unique[ JSON.stringify(item) ] = item });  // JSON字符串  --》 JSON 值
  // 利用对想key的唯一性
  return Object.keys(unique).map((item) =>{return JSON.parse(item) }); 
};

module.exports = {
  arrayDuplicateRemoval
}
