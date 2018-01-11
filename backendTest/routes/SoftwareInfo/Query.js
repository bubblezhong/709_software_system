// 软件信息
const express = require('express');

const router = express.Router();


router.get('/SoftwareInfo/Query/List', (req, res) => {
  const list = [
    {
      key: 1,
      name: '探测调度软件',
      type: 1,
      category_name: '对上应用软件',
      description: '软件描述软件描述软件描述软件描述软件描述软件描述软件描述软件描述',
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      usage: '用途说明',
      extra: '附加信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
      version_list: [
        {
          id: 1,
          version_code: 'v0.1',
          version_name: '版本1',
        },
        {
          id: 2,
          version_code: 'v0.2',
          version_name: '版本2',
        },
        {
          id: 2,
          version_code: 'v0.3',
          version_name: '版本3',
        },
      ],
      module_list: [
        {
          id: 1,
          name: '单元1',
        },
        {
          id: 2,
          name: '单元2',
        },
        {
          id: 2,
          name: '单元3',
        },
      ],
      status: 0,
    },
    {
      key: 2,
      name: '信息保障软件',
      type: 1,
      category_name: '对上应用软件',
      description: '软件描述软件描述软件描述软件描述软件描述软件描述软件描述软件描述',
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      usage: '用途说明',
      extra: '附加信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
      version_list: [
        {
          id: 1,
          version_code: 'v0.1',
          version_name: '版本1',
        },
        {
          id: 2,
          version_code: 'v0.2',
          version_name: '版本2',
        },
        {
          id: 2,
          version_code: 'v0.3',
          version_name: '版本3',
        },
      ],
      module_list: [
        {
          id: 1,
          name: '单元1',
        },
        {
          id: 2,
          name: '单元2',
        },
        {
          id: 2,
          name: '单元3',
        },
      ],
      status: 0,
    },
    {
      key: 3,
      name: '远程目标判断软件',
      type: 1,
      category_name: '对上应用软件',
      description: '软件描述软件描述软件描述软件描述软件描述软件描述软件描述软件描述',
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      usage: '用途说明',
      extra: '附加信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
      version_list: [
        {
          id: 1,
          version_code: 'v0.1',
          version_name: '版本1',
        },
        {
          id: 2,
          version_code: 'v0.2',
          version_name: '版本2',
        },
        {
          id: 2,
          version_code: 'v0.3',
          version_name: '版本3',
        },
      ],
      module_list: [
        {
          id: 1,
          name: '单元1',
        },
        {
          id: 2,
          name: '单元2',
        },
        {
          id: 2,
          name: '单元3',
        },
      ],
      status: 0,
    },
  ];
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


router.get('/SoftwareInfo/Query/ListData', (req, res) => {
  const list = [
    {
      key: 1,
      name: '探测调度软件',
      type: 1,
      category_name: '对上应用软件',
      description: '软件描述软件描述软件描述软件描述软件描述软件描述软件描述软件描述',
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      usage: '用途说明',
      extra: '附加信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
      status: 0,
    },
    {
      key: 2,
      name: '信息保障软件',
      type: 1,
      category_name: '对上应用软件',
      description: '软件描述软件描述软件描述软件描述软件描述软件描述软件描述软件描述',
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      usage: '用途说明',
      extra: '附加信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
      status: 0,
    },
    {
      key: 3,
      name: '远程目标判断软件',
      type: 1,
      category_name: '对上应用软件',
      description: '软件描述软件描述软件描述软件描述软件描述软件描述软件描述软件描述',
      remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
      usage: '用途说明',
      extra: '附加信息',
      appendix: '附加信息附加信息附加信息附加信息附加信息附加信息附加信息',
      status: 0,
    },
  ];
  res.json({
    code: 0,
    data: list,
  });
});

// 根据软件基础信息查询软件版本
router.get('/SoftwareInfo/Extends/:id', (req, res) => {
  const id = req.params.id;
  console.log('id: ', id);
  const list = [
    {
      key: 1,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.1',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
    },
    {
      key: 2,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.2',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
    },
    {
      key: 3,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.3',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
    },
    {
      key: 4,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.4',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
    },
    {
      key: 5,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.5',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
    },
  ];
  return res.json({
    code: 0,
    data: {
      list,
    },
  });
});


router.get('/SoftwareInfo/Version/list', (req, res) => {
  const list = [
    {
      key: 1,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.1',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      module_version_list: [{
        id: 1,
        version_name: '模块1',
        version_code: 'v1.0',
      }, {
        id: 2,
        version_name: '模块2',
        version_code: 'v1.2',
      }, {
        id: 3,
        version_name: '模块3',
        version_code: 'v1.3',
      }],
      useage_department: [{
        id: 1,
        department_name: '部门1',
      }, {
        id: 2,
        department_name: '部门2',
      }],
      status: 0,
    },
    {
      key: 2,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.2',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
      module_version_list: [{
        id: 1,
        version_name: '模块1',
        version_code: 'v1.0',
      }, {
        id: 2,
        version_name: '模块2',
        version_code: 'v1.2',
      }, {
        id: 3,
        version_name: '模块3',
        version_code: 'v1.3',
      }],
      useage_department: [{
        id: 1,
        department_name: '部门1',
      }, {
        id: 2,
        department_name: '部门2',
      }],
    },
    {
      key: 3,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.3',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
      module_version_list: [{
        id: 1,
        version_name: '模块1',
        version_code: 'v1.0',
      }, {
        id: 2,
        version_name: '模块2',
        version_code: 'v1.2',
      }, {
        id: 3,
        version_name: '模块3',
        version_code: 'v1.3',
      }],
      useage_department: [{
        id: 1,
        department_name: '部门1',
      }, {
        id: 2,
        department_name: '部门2',
      }],
    },
    {
      key: 4,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.4',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
      module_version_list: [{
        id: 1,
        version_name: '模块1',
        version_code: 'v1.0',
      }, {
        id: 2,
        version_name: '模块2',
        version_code: 'v1.2',
      }, {
        id: 3,
        version_name: '模块3',
        version_code: 'v1.3',
      }],
      useage_department: [{
        id: 1,
        department_name: '部门1',
      }, {
        id: 2,
        department_name: '部门2',
      }],
    },
    {
      key: 5,
      software_info_basic_id: 1,
      version_name: '远程目标判断软件',
      version_code: 'V3.0.0.5',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
      module_version_list: [{
        id: 1,
        version_name: '模块1',
        version_code: 'v1.0',
      }, {
        id: 2,
        version_name: '模块2',
        version_code: 'v1.2',
      }, {
        id: 3,
        version_name: '模块3',
        version_code: 'v1.3',
      }],
      useage_department: [{
        id: 1,
        department_name: '部门1',
      }, {
        id: 2,
        department_name: '部门2',
      }],
    },
    {
      key: 6,
      software_info_basic_id: 1,
      version_name: '探测调度软件',
      version_code: 'V0.0.0.1',
      development_department_id: '研发单位ID',
      development_department_name: '研发单位',
      operation_system: 1,
      software_language: 1,
      software_storage: 1,
      software_info: '软件功能说明、申请备注、应用场景描',
      software_magnitude: 1,
      usage: '软件用途',
      appendix: '附加信息信息',
      status: 0,
      module_version_list: [{
        id: 1,
        version_name: '模块1',
        version_code: 'v1.0',
      }, {
        id: 2,
        version_name: '模块2',
        version_code: 'v1.2',
      }, {
        id: 3,
        version_name: '模块3',
        version_code: 'v1.3',
      }],
      useage_department: [{
        id: 1,
        department_name: '部门1',
      }, {
        id: 2,
        department_name: '部门2',
      }],
    },
  ];
  res.json({
    code: 0,
    data: {
      list,
    },
  });
});


// 根据ID获取软件版本信息
router.get('/SoftwareInfo/Version/Info/:id', (req, res) => {
  const id = req.params.id;
  const info = {
    key: id,
    software_info_basic_id: 1,
    version_name: '探测调度软件',
    version_code: 'V0.0.0.1',
    development_department_id: '研发单位ID',
    development_department_name: '研发单位',
    operation_system: 1,
    software_language: 1,
    software_storage: 1,
    software_info: '软件功能说明、申请备注、应用场景描',
    software_magnitude: 1,
    usage: '软件用途',
    appendix: '附加信息信息',
    status: 0,
    module_version_list: [{
      id: 1,
      version_name: '模块1',
      version_code: 'v1.0',
    }, {
      id: 2,
      version_name: '模块2',
      version_code: 'v1.2',
    }, {
      id: 3,
      version_name: '模块3',
      version_code: 'v1.3',
    }],
    useage_department: [{
      id: 1,
      department_name: '部门1',
    }, {
      id: 2,
      department_name: '部门2',
    }],
  };
  res.json({
    code: 0,
    data: {
      info,
    },
  });
});


module.exports = router;
