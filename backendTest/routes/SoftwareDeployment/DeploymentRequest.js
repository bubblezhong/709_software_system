// 调配申请 DeploymentRequest
const express = require('express');
const router = express.Router();

const softwareList = require('./software_list.json');
const modulesList = require('./modules_list.json');

// 查询 数据字典
router.get('/DeploymentRequest/get_list', (req, res) => {
  // create_date 申请日期
  // software 申请的软件ID
  // software_name 申请的软件名称
  // module_list 软件模块ID列表
  // states 状态 0:已保存 未上报信息，1:已上报 未处理信息 2：已安排调配计划 3:申请未通过 4: 用户取消的申请
  // create_user 申请人 ID
  // create_user_name 申请人 name
  // request_organization 申请单位ID
  // request_organization_name 申请单位名称
  // request_title  申请标题 或 摘要
  // request_reason 申请理由
  // 附件文档
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      {
        id: i + 1,
        software_id: i + 1,
        software_name: '软件名称',
        module_list: JSON.stringify([1, 2, 3, 4, 5]),
        create_user_id: i + 1,
        create_user_name: `用户${i + 1}`,
        organization_id: i + 1,
        organization_name: `机构${i + 1}`,
        request_title: '任意长度字符串22',
        request_reason: '任意长度字符串',
        states: Math.floor(Math.random() * 4),
        target_plan: Math.floor(Math.random() * 5),
      }
    );
  }
  res.json({
    code: 0,
    data: rows,
  });
});

router.get('/DeploymentRequest/GetOneById/:id', (req, res) => {
  const id = req.params.id;
  const rows = [{
    id: id + 1,
    tree_list: [
      { id: 1, name: '第一级谱系' },
      { id: 2, name: '第二级谱系' },
      { id: 3, name: '第三级谱系' },
      { id: 4, name: '第四级谱系' },
    ],
    tree_id: 5,
    software_id: 1,
    software_name: '软件名称',
    module_list: JSON.stringify([1, 2, 3, 4, 5]),
    create_user_id: id + 1,
    create_user_name: `用户${id + 1}`,
    organization_id: id + 1,
    organization_name: `机构${id + 1}`,
    request_title: '任意长度字符串22',
    request_reason: '任意长度字符串',
    states: Math.floor(Math.random() * 4),
    target_plan: Math.floor(Math.random() * 5),
  }];
  res.json({
    code: 0,
    data: {
      request: rows[0],
      software_list: softwareList,
      module_list: modulesList,
    },
  });
});

router.get('/DeploymentRequest/get_all', (req, res) => {
  // create_date 申请日期
  // states 状态 0:已保存 未上报信息，1:已上报 未处理信息 2：已安排调配计划 3:申请未通过 4: 用户取消的申请
  // create_user 申请人 ID
  // create_user_name 申请人 name
  // request_organization 申请单位ID
  // request_organization_name 申请单位名称
  // request_title  申请标题 或 摘要
  // request_reason 申请理由
  // 附件文档
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      {
        id: i,
        create_user: i,
        create_user_name: `用户${i}`,
        request_organization: i,
        request_organization_name: `单位${i}`,
        request_title: '任意长度字符串22',
        request_reason: '任意长度字符串',
        states: Math.floor(Math.random() * 5),
        target_plan: Math.floor(Math.random() * 5),
      }
    );
  }
  res.json({
    code: 0,
    data: rows,
  });
});

router.post('/DeploymentRequest/edit', (req, res) => {
  console.log('edit Request', req.body);
  res.json({
    code: 0,
  });
});

router.post('/DeploymentRequest/add', (req, res) => {
  console.log('add new Request', req.body);
  res.json({
    code: 0,
  });
});

module.exports = router;
