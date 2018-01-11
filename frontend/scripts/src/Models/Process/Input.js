import request from '../../utils/request';

const config = require('./../../../config/config');


/**
 * 获取入库列表
 * @return {Promise} promise
 */
const getInputList = async () => {
  return request(`${config.host}/getInputProcess`);
};


const inputStart = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/inputStart`, options);
};


const inputProgress = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  };
  return request(`${config.host}/inputprogress`, options);
};


export {
  getInputList,
  inputStart,
  inputProgress,
};
