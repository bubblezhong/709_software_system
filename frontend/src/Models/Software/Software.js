import request from '../../utils/request';

const config = require('./../../../config/config');


/**
 * 获取软件列表
 * @return {Promise} promise
 */
const getSoftwareList = async () => {
  return request(`${config.host}/getsoftwareBasicList`);
};


/**
 * 根据 ID 获取软件列表
 * @param {number} id 软件 id
 * @return {Promise} promise
 */
const getSoftwareById = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return request(`${config.host}/getsoftwareBaseById`, options);
};


/**
 * 根据谱系ID获取对应的软件列表
 * @param  {number}  id 谱系ID
 * @return {Promise}       res
 */
const getSoftwareByCategoryId = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category_id: id }),
    credentials: 'include',
  };
  return request(`${config.host}/getsoftwareBasicBYcategory`, options);
};


/**
 * 添加软件
 * @param  {number}  data 软件信息
 * @return {Promise}       res
 */
const addSoftware = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/addSoftware`, options);
};


/**
 * TODO 更新软件
 * @param  {number}  data 软件信息
 * @return {Promise}       res
 */
const updateSoftware = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/updateSoftware`, options);
};


/**
 * 删除软件
 * @param  {number}  id 软件id
 * @return {Promise}       res
 */
const deleteSoftware = async (id) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
  };
  return request(`${config.host}/deletesoftware`, options);
};


/**
 * 获取带版本的软件列表
 * @return {Promise.<Object>} RES
 */
const getSoftwareVersionList = async () => {
  return request(`${config.host}/getsoftwareExtensionList`);
};

export {
  getSoftwareByCategoryId,
  getSoftwareList,
  getSoftwareById,
  addSoftware,
  updateSoftware,
  deleteSoftware,
  getSoftwareVersionList,
};
