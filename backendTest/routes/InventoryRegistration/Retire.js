// 软件入库
const express = require('express');

const router = express.Router();


// 退役信息列表
router.get('/InventoryRegistration/Retire/list', (req, res) => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      id: i,
      version_name: `软件版本 ${i}`,
      apply_user_real_name: `退役申请人 ${i}`,
      software_name: `软件名称 ${i}`,
      software_type: `软件类型 ${i}`,
      software_category: `软件谱系 ${i}`,
      emergency_type: 1, // 退役紧急级别 1：一般；2：普通；3：紧急
      apply_department: `退役申请单位 ${i}`,
      apply_date: new Date(), // 退役申请时间
      retire_time: new Date(),
      retire_status: 2, // 1：退役草稿 2：退役待审核 3：审核通过 4：审核不通过 5：退役任务下发 6：完成
      description: '退役说明说明',
      remarks: '备注备注备注', // 备注信息
      key: i, // 每行数据都有一个唯一 key
    });
  }
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


router.get('/InventoryRegistration/Retire/Approve/list', (req, res) => {
  const list = [];
  for (let i = 0; i < 3; i++) {
    list.push({
      id: i,
      version_name: `软件版本 ${i}`,
      apply_department: `退役申请单位 ${i}`,
      apply_user_real_name: `退役申请人 ${i}`,
      software_name: `软件名称 ${i}`,
      software_type: `软件类型 ${i}`,
      software_category: `软件谱系 ${i}`,
      emergency_type: 1, // 退役紧急级别 1：一般；2：普通；3：紧急
      description: '退役说明说明',
      apply_date: new Date(), // 退役申请时间
      retire_time: new Date(),
      retire_status: 2, // 1：退役草稿 2：退役待审核 3：审核通过 4：审核不通过 5：退役任务下发 6：完成
      remarks: '备注备注备注', // 备注信息
      key: i, // 每行数据都有一个唯一 key
    });
  }
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


router.get('/InventoryRegistration/Retire/Apply/Info/:id', (req, res) => {
  const info = {
    id: 1,
    version_name: '软件版本',
    apply_user_real_name: '退役申请人',
    software_name: '软件名称',
    software_type: '软件类型',
    software_category: '软件谱系',
    emergency_type: 1, // 退役紧急级别 1：一般；2：普通；3：紧急
    apply_department: '退役申请单位',
    description: '退役说明说明',
    apply_date: new Date(), // 退役申请时间
    retire_time: new Date(),
    retire_status: 2, // 1：退役草稿 2：退役待审核 3：审核通过 4：审核不通过 5：退役任务下发 6：完成
    remarks: '备注备注备注', // 备注信息
  };
  res.json({
    code: 0,
    data: {
      info,
    },
  });
});


module.exports = router;
