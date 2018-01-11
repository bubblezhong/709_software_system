// 在线帮助库
const express = require('express');

const router = express.Router();

// 根据数据查询 帮助库
router.post('/OnlineHelp/List', (req, res) => {
  // 根据用户的数据权限
  // 仅获取 自己生成的 方案
  const rows = [];

  res.json({
    code: 0,
    data: rows,
  });
});

router.get('/OnlineHelp/FindOne/:id', (req, res) => {
  const result = [];

  res.json({
    code: 0,
    data: result,
  });
});

module.exports = router;
