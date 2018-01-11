const express = require('express');
const dictionary = require('./../config/config');

const router = express.Router();

// 登录
router.post('/login', (req, res) => {
  console.log('req.body: ', req.body);
  return res.json({
    code: 0,
  });
});


// 获取所有软件谱系
router.get('/software/category/list', (req, res) => {
  // 从 software_category 中查询
  const list = [
    {
      id: 1,
      category_name: '应用软件',
      name: '应用软件',
      parent_id: 0,
      status: 0,
    }, {
      id: 2,
      category_name: 'A类应用软件',
      name: 'A类应用软件',
      parent_id: 1,
      status: 0,
    }, {
      id: 3,
      category_name: 'B类应用软件',
      name: 'B类应用软件',
      parent_id: 1,
      status: 0,
    }, {
      id: 4,
      category_name: 'C类应用软件',
      name: 'C类应用软件',
      parent_id: 1,
      status: 0,
    }, {
      id: 5,
      category_name: '对上应用软件',
      name: '对上应用软件',
      parent_id: 2,
      status: 0,
    }, {
      id: 6,
      category_name: '对下应用软件',
      name: '对下应用软件',
      parent_id: 2,
      status: 0,
    },
  ];
  res.json({
    code: 0,
    data: {
      softwareCategoryList: list,
    },
  });
});


// 获取所有软件单元
router.get('/software/module/list', (req, res) => {
  // 从 software_module 中查询
  const list = [
    {
      id: 1,
      name: '远程目标判断软件',
      parent_id: 0,
      status: 0,
    }, {
      id: 2,
      name: '规划软件',
      parent_id: 0,
      status: 0,
    }, {
      id: 3,
      name: '目标指示模块',
      parent_id: 1,
      status: 0,
    }, {
      id: 4,
      name: '优化模块',
      parent_id: 1,
      status: 0,
    }, {
      id: 5,
      name: '总体模块',
      parent_id: 1,
      status: 0,
    }, {
      id: 6,
      name: '策略生成',
      parent_id: 5,
      status: 0,
    }, {
      id: 7,
      name: '定位计算',
      parent_id: 5,
      status: 0,
    }, {
      id: 8,
      name: '预处理模块',
      parent_id: 5,
      status: 0,
    },
  ];
  res.json({
    code: 0,
    data: {
      softwareModuleList: list,
    },
  });
});


// // 软件基础信息列表
// // 管理员添加软件页面
// router.get('/software/query/list', (req, res) => {
//   const list = [];
//   for (let i = 1; i < 100; i++) {
//     list.push({
//       id: i,
//       key: i,
//       name: `软件 ${i}`,
//       // 1.常规应用软件，2.导航软件3.目标指示软件
//       type: '常规应用软件',
//       category_id: i,
//       category_name: `谱系 ${i}`,
//       modules_id_list: '1, 2, 3',
//       modules_name_list: `单元${i}, 单元1, 单元2`,
//       remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
//       usage: '用途说明用途说明用途说明用途说明用途说明用途说明用途说明用途说明用途说明',
//       appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
//       status: 0,
//     });
//   }
//   res.json({
//     code: 0,
//     data: {
//       list,
//     },
//   });
// });


// 使用情况登记列表
router.get('/sofatware_daily/registration/list', (req, res) => {
  const list = [];
  for (let i = 1; i < 100; i++) {
    list.push({
      id: i,
      key: i,
      name: `软件 ${i}`,
      start_time: new Date(), // 开机时间
      halt_time: new Date(), // 关机时间
      fault_time: new Date(), // 故障发生时间
      usage: '软件使用情况软件使用情况软件使用情况软件使用情况', // 软件使用情况
      fault_description: '故障描述（如有故障）', // 故障描述（如有故障）
      is_fault_resolved: false, // 故障是否解决
      fault_level: 1, // 故障等级：1.易用性；2.一般；3.严重；4.致命
      fault_solution: '故障解决方法，描述或URL', // 故障解决方法，描述或URL
      report_status: 1, // 记录状态：1：草稿；2：未接收；3：已接收；4：待解决；5：已解决；
      modules_name_list: `单元${i}, 单元1, 单元2`,
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
    });
  }
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


// 使用情况汇总列表
router.get('/sofatware_daily/collect/list', (req, res) => {
  const list = [];
  for (let i = 1; i < 100; i++) {
    list.push({
      id: i, // 汇总 ID
      key: i,
      title: `这是汇总标题 ${i}`,
      description: `汇总描述 ${i} 汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述`,
      report_id: `${i}001`, // 登记 ID
      // 下面的信息来自于登记表
      name: `软件 ${i}`, // 软件名称
      start_time: new Date(), // 开机时间
      halt_time: new Date(), // 关机时间
      fault_time: new Date(), // 故障发生时间
      usage: '软件使用情况软件使用情况软件使用情况软件使用情况', // 软件使用情况
      fault_description: '故障描述（如有故障）', // 故障描述（如有故障）
      is_fault_resolved: false, // 故障是否解决
      fault_level: 1, // 故障等级：1.易用性；2.一般；3.严重；4.致命
      fault_solution: '故障解决方法，描述或URL', // 故障解决方法，描述或URL
      report_status: 1, // 记录状态：1：草稿；2：未接收；3：已接收；4：待解决；5：已解决；
      modules_name_list: `单元${i}, 单元1, 单元2`,
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
    });
  }
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


// 使用情况汇总列表
router.get('/sofatware_daily/collect/list/:id', (req, res) => {
  const list = [];
  for (let i = 1; i < 5; i++) {
    list.push({
      id: 10, // 汇总 ID
      key: i,
      title: '这是汇总标题 10',
      description: '汇总描述 10 汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述',
      report_id: `${i}001`, // 登记 ID
      // 下面的信息来自于登记表
      name: `软件 ${i}`, // 软件名称
      start_time: new Date(), // 开机时间
      halt_time: new Date(), // 关机时间
      fault_time: new Date(), // 故障发生时间
      usage: '软件使用情况软件使用情况软件使用情况软件使用情况', // 软件使用情况
      fault_description: '故障描述（如有故障）', // 故障描述（如有故障）
      is_fault_resolved: false, // 故障是否解决
      fault_level: 1, // 故障等级：1.易用性；2.一般；3.严重；4.致命
      fault_solution: '故障解决方法，描述或URL', // 故障解决方法，描述或URL
      report_status: 1, // 记录状态：1：草稿；2：未接收；3：已接收；4：待解决；5：已解决；
      modules_name_list: `单元${i}, 单元1, 单元2`,
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
    });
  }
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


router.get('/dictionary', (req, res) => {
  res.json({
    code: 0,
    data: dictionary,
  });
});


module.exports = router;
