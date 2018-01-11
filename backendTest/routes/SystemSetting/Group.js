var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');

// 查询 角色信息
router.get('/Group/get_group_list', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'SELECT id, name, description, active FROM Class WHERE has_delete = 0 '

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

// 查询 用户组成员
router.get('/Group/get_group_number/:group_id', function (req, res) {
  const { group_id } = req.params;
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'SELECT u.id, u.real_name ' +
                'FROM User AS u, UserClass AS uc WHERE uc.group_id = ? AND uc.user_id = u.id '
    CN.Select(connection, res, sql, [group_id], (rows) => {
      res.json({
        code: 0,
        data: rows
      })
    });
  });
});

// 删除角色 角色信息
router.post('/Group/delete_group', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Class SET ? WHERE id = ? '
    const id = req.body.id;
    let value = {};
    value.has_delete = 1;
    value.update_date = new Date();
    value.update_user = req.user.id;

    CN.Update(connection, res, sql, [value, id], (result) => {
      res.json({
        code: 0,
        data: result
      })
    });
  });
});

// 修改 角色 激活信息
router.post('/Group/active_group', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Class SET ? WHERE id = ? '
    const id = req.body.id;
    let value = {};
    value.active = req.body.active;
    value.update_date = new Date();
    value.update_user = req.user.id;
    CN.Update(connection, res, sql, [value, id], (result) => {
      res.json({
        code: 0,
        data: result
      })
    });
  });
});


// 修改 角色信息
router.post('/Group/edit_group', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Class SET ? WHERE id = ? '
    const id = req.body.id;
    var value = req.body;
    delete value.id;
    value.update_date = new Date();
    value.update_user = req.user.id;
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
router.post('/Group/add_group', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'INSERT Class SET ? '
    const value = req.body;
    value.create_date = new Date();
    value.create_user = req.user.id;
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
