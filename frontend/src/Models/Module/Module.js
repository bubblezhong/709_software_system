import request from '../../utils/request';

const config = require('./../../../config/config');


/**
 * 获取所有单元信息
 * @return {Promise} Userinfo
 */
const getSoftwareModuleList = async () => {
  return request(`${config.host}/getsoftwaresoftwareModulesList`);
};


/**
 * 根据软件 ID 获取所有单元信息
 * @param  {number}  id 软件 ID
 * @return {Promise} Userinfo
 */
const getSoftwareModuleListBySoftwareId = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return request(`${config.host}/getsoftwareModulesBySoft`, options);
};

/**
 * 更新单元信息
 * @param  {object}  data 需要更新的数据
 * @return {Promise}       res
 */
const updateModule = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/updateSoftwareModules`, options);
};


/**
 * 添加一条单元信息
 * @param  {object}  data 需要添加的单元数据
 * @return {Promise}       res
 */
const addModule = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/addSoftwareModules`, options);
};


/**
 * 删除单元
 * @param {number} id 单元ID
 * @return {Promise.<Object>} Promise
 */
const deleteModule = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return request(`${config.host}/deletesoftwareModules`, options);
};


export {
  getSoftwareModuleList,
  getSoftwareModuleListBySoftwareId,
  updateModule,
  addModule,
  deleteModule,
};
