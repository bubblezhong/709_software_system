module.exports = {
  // route middleware to make sure
  badConnection: {
    code: 1,
    msg: "数据库连接错误"
  },
  badSelect: {
    code: 2,
    msg: "数据查询失败"
  },
  badInsert: {
    code: 3,
    msg: "数据插入失败"
  },
  badUpdate: {
    code: 4,
    msg: "数据库更新失败"
  },
  badDelete: {
    code: 4,
    msg: "数据库删除失败"
  },
  badEmail: {
    code: 5,
    msg: "邮件发送失败"
  },
  signedEmail: {
    code: 6,
    msg: "该邮箱已注册"
  },
  loginErr: {
    code: 7,
    msg: "登录错误"
  },

}
