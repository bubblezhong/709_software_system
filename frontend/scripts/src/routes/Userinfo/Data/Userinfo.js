import request from '../../../utils/request';

const config = require('./../../../../config/config');


/**
 * 获取当前登录用户的个人信息
 * @return {Promise} Userinfo
 */
const getLoginUserinfo = async () => {
  return request(`${config.host}/get_userinfo`);
};


/**
 * 更新用户信息
 * @param  {object}  datas 需要更新的数据
 * @return {Promise}       userinfo
 */
const updateUserinfo = async (datas) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datas),
    credentials: 'include',
  };
  return request(`${config.host}/edit_userinfo`, options);
};


/**
 * 更新用户密码
 * @param  {object}  datas 需要更新的数据 { oldPwd, newPwd }
 * @return {Promise}       update res
 */
const updatePassword = async (datas) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datas),
    credentials: 'include',
  };
  return request(`${config.host}/edit_pwd`, options);
};


export {
  getLoginUserinfo,
  updateUserinfo,
  updatePassword,
};
