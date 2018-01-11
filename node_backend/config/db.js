
const oracledb = require('oracledb');
const async = require('async');
const dbConfig = require('./dbconfig.js');

oracledb.fetchAsString = [oracledb.CLOB];

// db 查询的补充参数
const autoConfig = {
  outFormat: oracledb.OBJECT, // 输出 设定为 object 输出
  autoCommit: true, // 自动备注
  // resultSet: true, // 查出所有结果
  maxRows: 99999,
};


module.exports = () => {
  return new Promise((resolve, reject) => {
    oracledb.createPool(
      {
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString,
        // Default values shown below
        // externalAuth: false, // whether connections should be established using External Authentication
        poolMax: 50, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
        poolMin: 10, // start with no connections; let the pool shrink completely
        poolIncrement: 1, // only grow the pool by one connection at a time
        // poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
        // poolPingInterval: 60, // check aliveness of connection if in the pool for 60 seconds
        // queueRequests: true, // let Node.js queue new getConnection() requests if all pool connections are in use
        // queueTimeout: 60000, // terminate getConnection() calls in the queue longer than 60000 milliseconds
        // poolAlias: 'myalias' // could set an alias to allow access to the pool via a name
        // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
      },
      function(err, pool) {
        if (err) {
          console.error("createPool() error: " + err.message);
          return;
        }
        // console.log('====== pool =======', pool);
        const doconnect = (cb) => {
          pool.getConnection((err, conn) => {
            cb(err, conn);
          })
        };

        const sqlback = (sql, options, resultBack) => {
          async.waterfall(
            [
              doconnect,
              (conn, cb) => {
                // console.log('sql', sql);
                // console.log('options', options);
                const connback = (err, result) => {
                  if (err) {
                    return cb(err, { result, conn });
                  }
                  return cb(null, { result, conn });
                };
                conn.execute(sql, options, autoConfig, connback);
              },
            ],
            (err, obj) => {
              // console.log('obj', obj);
              let error = null;
              if (err) {
                error = new Error(err);
              }
              resultBack(error, obj.result)
              obj.conn.close()
            }
          );
        }

        const funcback = (funcIn, resultBack) => {
          oracledb.fetchAsString = [oracledb.CLOB];
          async.waterfall(
            [
              doconnect,
              funcIn,
            ],
            (err, obj) => {
              // if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
              // console.log('obj', obj);
              let error;
              if (err) error = new Error(err);

              if (obj && obj.result) {
                resultBack(error, obj.result);
              } else resultBack(error, {});
              // 释放链接
              obj.conn.close();
            });
        };
        resolve({
          pool,
          sqlback,
          funcback,
        });
      }
    );
  });
};
