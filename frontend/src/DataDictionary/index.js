/**
 * 数据字典
 *
 * 根据功能来区分
 *
 * 大概分为：即时消息、软件信息
 */


export const dictionaryMessage = {
  // 即时消息状态 (MESSAGE.STATUS)
  status: {
    1: '未读',
    0: '已读',
  },
};


export const dictionarySoftware = {
  // 软件状态
  status: {
    0: '激活',
    1: '未激活',
  },

  // 软件类型
  type: {
    // 软件类型，1.常规应用软件，2.导航软件3.目标指示软件
    1: '常规应用软件',
    2: '导航软件',
    3: '目标指示软件',
  },

  // 操作系统
  operation_system: {
    1: 'Arch',
    2: 'Ubuntu',
    3: 'CentOS',
    4: 'Windows 10',
  },

  // 软件编码类型
  language: {
    1: 'C/C++',
    2: 'C#',
    3: 'Java',
    4: 'PHP',
  },

  // 软件规模
  magnitude: {
    1: '0-10 klog',
    2: '10-50 klog',
    3: '50-100 klog',
    4: '100 klog',
  },

  // 重要等级
  important_level: {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
  },
};


// 入库
export const dictionaryProcessInput = {

  // 流程状态
  status: {
    0: '草稿',
    1: '正在处理',
    2: '已驳回',
    3: '已撤销',
    4: '已完成(审批成功)',
  },
};


export const dictionaryOrganization = {
  // 单位组织类型 1主管部门 2日常管理部门 3使用部门 4代表室 5论证部门 6管理员
  departmentType: {
    1: '主管部门',
    2: '日常管理部门',
    3: '主管部门',
    4: '代表室',
    5: '论证部门',
    6: '管理员',
  },
};
