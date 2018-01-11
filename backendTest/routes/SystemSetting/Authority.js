var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');
// var rows = require('./dictionary.json');
// 查询 数据字典
router.get('/Authority/get_authority', (req, res) => {
  // const sql = 'SELECT id, name, type, value FROM Authority WHERE role_id = ?';
  // target_modules 权限使用模块
  // type 1 module 模块 显示权限
  // type 2 page   页面 显示权限
  // type 3 buttom 功能 使用权限
  // value 1 具有权限
  // value 0 不具有权限
  const rows = [
    { id: 1, role_id: 1, target_modules: 'System', target_page: 'Sidebar', key: 'Home', type: 1, value: 1 },
    { id: 2, role_id: 1, target_modules: 'System', target_page: 'Sidebar', key: 'Userinfo', type: 1, value: 1 },
    { id: 3, role_id: 1, target_modules: 'System', target_page: 'Sidebar', key: 'SystemSetting', type: 1, value: 1 },
    { id: 4, role_id: 1, target_modules: 'SystemSetting', target_page: 'User', key: '', type: 2, value: 1 },
    { id: 5, role_id: 1, target_modules: 'SystemSetting', target_page: 'Organization', key: '', type: 2, value: 1 },
    { id: 6, role_id: 1, target_modules: 'SystemSetting', target_page: 'Authority', key: '', type: 2, value: 1 },
    { id: 7, role_id: 1, target_modules: 'SystemSetting', target_page: '', key: '', type: 2, value: 1 },
    // { id: 8, target_modules: '', name: '', type: 1, value: 1 },
    // { id: 9, target_modules: '', name: '', type: 1, value: 1 },
    // { id: 10, target_modules: '', name: '', type: 1, value: 1 },
    // { id: 11, target_modules: '', name: '', type: 1, value: 1 },
    // { id: 12, target_modules: '', name: '', type: 1, value: 1 },
    // { id: 13, target_modules: '', name: '', type: 1, value: 1 },
  ];
  // var rows = 'asd'
  res.json({
    code: 0,
    data: rows,
  });
});

module.exports = router;
