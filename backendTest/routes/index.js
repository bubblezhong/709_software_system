const express = require('express');

// 实例化 Router 对象
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.get(/^\/main/, (req, res) => {
  res.render('index');
});

router.get('/cros', (req, res) => {
  res.json({
    code: 0,
    message: '000',
  });
});

module.exports = router;
