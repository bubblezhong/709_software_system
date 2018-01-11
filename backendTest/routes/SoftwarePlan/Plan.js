var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');

// 查询 角色信息
router.get('/Plan/get_softwareplan', function (req, res) {
  // req.getConnection(function(err, connection) {
  //   if (err) {
  //     console.log('数据库连接失败', err);
  //     return res.json(resErr.badConnection);
  //   }
  //   const sql = 'SELECT id, name, description, active FROM Class WHERE has_delete = 0 '
  //
  //   CN.Select(connection, res, sql, [null], (rows) => {
  //     rows.forEach((item) => {
  //       item.key = item.id;
  //     })
      // res.json({
      //   code: 0,
      //   data: rows
      // })
  //   });
  // });
  const rows = [
    { id: 1, title: '测试用第一计划', description: '我就是描述信息', states: 1, create_date: '2017-02-11 11:11:11', create_user: '小F', organization: '6号' },
    { id: 2, title: '测试用第二计划', description: '我就是第二条描述信息', states: 0, create_date: '2017-02-19 11:11:11', create_user: '小A', organization: '7号' },
  ];
  const options = [
    { id: 1, plan_id: 1, color: 'red', node_date: '2017-02-11 11:11:11', title: '第一条', description: '我就是描述信息', organization: [{ id: 1, name: '单位1' }, { id: 2, name: '单位2' }] },
    { id: 2, plan_id: 1, color: 'blue', node_date: '2017-02-10 11:11:11', title: '第2条', description: '我就是描述信息', organization: [{ id: 1, name: '单位1' }, { id: 2, name: '单位2' }] },
    { id: 3, plan_id: 1, color: 'red', node_date: '2017-02-18 11:11:11', title: '第3条', description: '我就是描述信息', organization: [{ id: 1, name: '单位1' }] },
    { id: 4, plan_id: 1, color: 'blue', node_date: '2017-02-18 11:11:11', title: '第4条', description: '我就是描述信息', organization: [{ id: 2, name: '单位2' }] },
    { id: 5, plan_id: 1, color: 'red', node_date: '2017-02-9 11:11:11', title: '第5条', description: '我就是描述信息', organization: [{ id: 1, name: '单位1' }, { id: 2, name: '单位2' }] },
    { id: 6, plan_id: 1, color: 'green', node_date: '2017-02-7 11:11:11', title: '第6条', description: '我就是描述信息', organization: [{ id: 2, name: '单位2' }] },
    { id: 7, plan_id: 1, color: 'green', node_date: '2017-02-6 11:11:11', title: '第7条', description: '我就是描述信息', organization: [{ id: 1, name: '单位1' }, { id: 2, name: '单位2' }] },
  ];

  res.json({
    code: 0,
    data: {
      plan: rows,
      options,
    },
  });
});

module.exports = router;
