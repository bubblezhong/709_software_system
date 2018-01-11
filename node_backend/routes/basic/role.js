const express = require('express');

const router = express.Router();

// 角色列表
const getRoles = (req, res, next) => {
  const sql = `SELECT ID, ROLENAME, TYPE, ORG_TYPE, 
  REMARK, NUM, CREATE_DATE FROM B_ROLE WHERE STATUS=0
  `;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 角色详情
const getRole = (req, res, next) => {
  const sql = `SELECT t.*,
   (SELECT NAME FROM B_USER WHERE ID=t.CREATE_ID) AS CREATE_NAME,
   (SELECT NAME FROM B_USER WHERE ID=t.UPDATE_ID) AS UPDATE_NAME
  FROM B_ROLE t WHERE t.ID=:ID`;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows[0] });
  });
};

// 角色增加
const addRole = (req, res, next) => {
  const value = {
    ROLENAME: req.body.ROLENAME,
    TYPE: req.body.TYPE,
    ORG_TYPE: req.body.ORG_TYPE,
    REMARK: req.body.REMARK,
    NUM: req.body.NUM,
    STATUS: 0,
    CREATE_DATE: new Date(),
    CREATE_ID: req.body.CREATE_ID,
  };
  const sql = `INSERT INTO B_ROLE (
    ROLENAME, TYPE, ORG_TYPE, REMARK, NUM,
    STATUS, CREATE_DATE, CREATE_ID
  ) VALUES (
    :ROLENAME, :TYPE, :ORG_TYPE, :REMARK, :NUM,
    :STATUS, :CREATE_DATE, :CREATE_ID
  )`;
  req.db.sqlback(sql, value, (err, rst) => {
    if (err) return next(rst);
    res.json({ code: 0 });
  });
};

// 更新角色信息
const updateRole = (req, res, next) => {
  const value = {
    ID: req.params.id,
    ROLENAME: req.body.ROLENAME,
    TYPE: req.body.TYPE,
    ORG_TYPE: req.body.ORG_TYPE,
    REMARK: req.body.REMARK,
    NUM: req.body.NUM,
    UPDATE_DATE: new Date(),
    UPDATE_ID: req.body.UPDATE_ID,
  };
  const sql = `UPDATE B_ROLE SET 
    ROLENAME=:ROLENAME, 
    TYPE=:TYPE, 
    ORG_TYPE=:ORG_TYPE, 
    REMARK=:REMARK, 
    NUM=:NUM,
    UPDATE_DATE=:UPDATE_DATE, 
    UPDATE_ID=:UPDATE_ID 
  WHERE ID=:ID
  `;
  req.db.sqlback(sql, value, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
};

router.get('/roles', getRoles);
router.get('/role/:id', getRole);
router.post('/role', addRole);
router.put('/role/:id', updateRole);

module.exports = router;