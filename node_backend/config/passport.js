var LocalStrategy = require('passport-local').Strategy;  // 在res中存储用户信息
var passport = require('passport');

module.exports = function (req, passport) {
  // 序列化 used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.ID);
  });
  // 反序列化 used to deserialize the user
  passport.deserializeUser((id, done) => {
    // done(err, { id, name: 'test' })
    const sql = `SELECT 
      t1.*, 
      t2.SU_TYPE, 
      t2.SU_NAME, 
      t2.SU_CODE, 
      t2.SU_DESC,
      t2.MANAGER, 
      (SELECT t.NAME FROM B_USER t WHERE t.ID=t2.MANAGER) AS MANAGER_NAME, 
      t2.MODEL, 
      t2.PID
    FROM B_USER t1, B_UNIT t2 
    WHERE 
    t1.STATUS=0 
    AND t1.ORGANIZATION_ID=t2.ID(+)
    AND t1.ID=:id`;
    req.db.sqlback(sql, { id }, (err, result) => {
      done(err, result.rows[0]);
    });
  });

  // ++++++++++++++++++++++++++++++++++++++++++
  //+++++用户登录
  //++++++++++++++++++++++++++++++++++++++++++++
  passport.use('local-login', new LocalStrategy(
    {
      // by default, local strategy uses login_name and password, we will override with email
      usernameField: 'userName',
      passwordField: 'password',
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },
    /*
      * req: 返回信息接口
      * done: 完成接口
      *     1: null
      *     2: 存储到session的信息
      *     3: req 返回的值
      */
     (req, userName, password, done) => {
        const sql = `SELECT 
          t1.*, 
          t2.SU_TYPE, 
          t2.SU_NAME, 
          t2.SU_CODE, 
          t2.SU_DESC,
          t2.MANAGER, 
          (SELECT t.NAME FROM B_USER t WHERE t.ID=t2.MANAGER) AS MANAGER_NAME, 
          t2.MODEL, 
          t2.PID
        FROM B_USER t1, B_UNIT t2 
        WHERE 
        t1.STATUS=0 
        AND t1.ORGANIZATION_ID=t2.ID(+)
        AND t1.USER_NAME=:userName
        AND t1.PASSWORD=:password`;
        req.db.sqlback(sql, { userName, password }, (err, rst) => {
          if (err) return done(err);
          // 登录失败
          if (!rst.rows.length) {
            return done(null, false, { code: 1, msg: '用户或密码错误!' });
          }
          // 登录成功
          done(null, rst.rows[0], {code: 0});
        });
      }
  ));
}