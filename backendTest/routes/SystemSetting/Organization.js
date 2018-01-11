var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');

// var l2t = require('./../list2tree.js');

// 查询 单位信息
router.get('/Organization/get_organization', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'SELECT id, name, parent_id, department_type FROM Organization WHERE status = 0 '

    CN.Select(connection, res, sql, [null], (rows) => {
      // const result = l2t.ListToTree(rows, 0);
      res.json({
        code: 0,
        data: rows
      });
    });
  });
});

// 查询 某单位信息
router.get('/Organization/GetInfoById/:id', (req, res) => {
  const id = req.params.id;
  req.getConnection((err, connection) => {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'SELECT id, name, parent_id, department_type FROM Organization WHERE status = 0 AND id = ? ';
    const sqlList = 'SELECT id, name, parent_id, department_type FROM Organization WHERE status = 0 ';

    const listFin = [];

    const newfunction = (__list, __id) => {
      console.log('__list', __list);
      const newValue = __list.find((item) => {
        return item.id == __id
      });
      if (newValue.parent_id) {
        newfunction(__list, newValue.parent_id);
      }
      listFin.push(newValue);
      return;
    };

    CN.Select(connection, res, sql, [id], (rows) => {
      CN.Select(connection, res, sqlList, [id], (list) => {
        // console.log('list', list);
        newfunction(list, id);
        const result = rows[0];
        result.organizationTree = listFin;

        res.json({
          code: 0,
          data: result,
        });
      });
    });
  });
});

// 查询 某单位 安装软件信息
router.get('/Organization/GetSoftByOrgId/:id', (req, res) => {
  const id = req.params.id;
  const softwareList = [
    {
      id: 1,
      name: '一号软件',
      install_location: '主控电脑',
      install_time: '2017-02-11',
    },
  ];
  res.json({
    code: 0,
    data: softwareList,
  });
});

// 禁用单位 单位信息
router.post('/Organization/delete_organization', (req, res) => {
  req.getConnection((err, connection) => {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Organization SET status = 1 WHERE id = ? ';
    const id = req.body.id;
    CN.Update(connection, res, sql, [id], (result) => {
      res.json({
        code: 0,
        data: result
      })
    });
  });
});

// 修改 单位信息
router.post('/Organization/edit_organization', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'UPDATE Organization SET ? WHERE id = ? '
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

// 添加 单位信息
router.post('/Organization/add_organization', function (req, res) {
  req.getConnection(function(err, connection) {
    if (err) {
      console.log('数据库连接失败', err);
      return res.json(resErr.badConnection);
    }
    const sql = 'INSERT Organization SET ? '
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
