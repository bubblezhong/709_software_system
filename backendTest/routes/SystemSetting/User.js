var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');
// var bcrypt = require('bcrypt-nodejs'); // 密码加密

// 查询 用户信息
router.get('/User/get_user_list', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'SELECT u.id, u.real_name, u.email, u.gender, u.remark, u.login_name, u.create_date, u.active, ' +
                'o.name as organization_name, o.id as organization_id, r.name as role_name, r.id as role_id ' +
                'FROM User AS u, Organization AS o, Role AS r ' +
                'WHERE u.has_delete = 0 ' +
                'AND u.organization_id = o.id ' +
                'AND u.role_id = r.id ';
    const sql_class = 'SELECT uc.user_id, uc.class_id, c.name ' +
                      'FROM Class AS c, UserClass AS uc ' +
                      'WHERE uc.class_id = c.id ';

    CN.Select(connection, res, sql, [null], (rows) => {
      CN.Select(connection, res, sql_class, [null], (rows_class) => {
        rows.forEach((item) => {
          item.key = item.id;
          item.class_list = rows_class.filter((class_item) => (class_item.user_id == item.id));
        })
        res.json({
          code: 0,
          data: rows
        })
      });
    });
  });
});

// 禁用单位 用户信息
router.post('/User/delete_user', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE User SET has_delete = 1 WHERE id = ? '
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
router.post('/User/active_user', function (req, res) {
  console.log('active_user:', req.body);
  console.log('active_user ID:', req.body.id);
  console.log('active_user active:', req.body.active);
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE User SET ? WHERE id = ? '
    const id = req.body.id;
    // console.log('active_user', req.body.active);
    var value = req.body;
    delete value.id;
    value.update_date = new Date();
    value.update_user = req.user.id;
    console.log('value', value);
    CN.Update(connection, res, sql, [value, id], (result) => {
      res.json({
        code: 0,
        data: result
      })
    });
  });
});

// 修改 用户信息
router.post('/User/edit_user', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE User SET ? WHERE id = ? '
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

// 添加 用户信息
router.post('/User/add_user', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'INSERT User SET ? '
    var value = req.body;
    value.create_date = new Date();
    value.create_user = req.user.id;
    // value.password =  bcrypt.hashSync(value.password, null, null);
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
