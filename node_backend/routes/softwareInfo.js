
const express = require('express');

const router = express.Router();

router.get('/unit', (req, res, next) => {
  console.log('req.db', req.db);
  // const sql = 'SELECT login_name, password  FROM user WHERE NAME=:name';
  const sql = 'SELECT * FROM SOFTWARE_UNIT';
  req.db.sqlback(sql, {}, (err, rst) => {
    console.log('rst', rst);
    if (err) return next(err);
    res.json({ code: 0, result: rst.rows });
  });
});
router.get('/software', (req, res, next) => {
  // const sql = 'SELECT login_name, password  FROM user WHERE NAME=:name';
  const sql = 'SELECT * FROM SOFTWARE_BASICINFO';
  req.db.sqlback(sql, {}, (err, rst) => {
    const rows = rst.rows.filter((row) => {
      return row.PID === null;
    });
    const arrs = rows.map((item) => {
      return {
        number: item.SW_CODE,
        mudule: item.MODULE_RELATION,
        softwareName: item.NAME,
        department: item.DEPARTMENT,
        createTime: item.CREATE_TIME,
      };
    });
    if (err) return next(err);
    res.json({ code: 0, result: arrs });
  });
});
router.get('/software_detail/:id', (req, res, next) => {
  console.log('req', req.params.id);
  const id = req.params.id;
  const sql = 'SELECT * FROM SOFTWARE_BASICINFO';
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    const father = rst.rows[id];
    const fatherId = father.ID;
    const temp = rst.map((item) => {
      return item.PID === fatherId;
    });
    const child = temp.map((item) => {
      return {
        version: item.SW_VERSION,
        mudule: item.DEPARTMENT,
        MD5: item.MD5,
      };
    });
    const softwareObj = {
      father,
      child,
    };
    res.json({ code: 0, result: softwareObj });
  });
});
module.exports = router;

