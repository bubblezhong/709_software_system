const express = require('express');
const rp = require('request-promise');
const rpcfg = require('../../utils/requestPromiseOption');

// 根据流程ID，查询历史纪录
const getHistory = (processId) => {
  if (!processId) return;
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'history',
    body: { processId },
  });
  return rp(options);
};

module.exports = {
  getHistory,
};
