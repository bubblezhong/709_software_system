const express = require('express');

const router = express.Router();

// 根据单元版本ID，获取单元详情，版本详情
const getCategoryVersion = (req, res, next) => {
  const sql = `SELECT 
    T2.ID AS C_ID, 
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
    T1.SW_VERSION AS SW_VERSION, 
    T3.CATEGORY_VERSION, 
    t3.DEV_UNIT_ID,
    (SELECT SU_NAME FROM B_UNIT WHERE ID=t3.DEV_UNIT_ID) AS V_DEV_NAME, 
    t3.MD5 
    FROM B_SOFTWARE T1, B_CATEGORY T2, B_CATEGORY_VERSION t3
    WHERE T2.SW_ID=T1.ID(+) 
    AND T2.ID=T3.CATEGORY_ID 
    AND T3.ID=:ID
  `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows[0] });
  });
};

// 根据软件版本获取使用单位
const getUseUnit = (req, res, next) => {
  const sql = `SELECT 
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
    t3.SW_TYPE AS CATEGORY_TYPE, 
    t4.CATEGORY_VERSION, 
    t4.MD5, 
    t4.CREATE_TIME
    FROM R_SW_UNIT t1, B_UNIT t2, B_CATEGORY t3, B_CATEGORY_VERSION t4 
    WHERE  
    t1.UNIT_ID=t2.ID(+) 
    AND t1.SW_ID=t3.SW_ID(+) 
    AND t4.ID=:ID 
    AND t1.SW_ID in 
    (select t.SW_ID
      from B_CATEGORY t
      start with t.ID=t4.CATEGORY_ID
    connect by prior t.PID = t.ID
    union
    select t.SW_ID
      from B_CATEGORY t
      start with t.ID=t4.CATEGORY_ID
    connect by prior t.ID = t.PID)`;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 根据软件ID，获取单元版本的信息，加入单元的PID。
const getVersionTree = (req, res, next) => {
  const sql = `SELECT 
    t1.ID AS V_ID, 
    t1.CATEGORY_VERSION AS CATEGORY_VERSION, 
    t1.DEV_UNIT_ID AS V_DEV_UNIT_ID, 
    t1.MD5 AS V_MD5, 
    t1.CREATE_TIME AS V_CREATE_TIME, 
    t2.ID AS C_ID, 
    t2.SU_CODE AS C_SU_CODE, 
    t2.SU_NAME AS C_SU_NAME, 
    t2.PID AS C_PID
    FROM B_CATEGORY t2, B_CATEGORY_VERSION t1
    WHERE t1.SW_ID=:ID 
    AND t1.CATEGORY_ID=t2.ID(+)
  `;
  req.db.sqlback(sql, { ID: req.params.sw_id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 根据软件ID，获取单元树和相应的所有版本
const getCateAndVer_tree = (req, res, next) => {
  const swID = req.params.sw_id;
  // 获取软件对应的单元树
  const sql = `
    SELECT 
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
  req.db.sqlback(sql, { ID: swID }, (err, rst) => {
    if (err) return next(err);
    // 处理数据
    if ( rst.rows.length === 0) {
      // 软件匹配无数据
      res.json({ code: 0, data: [] });
    } else {
      // 获取所有的单元id
      const setVaule = rst.rows.map((item, index) => {
        return item.ID;
      }).join(',');
      // console.log("setVaule", setVaule);
      // 单元信息
      const cateData = rst.rows;
      // 获取单元版本信息
      const sql = `SELECT 
        t1.ID, 
        t1.CATEGORY_VERSION, 
        t1.DEV_UNIT_ID, 
        t1.MD5, 
        t1.CATEGORY_ID, 
        t1.CREATE_TIME, 
        t1.SW_ID, 
        t1.CATEGORY_VERSION, 
        t2.SU_CODE, 
        t2.SU_NAME,
        t2.SU_TYPE 
      FROM B_CATEGORY_VERSION t1, B_UNIT t2
      WHERE 
        t1.CATEGORY_ID IN (${setVaule})
        AND T1.STATUS=0 
        AND t2.ID(+)=t1.DEV_UNIT_ID
      `;
      // console.log("sql", sql);
      req.db.sqlback(sql, {}, (err, rst) => {
        if (err) return next(err);
        res.json({ code: 0, data: {
          categroy: cateData, 
          version: rst.rows,
        }});
      });
    }
  });
};

/**
 * 还缺少 单元v版本的增加，更新。  与单元一样， 增加和修改 都会要 联动 软件表。
 */

router.get('/:id', getCategoryVersion);
router.get('/use-unit/:id', getUseUnit);
router.get('/tree/:sw_id', getVersionTree);
router.get('/categories-versions/:sw_id', getCateAndVer_tree);

module.exports = router;