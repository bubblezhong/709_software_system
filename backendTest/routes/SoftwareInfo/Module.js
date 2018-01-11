const express = require('express');

const router = express.Router();

router.get('/SoftwareInfo/Tree/Module', (req, res) => {
  const data = [
    {
      id: 1,
      name: '单元一',
      status: 1,
      parent_id: 0,
    }, {
      id: 2,
      name: '单元二',
      status: 0,
      parent_id: 0,
    }, {
      id: 3,
      name: '单元三',
      status: 1,
      parent_id: 2,
    }, {
      id: 4,
      name: '单元四',
      status: 1,
      parent_id: 2,
    }, {
      id: 5,
      name: '单元五',
      status: 1,
      parent_id: 1,
    }, {
      id: 6,
      name: '不知道单元几',
      status: 1,
      parent_id: 5,
    }, {
      id: 7,
      name: '单元7',
      status: 1,
      parent_id: 0,
    }, {
      id: 8,
      name: '新的',
      status: 1,
      parent_id: 2,
    }, {
      id: 9,
      name: '又一条新的',
      status: 0,
      parent_id: 1,
    }, {
      id: 10,
      name: '单元123123',
      status: 1,
      parent_id: 6,
    },
  ];
  res.json({
    code: 0,
    data,
  });
});

router.get('/SoftwareInfo/Tree/ModuleBySoftwareID/:id', (req, res) => {
  // console.log(req.params.id); 获取ID 根据ID进行查询
  const data = [
    {
      id: 1,
      name: '单元一',
      status: 1,
      parent_id: 0,
    }, {
      id: 2,
      name: '单元二',
      status: 0,
      parent_id: 0,
    }, {
      id: 3,
      name: '单元三',
      status: 1,
      parent_id: 2,
    }, {
      id: 4,
      name: '单元四',
      status: 1,
      parent_id: 2,
    }, {
      id: 5,
      name: '单元五',
      status: 1,
      parent_id: 1,
    }, {
      id: 6,
      name: '不知道单元几',
      status: 1,
      parent_id: 5,
    }, {
      id: 7,
      name: '单元7',
      status: 1,
      parent_id: 0,
    }, {
      id: 8,
      name: '新的',
      status: 1,
      parent_id: 2,
    }, {
      id: 9,
      name: '又一条新的',
      status: 0,
      parent_id: 1,
    }, {
      id: 10,
      name: '单元123123',
      status: 1,
      parent_id: 6,
    },
  ];
  const result = data.slice(0, req.params.id);
  res.json({
    code: 0,
    data: result,
  });
});
module.exports = router;
