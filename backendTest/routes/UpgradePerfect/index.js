// 在线帮助库
const express = require('express');

const router = express.Router();

// 获取升级请求 列表
router.get('/request/list', (req, res) => {
  // 根据用户的数据权限
  // 仅获取 自己生成的 方案
  const rows = [];

  res.json({
    code: 0,
    data: rows,
  });
});

// 获取单一一条
router.get('/request/:id', (req, res) => {
  // 根据用户的数据权限
  // 仅获取 自己生成的 方案
  const one = {
    a: 'asd',
  };

  res.json({
    code: 0,
    data: one,
  });
});


router.post('/summary/new', (req, res) => {
  console.log('接收成功！');
  console.log(req.body);
  res.json({
    code: 0,
  });
});

router.post('/summary/edit', (req, res) => {
  console.log('接收成功！');
  console.log(req.body);
  res.json({
    code: 0,
  });
});

module.exports = router;
