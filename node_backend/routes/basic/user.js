const express = require('express');
const passport = require('passport');
const router = express.Router();

// 获取用户列表
const getUsers = (req, res, next) => {
  const sql = `SELECT 
    t1.ID, 
    t1.NAME, 
    t1.ORGANIZATION_ID, 
    t1.NUM, 
    t1.TYPE, 
    t2.SU_TYPE, 
    t2.SU_NAME, 
    t2.SU_CODE, 
    t2.SU_DESC, 
    t2.MODEL, 
    t2.PID
  FROM B_USER t1, B_UNIT t2 
  WHERE 
   t1.STATUS=0 
   AND t1.ORGANIZATION_ID=t2.ID(+)`;
  req.db.sqlback(sql, {}, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows });
  });
};

// 获取用户详情
const getUser = (req, res, next) => {
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
   AND t1.ID=:ID
   `;
  req.db.sqlback(sql, { ID: req.params.id }, (err, rst) => {
    if (err) return next(err);
    res.json({ code: 0, data: rst.rows[0] });
  });
};

// 新增用户 
const addUser = (req, res, next) => {
  const body = req.body;
  const value = {
    ORGANIZATION_ID: body.ORGANIZATION_ID, 
    ROLE_ID: body.ROLE_ID, 
    AVATAR: body.AVATAR,
    REAL_NAME: body.REAL_NAME,
    TELEPHONE: body.TELEPHONE,
    MOBILE: body.MOBILE,
    GENDER: body.GENDER,
    EMAIL: body.EMAIL,
    ADDRESS: body.ADDRESS,
    BIRTHDAY: body.BIRTHDAY,
    QQ: body.QQ,
    WECHAT: body.WECHAT,
    REMARK: body.REMARK,
    USER_NAME: body.USER_NAME,
    PASSWORD: body.PASSWORD,
    LOGIN_NAME: body.LOGIN_NAME,
    CREATE_USER_ID: body.CREATE_USER_ID,
    CREATE_DATE: new Date(),
    STATUS: 0,
    NAME: body.NAME,
    NUM: body.NUM,
    TYPE: body.TYPE,
  };
  const sql = ` INSERT INTO B_USER (
    ORGANIZATION_ID, ROLE_ID, AVATAR, REAL_NAME, 
    TELEPHONE, MOBILE, GENDER, EMAIL, ADDRESS, BIRTHDAY, 
    QQ, WECHAT, REMARK, USER_NAME, PASSWORD, LOGIN_NAME, CREATE_USER_ID, 
    CREATE_DATE, STATUS, NAME, NUM, TYPE
  ) VALUES (
    :ORGANIZATION_ID, :ROLE_ID, :AVATAR, :REAL_NAME, 
    :TELEPHONE, :MOBILE, :GENDER, :EMAIL, :ADDRESS, :BIRTHDAY, 
    :QQ, :WECHAT, :REMARK, :USER_NAME, :PASSWORD, :LOGIN_NAME, :CREATE_USER_ID, 
    :CREATE_DATE, :STATUS, :NAME, :NUM, :TYPE
  )
  `;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
};

// 更新用户

const updateUser = (req, res, next) => {
  const body = req.body;
  const value = {
    ID: req.params.id,
    ORGANIZATION_ID: body.ORGANIZATION_ID, 
    ROLE_ID: body.ROLE_ID, 
    AVATAR: body.AVATAR,
    REAL_NAME: body.REAL_NAME,
    TELEPHONE: body.TELEPHONE,
    MOBILE: body.MOBILE,
    GENDER: body.GENDER,
    EMAIL: body.EMAIL,
    ADDRESS: body.ADDRESS,
    BIRTHDAY: body.BIRTHDAY,
    QQ: body.QQ,
    WECHAT: body.WECHAT,
    REMARK: body.REMARK,
    USER_NAME: body.USER_NAME,
    PASSWORD: body.PASSWORD,
    LOGIN_NAME: body.LOGIN_NAME,
    UPDATE_USER: body.UPDATE_USER,
    UPDATE_DATE: new Date(),
    STATUS: 0,
    NAME: body.NAME,
    NUM: body.NUM,
    TYPE: body.TYPE,
  };
  const sql = `UPDATE B_USER SET
    ORGANIZATION_ID=:ORGANIZATION_ID, 
    ROLE_ID=:ROLE_ID, 
    AVATAR=:AVATAR, 
    REAL_NAME=:REAL_NAME, 
    TELEPHONE=:TELEPHONE, 
    MOBILE=:MOBILE, 
    GENDER=:GENDER, 
    EMAIL=:EMAIL, 
    ADDRESS=:ADDRESS, 
    BIRTHDAY=:BIRTHDAY, 
    QQ=:QQ, 
    WECHAT=:WECHAT, 
    REMARK=:REMARK, 
    USER_NAME=:USER_NAME, 
    PASSWORD=:PASSWORD, 
    LOGIN_NAME=:LOGIN_NAME, 
    UPDATE_USER=:UPDATE_USER, 
    UPDATE_DATE=:UPDATE_DATE, 
    STATUS=:STATUS, 
    NAME=:NAME, 
    NUM=:NUM, 
    TYPE=:TYPE 
  WHERE ID=:ID
  `;
  req.db.sqlback(sql, value, (err) => {
    if (err) return next(err);
    res.json({ code: 0 });
  });
};

// 登录
const login = (req, res, next) => {
  const body = req.body;
  const value = {
    userName: body.userName,
    password: body.password,
  };
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
  req.db.sqlback(sql, value, (err, rst) => {
    if (err) return next(err);
    if (rst.rows.length > 0) {
      res.json({code: 0, data: rst.rows[0] });
    } else {
      res.json({code: 1});
    }
  });
};

const login_passport = (req, res, next) => {
  // console.log(req.body);
  passport.authenticate('local-login', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.json(info);

    // console.log('user', user);
    // console.log('req.logIn', req.logIn);
    req.logIn(user, null, (err2) => {
      if (err2) { return next(err); }
      return res.json({
        code: 0,
      });
    });
  })(req, res, next);
};

// 根据cookie获取用户信息
const getInfo = (req, res, next) => {
  if (req.user) {
    res.json({ code: 0, data: req.user});
  } else {
    res.json({ code: 1, "msg": '用户未登入!'});
  }
};

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.post('/login', login_passport);
router.get('/self', getInfo);

module.exports = router;
