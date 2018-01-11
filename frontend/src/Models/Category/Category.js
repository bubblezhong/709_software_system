import request from '../../utils/request';

const config = require('./../../../config/config');


/**
 * 获取所有谱系信息
 * @return {Promise} Userinfo
 */
const getSoftwareCategoryList = async () => {
  return request(`${config.host}/getsoftwareCategoryList`);
};


/**
 * 更新谱系信息
 * @param  {object}  data 需要更新的数据
 *                   { "id":"1",  "name":"name1",  "parent_id":"1",  "status":"1" }
 * @return {Promise}       res
 */
const updateCategory = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/updateSoftwareCategory`, options);
};


/**
 * 添加一条谱系信息
 * @param  {object}  data 需要添加的数据
 *                   { "name":"name1",  "parent_id":"1",  "status":"1" }
 * @return {Promise}       res
 */
const addOneCategory = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/addsoftwareCategory`, options);
};


/**
 * 删除谱系
 * @param {number} id 谱系ID
 * @return {Promise.<Object>} Promise
 */
const deleteCategory = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return request(`${config.host}/deleteSoftwareCategory`, options);
};


export {
  getSoftwareCategoryList,
  updateCategory,
  addOneCategory,
  deleteCategory,
};
