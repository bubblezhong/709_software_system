const express = require('express');
const dbInit = require('./config/db');
const settings = require('./config/express');
const url = require('./config/url');
const error = require('./config/error');

const APP = dbInit().then((obj) => {
  const db = {
    sqlback: obj.sqlback,
    funcback: obj.funcback,
    pool: obj.pool,
  };

  const app = express();

  // 数据库连接池
  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  settings(app);
  url(app);
  error(app);

  return app;
});
module.exports = APP;
