const express = require('express');
const rp = require('request-promise');
const rpcfg = require('../../utils/requestPromiseOption');

const router = express.Router();

// 查询个人所有任务
const getMyTasks = (req, res, next) => {
  const id = req.params.id;
  if (!id) return res.json({ code: 1, msg: '缺少用户ID'});
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'get-my-tasks',
    body: { name: id },
  });
  rp(options).then((rst) => {
    // console.log('flow-start-rst', rst);
    if (rst.code === 0) {
      // 处理流程的数据
      res.json({ code: 0, data: rst.data });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  }).catch((err) => {
    return next(err);
  });
};


router.get("/get-my-tasks/:id", getMyTasks);

module.exports = router;