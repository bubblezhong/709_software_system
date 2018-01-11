const express = require('express');

const router = express.Router();

// 谱系列表
const getModules = (req, res, next) => {
  const sql = `SELECT ID, NAME, PID, STATUS, CREATE_DATE, CREATE_USER,
   (SELECT NAME FROM B_USER t1 WHERE t1.ID=CREATE_USER) AS CREATE_NAME 
  FROM B_MODULE`;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
}

// 谱系详情
const getModule = (req, res, next) => {
  const sql = `SELECT 
    t1.*, 
    (SELECT NAME FROM B_MODULE t2 WHERE t2.ID=t1.PID) AS P_NAME, 
    (SELECT NAME FROM B_USER t2 WHERE t2.ID=t1.CREATE_USER) AS CREATE_NAME,
    (SELECT NAME FROM B_USER t2 WHERE t2.ID=t1.UPDATE_USER) AS UPDATE_NAME 
     FROM B_MODULE t1 WHERE ID=:ID`;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows[0] });
  });
}

// 更新谱系
const updateModule = (req, res, next) => {
  const value = {
    ID: req.params.id,
    NAME: req.body.NAME,
    PID: req.body.PID,
    STATUS: req.body.STATUS,
    UPDATE_DATE: new Date(),
    UPDATE_USER: req.body.UPDATE_USER
  };
  const sql = `
    UPDATE B_MODULE SET 
      NAME=:NAME, 
      PID=:PID, 
      STATUS=:STATUS, 
      UPDATE_DATE=:UPDATE_DATE, 
      UPDATE_USER=:UPDATE_USER
    WHERE ID=:ID
  `;
  req.db.sqlback(sql, value, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
}

const addModule = (req, res, next) => {
  const value = {
    NAME: req.body.NAME ,
    PID: req.body.PID, 
    STATUS: 0, 
    CREATE_DATE: new Date(),
    CREATE_USER: req.body.CREATE_USER,
  };
  const sql = `
    INSERT INTO B_MODULE (
      NAME, PID, STATUS, CREATE_DATE, CREATE_USER
    ) VALUES (
      :NAME, :PID, :STATUS, :CREATE_DATE, :CREATE_USER
    )
  `;
  req.db.sqlback(sql, value, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
}

router.get('/modules', getModules);
router.get('/module/:id', getModule);
router.put('/module/:id', updateModule);
router.post('/module', addModule);
module.exports = router;
