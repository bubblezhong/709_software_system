const express = require('express');

const router = express.Router();

/* GET users listing. */
router.post('/', (req, res, next) => {
  console.log('req.db', req.db);
  console.log(req.body.name);
  // const sql = 'SELECT login_name, password  FROM user WHERE NAME=:name';
  const sql = 'SELECT LOGIN_NAME, PASSWORD FROM B_USER WHERE LOGIN_NAME=:name';
  req.db.sqlback(sql, { name: req.body.name }, (err, rst) => {
    console.log('rst', rst);
    if (err) return next(err);
    if (req.body.password === rst.rows[0].PASSWORD) {
      res.json({ code: 0, result: rst.rows[0] });
    }
  });
});

module.exports = router;
