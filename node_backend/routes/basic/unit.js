const express = require('express');

const router = express.Router();

// 单位列表
const getUnits = (req, res, next) => {
  const sql = `SELECT 
    t1.ID, t1.SU_CODE, t1.SU_NAME, t1.SU_TYPE, t1.MANAGER, t1.NUM,
    (SELECT SU_NAME FROM B_UNIT WHERE ID=t1.PID) AS P_NAME, 
    t1.MODEL, t1.PID, (SELECT NAME FROM B_USER t2 WHERE t2.ID=t1.MANAGER) AS MANAGER_NAME, 
    t1.CREATE_DATE, t1.STATUS
  FROM B_UNIT t1`;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 单位详情
const getUnit = (req, res, next) => {
  const sql = `SELECT t1.*, 
  t2.ID AS USER_ID, 
  t2.ORGANIZATION_ID, 
  t2.NAME AS USER_NAME, 
  t2.NUM AS USER_NUM, 
  t2.TYPE AS USER_TYOE, 
  (SELECT SU_NAME FROM B_UNIT WHERE ID=t1.PID) AS P_NAME, 
  (SELECT NAME FROM B_USER t2 WHERE t2.ID=t1.CREATE_ID) AS CREATE_NAME,
  (SELECT NAME FROM B_USER t2 WHERE t2.ID=t1.UPDATE_ID) AS UPDATE_NAME
  FROM B_UNIT t1, B_USER t2 
  WHERE t1.ID=:ID 
  AND t1.MANAGER=t2.ID(+)
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows[0] }); 
  });
}

// 增加单位
const addUnit = (req, res, next) => {
  const value = {
    SU_CODE: req.body.SU_CODE,
    SU_NAME: req.body.SU_NAME,
    SU_TYPE: req.body.SU_TYPE,
    MANAGER: req.body.MANAGER,
    CREATE_ID: req.body.CREATE_ID,
    MODEL: req.body.MODEL,
    STATUS: 0,
    PID: req.body.PID,
    ADDR: req.body.ADDR,
    PHONE: req.body.PHONE,
    EMAIL: req.body.EMAIL,
    CREATE_DATE: new Date()
  };
  const sql = `INSERT INTO B_UNIT (
    SU_CODE, SU_NAME, MANAGER, SU_TYPE, CREATE_ID, MODEL,
    STATUS, PID, ADDR, PHONE, EMAIL, CREATE_DATE 
  ) VALUES (
    :SU_CODE, :SU_NAME, :MANAGER, :SU_TYPE, :CREATE_ID, :MODEL,
    :STATUS, :PID, :ADDR, :PHONE, :EMAIL, :CREATE_DATE
  )`;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
};

// 更新单位
const updateUnit = (req, res, next) => {
  const value = {
    ID: req.params.id, 
    SU_CODE: req.body.SU_CODE,
    SU_NAME: req.body.SU_NAME,
    SU_TYPE: req.body.SU_TYPE,
    MANAGER: req.body.MANAGER,
    UPDATE_ID: req.body.UPDATE_ID,
    MODEL: req.body.MODEL,
    STATUS: req.body.STATUS,
    PID: req.body.PID,
    ADDR: req.body.ADDR,
    PHONE: req.body.PHONE,
    EMAIL: req.body.EMAIL,
    UPDATE_DATE: new Date()
  };
  const sql = `UPDATE B_UNIT SET 
    SU_CODE=:SU_CODE, 
    SU_NAME=:SU_NAME, 
    MANAGER=:MANAGER, 
    SU_TYPE=:SU_TYPE,
    UPDATE_ID=:UPDATE_ID, 
    MODEL=:MODEL, 
    STATUS=:STATUS, 
    PID=:PID, 
    ADDR=:ADDR, 
    PHONE=:PHONE, 
    EMAIL=:EMAIL, 
    UPDATE_DATE=:UPDATE_DATE
  WHERE ID=:ID
  `;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
}

// 根据单位ID获取到单位所使用的软件列表 
const getUnitSoftWares = (req, res, next) => {
  const UNIT_ID = req.params.id;
  const sql = `SELECT 
    t1.UNIT_ID,
    t1.SW_ID, 
    t2.*, 
    (select WMSYS.WM_CONCAT(t.NAME)
        from B_MODULE t
        start with t.ID=t2.MODULE_ID
    connect by prior t.PID = t.ID) AS MODULE_TREE
    FROM R_SW_UNIT t1, B_SOFTWARE t2 
    WHERE t1.UNIT_ID=:UNIT_ID AND t2.ID=t1.SW_ID(+)`;
  req.db.sqlback(sql, { UNIT_ID: UNIT_ID }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 根据单位ID获取到单位的软件研发列表
const getDevUnitSoftWares = (req, res, next) => {
  const sql = `SELECT 
    t1.ID, 
    t2.*,
    (select WMSYS.WM_CONCAT(t.NAME)
        from B_MODULE t
        start with t.ID=t2.MODULE_ID
    connect by prior t.PID = t.ID) AS MODULE_TREE
    FROM B_SOFTWARE t2, B_UNIT t1
    WHERE t1.ID(+)=t2.DEPARTMENT_ID AND t1.ID=:ID
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 获取单位所有的类型
const getType = (req, res, next) => {
  const sql = `SELECT SU_TYPE FROM B_UNIT GROUP BY SU_TYPE`;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    const data = rst.rows.map((item) => item.SU_TYPE);
    res.json({ code: 0, data });
  });
};
router.get('/units', getUnits);
router.get('/unit/:id', getUnit);
router.post('/unit', addUnit);
router.put('/unit/:id', updateUnit);
router.get('/use-sw-unit/:id', getUnitSoftWares);
router.get('/dev-sw-unit/:id', getDevUnitSoftWares);
router.get('/types', getType);

module.exports = router;