import request from '../../utils/request';

const config = require('./../../../config/config');


/**
 * 获取软件列表
 * @return {Promise} promise
 */
const getMessageList = async () => {
  return request(`${config.host}/getMessage`);
};


/**
 * 将消息置为已读
 * @param {string} list list
 * @return {Promise} promise
 */
const readMessage = async (list) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ msgList: list }),
    credentials: 'include',
  };
  return request(`${config.host}/Messagestatus`, options);
};


export {
  getMessageList,
  readMessage,
};
