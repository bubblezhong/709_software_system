// 软件入库
const express = require('express');

const router = express.Router();


// 出库信息列表
router.get('/InventoryRegistration/Output/list', (req, res) => {
  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      id: i,
      name: `单元名称 ${i}`,
      version_name: `单元版本名称 ${i}`,
      version_code: `单元版本编号 ${i}`,
      apply_user_real_name: `申请人 ${i}`,
      software_category: `谱系 ${i}`,
      development_department: `单位 ${i}`, // 研发单位
      important_level: '机密', // 重要等级
      magnitude: '10-50klog', // 软件规模
      apply_date: new Date(),
      status: 2,
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


// 出库审批列表
router.get('/inventory_registration/output/list', (req, res) => {
  const list = [];
  for (let i = 1; i < 3; i++) {
    const modules = [];
    for (let j = 0; j < 3; j++) {
      modules.push({
        module_name: `单元名称 ${i}`,
        version_name: `版本名称 ${i}`,
        version_code: `版本编号 ${i}`,
        software_type: `嵌装软件类型 ${i}`,
        operation_system: `操作系统 ${i}`,
        software_scale: `软件规模 ${i}`,
        development_organization: `研发单位 ${i}`,
        store_type: `存储类型 ${i}`,
        store_medium: `存储介质 ${i}`,
        version_description: `版本介绍 ${i}`,
        features_description: `功能说明 ${i}`,
        apply_note: `申请备注 ${i}`,
      });
    }
    list.push({
      id: i,
      apply_department: `申请单位名称 ${i}`,
      apply_category: `软件所在谱系 ${i}`,
      software_name: `软件名称 ${i}`,
      apply_status: 0, // 入库状态
      modules,
    });
  }

  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


// 根据ID查询需要入库审批的申请单及处理流程
router.get('/InventoryRegistration/Output/Approve/:id', (req, res) => {
  const id = req.params.id;
  console.log('id: ', id);
  const i = 1;
  const apply = {
    id,
    apply_department: '申请单位名称',
    apply_category: '软件所在谱系',
    software_name: '软件名称',
    apply_status: 0, // 入库状态
    name: `模块名称 ${i}`,
    module_name: `模块名称 ${i}`,
    version_name: `版本名称 ${i}`,
    version_code: `版本编号 ${i}`,
    software_type: `嵌装软件类型 ${i}`,
    operation_system: `操作系统 ${i}`,
    software_status: `软件状态 ${i}`,
    software_scale: `软件规模 ${i}`,
    development_organization: `研发单位 ${i}`,
    store_type: `存储类型 ${i}`,
    store_medium: `存储介质 ${i}`,
    version_description: `版本介绍 ${i}`,
    features_description: `功能说明 ${i}`,
    apply_note: `申请备注 ${i}`,
  };
  res.json({
    code: 0,
    data: {
      apply,
    },
  });
});

module.exports = router;
