// const express = require('express');
const resErr = require('./resErr.js'); // 定义好的 返回错误信息

module.exports = {
  /*
  * connedtion: 数据库链接 接口
  * res:        返回错误信息 接口
  * sql:        sql语句
  * query:      sql中使用的 变量
  * callback:   回调 function
  */
  Select: function(connection, res, sql, query, callback) {
    connection.query(sql, query, function (err, rows) {
      if (err) {
        console.log('查询信息失败', err);
        return res.json(resErr.badSelect);
      }
      callback(rows)
    });
  },
  /*
  * connedtion: 数据库链接 接口
  * res:        返回错误信息 接口
  * sql:        sql语句
  * query:      sql中使用的 变量
  * callback:   回调 function
  */
  Update: function(connection, res, sql, query, callback) {
    connection.query(sql, query, function (err, rows) {
      if (err) {
        console.log('查询更新失败', err);
        return res.json(resErr.badUpdate);
      }
      callback(rows)
    });
  },
  /*
  * connedtion: 数据库链接 接口
  * res:        返回错误信息 接口
  * sql:        sql语句
  * query:      sql中使用的 变量
  * callback:   回调 function
  */
  Insert: function(connection, res, sql, query, callback) {
    connection.query(sql, query, function (err, rows) {
      if (err) {
        console.log('查询插入失败', err);
        return res.json(resErr.badInsert);
      }
      callback(rows)
    });
  }
}
