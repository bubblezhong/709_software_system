/* eslint-disable */
var express = require('express');
var router = express.Router();
// var isLoggedIn = require("./../loggedinProtect.js").isLoggedIn; // 登陆保护
var resErr = require("./../resErr.js"); // 定义好的 返回错误信息
var CN = require('./../connection.js');
// var rows = require('./dictionary.json');
// 查询 数据字典
router.get('/Dictionary/get_dictionary', (req, res) => {
  const rows = [
    // target_modules 目标模块
    { id: 1, value: 'MainPage', label: '首页', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 2, value: 'WareInfo', label: '软件信息管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 3, value: 'WareInfo2', label: '软件库存登记管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 4, value: 'WareInfo3', label: '软件计划管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 5, value: 'WareInfo4', label: '软件调配管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 6, value: 'WareInfo5', label: '软件日常管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 7, value: 'WareInfo6', label: '技术保障支持', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 8, value: 'WareInfo7', label: '升级完善管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 9, value: 'UserInfo', label: '个人中心', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 10, value: 'SystemSetting', label: '系统配置', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },
    { id: 105, value: 'System', label: '系统', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_modules' },

    //  todo 完成 page 页面 定义
    //
    // target_pages 目标页面
    { id: 10, value: 'Organization', label: '单位管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },
    { id: 11, value: 'Dictionary', label: '数据字典', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },
    { id: 12, value: 'Role', label: '角色设置', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },
    { id: 13, value: 'User', label: '用户管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },
    { id: 14, value: 'Group', label: '用户组设置', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },
    { id: 15, value: 'Authority', label: '权限管理', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },
    { id: 155, value: 'Sidebar', label: '侧边导航栏', target_modules: 'SystemSetting', target_page: 'Dictionary', key: 'target_page' },

    // authority_name 权限名称
    { id: 155, value: 'Home', label: '首页', target_modules: 'SystemSetting', target_page: 'Authority', key: 'authority_name' },
    { id: 155, value: 'Userinfo', label: '个人中心', target_modules: 'SystemSetting', target_page: 'Authority', key: 'authority_name' },
    { id: 155, value: 'SystemSetting', label: '系统配置', target_modules: 'SystemSetting', target_page: 'Authority', key: 'authority_name' },

    // authority_type 权限类型
    { id: 155, value: 1, label: 'module 模块显示', target_modules: 'SystemSetting', target_page: 'Authority', key: 'authority_type' },
    { id: 155, value: 2, label: 'page 页面显示', target_modules: 'SystemSetting', target_page: 'Authority', key: 'authority_type' },
    { id: 155, value: 3, label: 'buttom 功能使用', target_modules: 'SystemSetting', target_page: 'Authority', key: 'authority_type' },

    { id: 20, value: 'green', label: '绿色', target_modules: 'SoftwarePlan', target_page: 'Plan', key: 'color' },
    { id: 21, value: 'red', label: '红色', target_modules: 'SoftwarePlan', target_page: 'Plan', key: 'color' },
    { id: 22, value: 'blue', label: '蓝色', target_modules: 'SoftwarePlan', target_page: 'Plan', key: 'color' },

    { id: 111, value: 0, label: '管理员', target_modules: 'SystemSetting', target_page: 'User', key: 'department_type' },
    { id: 112, value: 0, label: '管理员', target_modules: 'SystemSetting', target_page: 'User', key: 'department_type' },

    // 单位类型
    { id: 118, value: 0, label: '管理员', target_modules: 'SystemSetting', target_page: 'Organization', key: 'department_type' },
    { id: 113, value: 1, label: '主管部门', target_modules: 'SystemSetting', target_page: 'Organization', key: 'department_type' },
    { id: 114, value: 2, label: '日常管理部门', target_modules: 'SystemSetting', target_page: 'Organization', key: 'department_type' },
    { id: 115, value: 3, label: '使用部门', target_modules: 'SystemSetting', target_page: 'Organization', key: 'department_type' },
    { id: 116, value: 4, label: '代表室', target_modules: 'SystemSetting', target_page: 'Organization', key: 'department_type' },
    { id: 117, value: 5, label: '论证部门', target_modules: 'SystemSetting', target_page: 'Organization', key: 'department_type' },

    { id: 119, value: 0, label: '管理员', target_modules: 'UserInfo', target_page: 'Role', key: 'department_type' },
    { id: 120, value: 0, label: '管理员', target_modules: 'SystemSetting', target_page: 'User', key: 'department_type' },

    // 试错数据
    { id: 121, value: 0, label: '管理员', target_modules: 'SystemSetting2', target_page: 'User', key: 'department_type' },

  ];
  // var rows = 'asd'
  res.json({
    code: 0,
    data: rows,
  });
});

module.exports = router;
