var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');

// 查询 角色信息
router.get('/Role/get_role_list', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'SELECT id, name, description, active FROM Role WHERE has_delete = 0 '

    CN.Select(connection, res, sql, [null], (rows) => {
      rows.forEach((item) => {
        item.key = item.id;
      })
      res.json({
        code: 0,
        data: rows
      })
    });
  });
});

// 删除角色 角色信息
router.post('/Role/delete_role', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Role SET has_delete = 1 WHERE id = ? '
    const id = req.body.id;
    CN.Update(connection, res, sql, [id], (result) => {
      res.json({
        code: 0,
        data: result
      })
    });
  });
});

// 修改 角色 激活信息
router.post('/Role/active_role', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Role SET active = ? WHERE id = ? '
    const id = req.body.id;
    const active = req.body.active;
    CN.Update(connection, res, sql, [active, id], (result) => {
      res.json({
        code: 0,
        data: result
      })
    });
  });
});


// 修改 角色信息
router.post('/edit_role', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Role SET ? WHERE id = ? '
    const id = req.body.id;
    var value = req.body;
    delete value.id;
    CN.Update(connection, res, sql, [value, id], (result) => {
      console.log('result', result);
      res.json({
        code: 0,
        data: result
      })
    });
  });
});

// 添加 角色信息
router.post('/Role/add_role', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'INSERT Role SET ? '
    const value = req.body;
    CN.Insert(connection, res, sql, [value], (result) => {
      console.log('result', result);
      res.json({
        code: 0,
        data: result
      })
    });
  });
});



module.exports = router;
