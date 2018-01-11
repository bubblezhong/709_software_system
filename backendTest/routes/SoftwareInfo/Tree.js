const express = require('express');

const router = express.Router();

router.get('/SoftwareInfo/Tree/List', (req, res) => {
  const data = [
    {
      id: 1,
      name: '谱系一',
      status: 1,
      parent_id: 0,
    }, {
      id: 2,
      name: '谱系二',
      status: 0,
      parent_id: 0,
    }, {
      id: 3,
      name: '谱系三',
      status: 1,
      parent_id: 2,
    }, {
      id: 4,
      name: '谱系四',
      status: 1,
      parent_id: 2,
    }, {
      id: 5,
      name: '谱系五',
      status: 1,
      parent_id: 1,
    }, {
      id: 6,
      name: '不知道谱系几',
      status: 1,
      parent_id: 5,
    }, {
      id: 7,
      name: '谱系7',
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
      name: '谱系123123',
      status: 1,
      parent_id: 6,
    },
  ];
  res.json({
    code: 0,
    data,
  });
});


module.exports = router;
