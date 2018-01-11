/*
 * 对数据进行筛选返回符合的数据
 * data        @array 被搜索的数据
 * searchValue @string 搜索的内容 数据框中输入的文字
 * searchTarge @array[string,string...] 被搜索列的集
 */
const SearchData = (data, searchValue, searchTarge) => {
  // 根据筛选信息进行 数据 search filter 匹配
  let userData = data;
  // searchValue 搜索文字 不为空时进行检索
  if (searchValue) {
    userData = data.filter((item) => {
      // 判断搜索范围内 是否存在匹配项
      // search_targe: [ string, string, ... ]
      return !searchTarge.every((target) => {
        // 匹配 是否数据中的 该项 与 目标文字匹配
        if (item[target]) { // 当目标不为 null 进行判断
          return item[target].toString().indexOf(searchValue.toString()) === -1;
        }
        return true;
      });
    });
  }
  return userData;
};
export default SearchData;
