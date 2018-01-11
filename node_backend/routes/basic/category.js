const express = require('express');

const router = express.Router();

// 获取单元信息列表
const getCategories = (req, res, next) => {
  const db = req.db;
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
  WHERE T.SW_ID=T1.ID(+) AND T.STATUS=0
  `;
  db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
}

// 获取单元信息详情
const getCategory = (req, res, next) => {
  const db = req.db;
  const sql = `SELECT 
    T2.ID AS ID, 
    T2.SU_CODE AS SU_CODE, 
    T2.SU_NAME AS SU_NAME, 
    T2.PID AS PID, 
    T2.SU_OWNERID AS SU_OWNERID, 
    (SELECT NAME FROM B_USER WHERE ID=T2.SU_OWNERID) AS SU_OWNER_NAME, 
    T2.SU_SYSTEM AS SU_SYSTEM, 
    T2.INSTALLPOS AS INSTALLPOS, 
    T2.SU_STORAGE AS SU_STORAGE, 
    T2.SU_SAVEPOS AS SU_SAVEPOS ,
    T2.STATUS AS STATUS, 
    T2.SU_ANNEX AS SU_ANNEX, 
    T2.SU_DESCRIBE AS SU_DESCRIBE, 
    T2.CREATE_DATE AS CREATE_DATE,
    T2.SW_TYPE, 
    T2.SW_SCALE, 
    (select WMSYS.WM_CONCAT(t.NAME)
        from B_MODULE t
        start with t.ID=T1.MODULE_ID
    connect by prior t.PID = t.ID) AS MODULE_TREE, 
    T2.SW_MATING, 
    T1.ID AS SW_ID, 
    T1.NAME AS SW_NAME, 
    T1.MODULE_ID AS SW_MODULE_ID, 
    T1.MODULE_RELATION AS SW_MODULE_RELATION, 
    T1.DEPARTMENT_ID AS SW_DEPARTMENT_ID, 
    T1.SW_OWNER AS SW_OWNER, 
    T1.SW_SYSTEM AS SW_SYSTEM, 
    T1.INSTALLPOS AS SW_INSTALLPOS, 
    T1.SW_STORAGE AS SW_STORAGE, 
    T1.SW_SAVEPOS AS SW_SAVEPOS, 
    T1.MAKEUNIT AS SW_MAKEUNIT, 
    T1.SW_ANNEX AS SW_ANNEX, 
    T1.SW_INFO AS SW_INFO, 
    T1.PID AS SW_PID, 
    T1.SW_VERSION AS SW_VERSION 
    FROM B_SOFTWARE T1, B_CATEGORY T2 
    WHERE T2.SW_ID=T1.ID(+)
    AND T2.ID=:ID
  `;
  db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    // 查询树状结构
    const sql = `
    select 
      t.ID, 
      t.INSTALLPOS, 
      t.CREATE_DATE, 
      t.DEPARTMENT_ID, 
      t.PID, 
      (select SU_NAME from B_UNIT WHERE ID=t.DEPARTMENT_ID) AS DEP_NAME, 
      (select ID from B_UNIT WHERE ID=t.DEPARTMENT_ID) AS DEP_ID 
      from B_CATEGORY t
      start with t.ID=:ID
    connect by prior t.PID = t.ID
    union
    select 
      t.ID, 
      t.INSTALLPOS, 
      t.CREATE_DATE, 
      t.DEPARTMENT_ID, 
      t.PID, 
      (select SU_NAME from B_UNIT WHERE ID=t.DEPARTMENT_ID) AS DEP_NAME, 
      (select ID from B_UNIT WHERE ID=t.DEPARTMENT_ID) AS DEP_ID 
      from B_CATEGORY t
      start with t.ID=:ID
    connect by prior t.ID = t.PID
    `;
    if (rst.rows.length === 0) {
      res.json({ code: 0, data: [] });
      return;
    }
    let data = rst.rows[0];
    db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
      if(err) return next(err);
      // 加入树状结构， 返回结构
      data.tree = rst.rows;
      res.json({ code: 0, data });
    });
  });
}

// 得到软件与单位信息
const getSWAndUnit = (req, res, next) => {
  const unitId = req.params.unitid;
  const sql = `SELECT SW_ID FROM B_CATEGORY`;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    const sql = `SELECT t1.SW_ID, t2.* FROM R_SW_UNIT t1, B_UNIT t2 WHERE t1.SW_ID=:SW_ID AND t2.ID(+)=UNIT_ID`;
    req.db.sqlback(sql, { SW_ID: rst.rows[0].SW_ID }, (err, rst) => {
      if(err) return next(err);
      res.json({ code: 0, data: rst.rows });
    });
  });
}

// 根据单元ID获取得到所有使用单元的单位信息
const getCategoryAndUnit = (req, res, next) => {
  // t1: 软件与单位信息表
  // t2: 单位信息表
  // t3: 单元信息表
  const sql = `
    SELECT 
      t1.ID, 
      t1.SW_ID, 
      t1.UNIT_ID, 
      t2.SU_NAME AS UNIT_NAME, 
      (select WMSYS.WM_CONCAT(t.SU_NAME)
        from B_UNIT t
        start with t.ID=t2.ID
      connect by prior t.PID = t.ID ) AS UNIT_ORDER, 
      t2.SU_TYPE AS UNIT_TYPE, 
      t2.SU_CODE AS UNIT_CODE, 
      t2.PID AS UNIT_PID, 
      t2.MODEL AS UNIT_MODEL, 
      t3.ID AS CATEGORY_ID, 
      t3.INSTALLPOS AS CATEGORY_INSTALLPOS, 
      t3.CREATE_DATE AS CATEGORY_CREATE_DATE, 
      t3.SW_TYPE AS CATEGORY_TYPE 
    FROM R_SW_UNIT t1, B_UNIT t2, B_CATEGORY t3 
    WHERE  
    t1.UNIT_ID=t2.ID(+) 
    AND t1.SW_ID=t3.SW_ID(+) 
    AND t1.SW_ID in 
    (select t.SW_ID
      from B_CATEGORY t
      start with t.ID=:ID
    connect by prior t.PID = t.ID
    union
    select t.SW_ID
      from B_CATEGORY t
      start with t.ID=:ID
    connect by prior t.ID = t.PID)
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};


// 新增单元信息
const addCategory = (req, res, next) => {
  const body = req.body;
  const value = {
    SU_CODE: body.SU_CODE,
    SU_NAME: body.SU_NAME,
    PID: body.PID,
    SW_ID: body.SW_ID,
    DEPARTMENT_ID: body.DEPARTMENT_ID,
    SU_OWNERID: body.SU_OWNERID,
    SU_SYSTEM: body.SU_SYSTEM,
    INSTALLPOS: body.INSTALLPOS,
    SU_STORAGE: body.SU_STORAGE,
    SU_SAVEPOS: body.SU_SAVEPOS,
    SU_ANNEX: body.SU_ANNEX,
    SU_DESCRIBE: body.SU_DESCRIBE,
    CREATE_DATE: new Date(),
    CREATE_ID: body.CREATE_ID,
    SW_SCALE: body.SW_SCALE,
    SW_TYPE: body.SW_TYPE,
    SW_MATING: body.SW_MATING,
    STATUS: 0
  };
  const sql = `BEGIN
  UPDATE B_SOFTWARE SET MODULE_RELATION=MODULE_RELATION||' '||B_CATEGORY_SEQ.NEXTVAL 
  WHERE ID=:SW_ID;
  INSERT INTO B_CATEGORY(
      SU_CODE, SU_NAME, PID, SW_ID, 
      DEPARTMENT_ID, SU_OWNERID, SU_SYSTEM, INSTALLPOS, 
      SU_STORAGE, SU_SAVEPOS, SW_SCALE, SU_ANNEX, SU_DESCRIBE, 
      CREATE_DATE, CREATE_ID, SW_TYPE, 
      SW_MATING, STATUS
    ) VALUES (
      :SU_CODE, :SU_NAME, :PID, :SW_ID, 
      :DEPARTMENT_ID, :SU_OWNERID, :SU_SYSTEM, :INSTALLPOS, 
      :SU_STORAGE, :SU_SAVEPOS, :SW_SCALE, :SU_ANNEX, :SU_DESCRIBE, 
      :CREATE_DATE, :CREATE_ID, :SW_TYPE, 
      :SW_MATING, :STATUS
    );
  END;`;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 })
  });
}

// 更新单元信息
const udpateCategory = (req, res, next) => {
  const body = req.body;
  const value = {
    ID: req.params.id,
    SU_CODE: body.SU_CODE,
    SU_NAME: body.SU_NAME,
    PID: body.PID,
    SW_ID: body.SW_ID,
    DEPARTMENT_ID: body.DEPARTMENT_ID,
    SU_OWNERID: body.SU_OWNERID,
    SU_SYSTEM: body.SU_SYSTEM,
    INSTALLPOS: body.INSTALLPOS,
    SU_STORAGE: body.SU_STORAGE,
    SU_SAVEPOS: body.SU_SAVEPOS,
    SU_ANNEX: body.SU_ANNEX,
    SW_SCALE: body.SW_SCALE,
    SU_DESCRIBE: body.SU_DESCRIBE,
    UPDATE_DATE: new Date(),
    UPDATE_ID: body.UPDATE_ID,
    SW_TYPE: body.SW_TYPE,
    SW_MATING: body.SW_MATING,
  };
  // 先删除该单元原来对应的软件，再更新当前对应的软件
  const sql = `BEGIN
  UPDATE B_SOFTWARE SET 
    MODULE_RELATION=replace(MODULE_RELATION, :ID, '') 
  WHERE ID=(SELECT SW_ID FROM B_CATEGORY WHERE ID=:ID);
  UPDATE B_SOFTWARE SET 
    MODULE_RELATION=MODULE_RELATION||' '||:ID
  WHERE ID=:SW_ID;
  UPDATE B_CATEGORY SET 
    SU_CODE=:SU_CODE, 
    SU_NAME=:SU_NAME, 
    PID=:PID, 
    SW_ID=:SW_ID, 
    DEPARTMENT_ID=:DEPARTMENT_ID, 
    SU_OWNERID=:SU_OWNERID, 
    SU_SYSTEM=:SU_SYSTEM, 
    INSTALLPOS=:INSTALLPOS, 
    SU_STORAGE=:SU_STORAGE,
    SU_SAVEPOS=:SU_SAVEPOS, 
    SW_SCALE=:SW_SCALE, 
    SU_ANNEX=:SU_ANNEX, 
    SU_DESCRIBE=:SU_DESCRIBE, 
    UPDATE_DATE=:UPDATE_DATE, 
    UPDATE_ID=:UPDATE_ID,  
    SW_TYPE=:SW_TYPE, 
    SW_MATING=:SW_MATING 
  WHERE ID=:ID;
  END;
  `;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 })
  });
};

// 根据单元ID，获取单元版本
const getUnitVer = (req, res, next) => {
  const sql = `SELECT 
  t1.ID, 
  t1.CATEGORY_VERSION,
  t1.DEV_UNIT_ID,
  t1.MD5, 
  t1.CREATE_TIME, 
  t1.SW_ID, 
  t2.SU_CODE, 
  t2.SU_TYPE, 
  t2.SU_NAME, 
  t3.INSTALLPOS
FROM B_CATEGORY_VERSION t1, B_UNIT t2, B_CATEGORY t3 
WHERE 
  t1.DEV_UNIT_ID=t2.ID(+) 
  AND t1.CATEGORY_ID=:ID 
  AND t3.ID=:ID
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 根据软件版本ID，获取单元版本列表
const getVersionsBySWID = (req, res, next) => {
  const sql = `SELECT 
    t1.ID AS V_ID, 
    t1.CATEGORY_VERSION AS V_CATEGORY_VERSION,
    t1.DEV_UNIT_ID AS V_DEV_UNIT_ID,
    t1.MD5 AS V_MD5, 
    t1.CREATE_TIME AS V_CREATE_TIME, 
    t1.SW_ID AS V_SW_ID,
    t2.ID AS C_ID, 
    t2.SU_CODE AS C_SU_CODE, 
    t2.SU_NAME AS C_SU_NAME, 
    t2.PID AS C_PID, 
    t2.SU_OWNERID AS C_SU_OWNERID, 
    t2.SU_SYSTEM AS C_SU_SYSTEM, 
    t2.INSTALLPOS AS C_INSTALLPOS, 
    t2.SU_STORAGE AS C_SU_STORAGE, 
    t2.SU_SAVEPOS AS C_SU_SAVEPOS,
    t2.STATUS AS C_STATUS, 
    t2.SU_ANNEX AS C_SU_ANNEX, 
    t2.SU_DESCRIBE AS C_SU_DESCRIBE, 
    t2.CREATE_DATE AS C_CREATE_DATE,
    t2.SW_TYPE AS C_SW_TYPE, 
    t2.SW_SCALE AS C_SW_SCALE, 
    (select WMSYS.WM_CONCAT(t.NAME)
        from B_MODULE t
        start with t.ID=t4.MODULE_ID
    connect by prior t.PID = t.ID) AS C_MODULE_TREE, 
    t2.SW_MATING AS C_SW_MATING,
    t4.ID AS SW_ID, 
    t4.NAME AS SW_NAME, 
    t4.MODULE_ID AS SW_MODULE_ID, 
    t4.MODULE_RELATION AS SW_MODULE_RELATION, 
    t4.DEPARTMENT_ID AS SW_DEPARTMENT_ID, 
    t4.SW_OWNER AS SW_OWNER, 
    t4.SW_SYSTEM AS SW_SYSTEM, 
    t4.INSTALLPOS AS SW_INSTALLPOS, 
    t4.SW_STORAGE AS SW_STORAGE, 
    t4.SW_SAVEPOS AS SW_SAVEPOS, 
    t4.MAKEUNIT AS SW_MAKEUNIT, 
    t4.SW_ANNEX AS SW_ANNEX, 
    t4.SW_INFO AS SW_INFO, 
    t4.PID AS SW_PID, 
    t4.SW_VERSION AS SW_VERSION, 
    t4.MD5 AS SW_MD5, 
    t3.SU_CODE AS U_SU_CODE, 
    t3.SU_TYPE AS U_SU_TYPE, 
    t3.SU_NAME AS U_SU_NAME
  FROM B_CATEGORY_VERSION t1, B_CATEGORY t2, B_UNIT t3, B_SOFTWARE t4 
  WHERE 
  t1.SW_ID=:ID
  AND t1.DEV_UNIT_ID=t3.ID(+)
  AND t2.SW_ID=t4.ID(+)
  AND t1.CATEGORY_ID=t2.ID(+)
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

router.get('/software-unit/:unitid', getSWAndUnit);
router.get('/categories', getCategories);
router.get('/category/:id', getCategory);
router.post('/category', addCategory);
router.put('/category/:id', udpateCategory);
router.get('/category-unit/:id', getCategoryAndUnit);
router.get('/versions/:id', getUnitVer);
router.get('/sw-versions/:id', getVersionsBySWID);
module.exports = router;
