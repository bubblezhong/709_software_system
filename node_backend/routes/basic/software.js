const express = require('express');
const handleData = require('../../utils/handleData');

const router = express.Router();

// 软件列表
const getSoftWares = (req, res, next) => {
  const sql = `SELECT 
    t1.ID, 
    t1.SW_CODE, 
    t1.NAME, 
    t1.MODULE_ID, 
    t1.DEPARTMENT_ID,
    t1.SW_SCALE, 
    t2.SU_NAME, 
    t1.CREATE_TIME, 
    t1.STATUS, 
    (select WMSYS.WM_CONCAT(t.NAME)
        from B_MODULE t
        start with t.ID=t1.MODULE_ID
      connect by prior t.PID = t.ID) AS MODULE_TREE 
    FROM B_SOFTWARE t1, B_UNIT t2 
    WHERE t1.DEPARTMENT_ID=t2.ID(+) 
    AND t1.PID=0
  `;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
}

// 软件详情
const getSoftWare = (req, res, next) => {
  const sql = `SELECT t1.*, t2.SU_NAME,
  (select WMSYS.WM_CONCAT(t.NAME)
        from B_MODULE t
        start with t.ID=t1.MODULE_ID
  connect by prior t.PID = t.ID) AS MODULE_TREE
  FROM B_SOFTWARE t1, B_UNIT t2
  WHERE t1.ID=:ID and t1.DEPARTMENT_ID=t2.ID(+)
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    const sql = `
    select 
      t.SW_VERSION, 
      t.ID, 
      t.INSTALLPOS, 
      (select ID from B_UNIT WHERE ID=t.DEPARTMENT_ID) AS DEP_ID, 
      (select SU_NAME from B_UNIT WHERE ID=t.DEPARTMENT_ID) AS DEP_NAME, 
      t.CREATE_TIME, t.MD5 FROM B_SOFTWARE t
      start with t.ID=:ID
    connect by prior t.ID = t.PID
    `;
    // 如果查询软件信息为空的情况下， 退出返回
    if (rst.rows.length === 0) {
      res.json({ code: 0, data: [] });
      return;
    }
    let data = rst.rows[0];
    req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
      if(err) return next(err);
      // 加入树状结构， 返回结构
      data.tree = rst.rows;
      data.tree.shift();
      res.json({ code: 0, data });
    });
  });
}

// 根据软件ID获取使用单位列表
const getSWAndUnit = (req, res, next) => {
  const SW_ID = req.params.id;
  const sql = `SELECT 
    t1.SW_ID, 
    t1.UNIT_ID, 
    t3.SW_CODE AS SW_CODE, 
    t3.NAME AS SW_NAME, 
    t3.INSTALLPOS AS SW_INSTALLPOS, 
    t3.SW_VERSION AS SW_VERSION, 
    t3.CREATE_TIME AS SW_CREATE_DATE, 
    t2.SU_NAME AS UNIT_NAME, 
    (select WMSYS.WM_CONCAT(t.SU_NAME)
      from B_UNIT t
      start with t.ID=t2.ID
    connect by prior t.PID = t.ID ) AS UNIT_ORDER, 
    t2.SU_TYPE AS UNIT_TYPE, 
    t2.SU_CODE AS UNIT_CODE, 
    t2.PID AS UNIT_PID, 
    t2.MODEL AS UNIT_MODEL 
    FROM R_SW_UNIT t1, B_UNIT t2, B_SOFTWARE t3 
    WHERE 
    t1.SW_ID in (
      select t.ID
        from B_SOFTWARE t
        start with t.ID=:SW_ID
      connect by prior t.PID = t.ID
      union
      select t.ID
        from B_SOFTWARE t
        start with t.ID=:SW_ID
      connect by prior t.ID = t.PID
    ) 
    AND t2.ID=t1.UNIT_ID(+)
    AND t1.SW_ID=t3.ID(+)   
    `;
  req.db.sqlback(sql, { SW_ID: SW_ID }, (err, rst) => {
    if(err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 增加软件  待修改
const addSoftware = (req, res, next) => {
  const body = req.body;
  const value = {
    SW_CODE: body.SW_CODE,
    NAME: body.NAME,
    MODULE_ID: body.MODULE_ID,
    MODULE_RELATION: body.MODULE_RELATION,
    DEPARTMENT_ID: body.DEPARTMENT_ID,
    SW_OWNER: body.SW_OWNER,
    SW_SYSTEM: body.SW_SYSTEM,
    INSTALLPOS: body.INSTALLPOS,
    SW_STORAGE: body.SW_STORAGE,
    SW_SAVEPOS: body.SW_SAVEPOS,
    MAKEUNIT: body.MAKEUNIT,
    SW_ANNEX: body.SW_ANNEX,
    SW_SCALE: body.SW_SCALE,
    SW_INFO: body.SW_INFO,
    PID: body.PID,
    SW_VERSION: body.SW_VERSION,
    CREATE_TIME: new Date(),
    CREATE_ID: body.CREATE_ID,
    MD5: body.MD5,
    STATUS: 0
  };
  const sql = `INSERT INTO B_SOFTWARE (
    SW_CODE, NAME, MODULE_ID, MODULE_RELATION, DEPARTMENT_ID, 
    SW_OWNER, SW_SYSTEM, INSTALLPOS, SW_STORAGE, SW_SAVEPOS, 
    MAKEUNIT, SW_ANNEX, SW_SCALE, SW_INFO, PID, SW_VERSION, CREATE_TIME,
    MD5, STATUS, CREATE_ID
  ) VALUES (
    :SW_CODE, :NAME, :MODULE_ID, :MODULE_RELATION, :DEPARTMENT_ID, 
    :SW_OWNER, :SW_SYSTEM, :INSTALLPOS, :SW_STORAGE, :SW_SAVEPOS, 
    :MAKEUNIT, :SW_ANNEX, :SW_SCALE, :SW_INFO, :PID, :SW_VERSION, :CREATE_TIME,
    :MD5, :STATUS, :CREATE_ID
  )
  `;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
};

// 更新软件信息  待修改
const updateSoftware = (req, res, next) => {
  const body = req.body;
  const value = {
    ID: req.params.id,
    SW_CODE: body.SW_CODE,
    NAME: body.NAME,
    MODULE_ID: body.MODULE_ID,
    MODULE_RELATION: body.MODULE_RELATION,
    DEPARTMENT_ID: body.DEPARTMENT_ID,
    SW_OWNER: body.SW_OWNER,
    SW_SYSTEM: body.SW_SYSTEM,
    INSTALLPOS: body.INSTALLPOS,
    SW_STORAGE: body.SW_STORAGE,
    SW_SAVEPOS: body.SW_SAVEPOS,
    MAKEUNIT: body.MAKEUNIT,
    SW_TYPE: body.SW_TYPE,
    SW_ANNEX: body.SW_ANNEX,
    SW_SCALE: body.SW_SCALE,
    SW_INFO: body.SW_INFO,
    PID: body.PID,
    SW_VERSION: body.SW_VERSION,
    UPDATE_DATE: new Date(),
    UPDATE_ID: body.UPDATE_ID,
    MD5: body.MD5,
  };
  const sql = `UPDATE B_SOFTWARE SET 
    SW_CODE=:SW_CODE, 
    NAME=:NAME, 
    MODULE_ID=:MODULE_ID, 
    MODULE_RELATION=:MODULE_RELATION, 
    DEPARTMENT_ID=:DEPARTMENT_ID, 
    SW_OWNER=:SW_OWNER, 
    SW_SYSTEM=:SW_SYSTEM, 
    INSTALLPOS=:INSTALLPOS, 
    SW_STORAGE=:SW_STORAGE, 
    SW_SAVEPOS=:SW_SAVEPOS, 
    MAKEUNIT=:MAKEUNIT, 
    SW_SCALE=:SW_SCALE, 
    SW_ANNEX=:SW_ANNEX, 
    SW_TYPE=:SW_TYPE,
    SW_INFO=:SW_INFO, 
    PID=:PID, 
    SW_VERSION=:SW_VERSION, 
    UPDATE_DATE=:UPDATE_DATE,
    MD5=:MD5, 
    UPDATE_ID=:UPDATE_ID
  WHERE ID=:ID
  `;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
};

// 根据软件ID，获取单元列表
const getCategoryBySWID = (req, res, next) => {
  const sql = `SELECT 
    T.ID, 
    T.SU_CODE, 
    T1.MODULE_ID, 
    (select WMSYS.WM_CONCAT(t2.NAME)
        from B_MODULE t2
        start with t2.ID=T1.MODULE_ID
    connect by prior t2.PID = t2.ID) AS MODULE_TREE,
    T.SW_ID, 
    T.DEPARTMENT_ID, 
    (SELECT NAME FROM B_SOFTWARE WHERE ID=T.SW_ID) AS sw_name,
    T.SU_NAME, 
    (SELECT SU_NAME FROM B_SOFTWARE WHERE ID=T.DEPARTMENT_ID) AS de_name,
    T.PID, 
    T.CREATE_DATE, 
    T.STATUS
    FROM B_CATEGORY T, B_SOFTWARE T1 
  WHERE 
    T.SW_ID=T1.ID(+) 
    AND T.STATUS=0
    AND T.SW_ID=:ID
  `;
  req.db.sqlback(sql, { ID: req.params.sw_id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 根据软件ID，获取组成软件的单元树
const getCategory = (req, res, next) => {
  const swId = req.params.sw_id;
  const type = req.query.type;
  const sql = `SELECT MODULE_RELATION FROM B_SOFTWARE WHERE ID=:ID`;
  req.db.sqlback(sql, { ID: swId }, (err, rst) => {
    if (err) return next(err);
    if (rst.rows.length === 0){
      res.json({code: 0, data: []});
    } else {
      const setValue = rst.rows[0].MODULE_RELATION.split(/\s+/).join(',');
      // 单元信息
      if (type === 'category') {
        const sql = `SELECT 
          t2.ID, t2.SU_CODE, t2.SU_NAME, t2.PID
        from B_CATEGORY t2
        start with t2.ID IN (${setValue})
        connect by prior t2.PID = t2.ID
        `;
        req.db.sqlback(sql, {}, (err, rst) => {
          if (err) return next(err);
          // 去重过滤
          const data = handleData.arrayDuplicateRemoval(rst.rows);
          res.json({ code: 0, data});
        });
      } else {  // 单元版本信息
        // 先得到版本信息
        const sql = `SELECT 
          t1.CATEGORY_VERSION,
          t1.ID, 
          t1.CATEGORY_ID,
          t1.CREATE_TIME,
          t1.CATEGORY_ID
        FROM B_CATEGORY_VERSION t1 WHERE t1.ID IN (${setValue})`;
        req.db.sqlback(sql, {}, (err, rst) => {
          if (err) return next(err);
          const version = rst.rows;
          const sql = `SELECT 
            t2.ID, t2.SU_CODE, t2.SU_NAME, t2.PID
          from B_CATEGORY t2
          start with t2.ID IN (SELECT ID FROM B_CATEGORY 
            WHERE ID IN 
            (SELECT CATEGORY_ID FROM B_CATEGORY_VERSION 
              WHERE ID IN (${setValue})
            )
          )
          connect by prior t2.PID = t2.ID
          `;
          req.db.sqlback(sql, {}, (err, rst) => {
            if (err) return next(err);
            // 去重
            const data = handleData.arrayDuplicateRemoval(rst.rows);
            res.json({ code: 0, data: {
              version,
              category: data,
            } });
          });
        });
      }
    }
  });
};

router.get('/softwares', getSoftWares);
router.get('/software/:id', getSoftWare);
router.get('/software-unit/:id', getSWAndUnit);
router.post('/software', addSoftware);
router.put('/software/:id', updateSoftware);
router.get('/categories/:sw_id', getCategoryBySWID);
router.get('/use-category/:sw_id', getCategory);
module.exports = router;
