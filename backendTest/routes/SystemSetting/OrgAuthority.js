var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');
// var rows = require('./dictionary.json');
// 查询 数据字典
router.get('/OrgAuthority/get_org_authority', (req, res) => {

  const rows = [
    { id: 1, organization_id: 1, software_id: 1, states: 0 },
    { id: 2, organization_id: 1, software_id: 2, states: 0 },
    { id: 3, organization_id: 1, software_id: 3, states: 0 },
    { id: 4, organization_id: 1, software_id: 4, states: 0 },
    { id: 5, organization_id: 1, software_id: 5, states: 0 },
    { id: 6, organization_id: 1, software_id: 6, states: 0 },
    { id: 7, organization_id: 1, software_id: 7, states: 0 },
    { id: 8, organization_id: 1, software_id: 8, states: 0 },
  ];
  // var rows = 'asd'
  res.json({
    code: 0,
    data: rows,
  });
});

module.exports = router;
