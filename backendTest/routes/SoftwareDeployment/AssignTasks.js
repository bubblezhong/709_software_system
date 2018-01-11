// 调配申请 DeploymentRequest
const express = require('express');

const router = express.Router();
const testJson = require('./test.json');
const jsonToList = require('./jsonToList');

// 查询 数据字典
router.get('/AssignTasks/List', (req, res) => {
  // 根据用户的数据权限
  // 仅获取 自己生成的 方案
  const rows = [];
  for (let i = 0; i < 10; i++) {
    const user = Math.floor(Math.random() * 5);
    rows.push(
      {
        id: i + 1,
        title: `方案标题${i + 1}`,
        organization_name: `方案创建单位${i}`,
        organization_id: i,
        create_date: new Date(),
        create_user_name: `创建者${user}`,
        create_user_id: user,
        state: Math.floor(Math.random() * 2) + 1,
      }
    );
  }
  res.json({
    code: 0,
    data: rows,
  });
});

router.get('/AssignTasks/TasksByScheme/:id', (req, res) => {
  const { id } = req.params;
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push({
      category: testJson.category,
      group: testJson.group,
      create_date: testJson.create_date,
      create_user: testJson.create_user,
      id: i + 1,
    });
  }

  const result = {
    title: `我是本次编配方案标题${id}`,
    tree_id: id,
    software_id: id,
    software_name: '我是软件名称',
    organization_id: id,
    organization_name: '我是一个单位',
    create_date: new Date(),
    create_user_name: '本人哈哈',
    create_user_id: id,
    items: rows,
    request_list: [
      {
        id: 1,
        request_title: '请求1',
      },
      {
        id: 2,
        request_title: '请求2',
      },
    ],
  };
  const finalList = jsonToList(result);
  res.json({
    code: 0,
    data: finalList,
  });
});

// router.post('/AssignTasks/publish', (req, res) => {
//   console.log('edit Request', req.body);
//   res.json({
//     code: 0,
//   });
// });
//
// router.post('/DeploymentRequest/edit', (req, res) => {
//   console.log('edit Request', req.body);
//   res.json({
//     code: 0,
//   });
// });
//
// router.post('/DeploymentRequest/add', (req, res) => {
//   console.log('add new Request', req.body);
//   res.json({
//     code: 0,
//   });
// });

module.exports = router;
