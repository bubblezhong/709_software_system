const express = require('express');
const rp = require('request-promise');
const rpcfg = require('../../utils/requestPromiseOption');
const workflowUtils = require('./workflowUtils');
const async = require("async");

const router = express.Router();

// 入库申请
const softwareIn = (req, res, next) => {
  const body = req.body;
  if (body.applicant == null) {
    return res.json({code: 1, msg: "缺少用户ID"});
  } 
  if (body.reviewer == null) {
    return res.json({code: 1, msg: "缺少审批人ID"});
  } 
  const value = {
    oddNum: body.oddNum,
    applicant: body.applicant,
    applicantName: body.applicantName,
    taskSource: body.taskSource,
    categoryId: body.categoryId,
    version: body.version,
    MD5: body.MD5,
    description: body.description,
    softwareGrade: body.softwareGrade,
    system: body.system,
    softwareKit: body.softwareKit,
    installPos: body.installPos,
    stroageStyle: body.stroageStyle,
    adjunct: body.adjunct,
    reviewer: body.reviewer,
    codeSize: body.codeSize,
    reviewerName: body.reviewerName,
    remark: body.remark,
  };
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/start',
    body: value,
  });
  rp(options).then((rst) => {
    // console.log('flow-start-rst', rst);
    if (rst.code === 0) {
      // 处理流程的数据
      res.json({ code: 0, data: rst.data[0] });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  }).catch((err) => {
    return next(err);
  });
};

// 完成审批任务
const completeReview = (req, res, next) => {
  const body = req.body;
  if (body.handleId == null) {
    return res.json({code: 1, msg: "缺少处理人ID"});
  } 
  if (body.registrant == null) {
    return res.json({code: 1, msg: "缺少登记人ID"});
  } 
  const value = {
    reviewerName: body.handleName,
    remark: body.remark,
    reviewFile: body.reviewFile,
    registrantName: body.registrantName,
    // 一下是必须的字段：
    currentName: body.handleId,  // 当前准备执行的用户id
    processInstanceId: body.processInstanceId, // 流程实例
    status: body.status,
    nextName: body.registrant, 
    nextTaskName: 'registrant',
    currentTaskName: 'reviewer',
  };
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/complete-task',
    body: value,
  });
  rp(options).then((rst) => {
    // console.log('flow-start-rst', rst);
    if (rst.code === 0) {
      // 处理流程的数据
      res.json({ code: 0, data: rst.data[0] });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  }).catch((err) => {
    return next(err);
  });
};

// 完成入库登记
const completeRegistrant = (req, res, next) => {
  const body = req.body;
  if (body.handleId == null) {
    return res.json({code: 1, msg: "缺少处理人ID"});
  } 
  if (body.accept == null) {
    return res.json({code: 1, msg: "缺少验收人ID"});
  } 
  const value = {
    registrantName: body.handleName,
    acceptName: body.acceptName,
    remark: body.remark,
    password: body.password,
    saveInfo: body.saveInfo,
    infoRemark: body.infoRemark,
    registrantFile: body.registrantFile,
    // 一下是必须的字段：
    currentName: body.handleId,  // 当前准备执行的用户id
    processInstanceId: body.processInstanceId, // 流程实例
    nextName: body.accept, 
    nextTaskName: 'accept',
    currentTaskName: 'registrant',
  };
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/complete-task',
    body: value,
  });
  rp(options).then((rst) => {
    if (rst.code === 0) {
      // 处理流程的数据
      res.json({ code: 0, data: rst.data[0] });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  }).catch((err) => {
    return next(err);
  });
};

// 完成入库验收
const completeAccept = (req, res, next) => {
  const body = req.body;
  if (body.handleId == null) {
    return res.json({code: 1, msg: "缺少处理人ID"});
  } 
  if (body.processInstanceId == null) {
    return res.json({code: 1, msg: "缺少流程ID"});
  } 
  const value = {
    acceptName: body.handleName,
    remark: body.remark,
    registrantFile: body.registrantFile,
    // 一下是必须的字段：
    currentName: body.handleId,  // 当前准备执行的用户id
    processInstanceId: body.processInstanceId, // 流程实例
    status: body.status,
    nextName: '', 
    nextTaskName: 'finished',
    currentTaskName: 'accept',
  };
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/complete-task',
    body: value,
  });
  rp(options).then((rst) => {
    if (rst.code === 0) {
      // 处理流程的数据
      res.json({ code: 0, data: rst.data[0] });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  }).catch((err) => {
    return next(err);
  });

};

// 更改任务的分配人
const setAssignee = (req, res, next) => {
  const body = req.body;
  const value = {
    taskId: body.taskId,
    newName: body.newName,
    currentTask: body.currentTask,
  };
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/set-assignee',
    body: value,
  });
  rp(options).then((rst) => {
    if (rst.code === 0) {
      // 处理流程的数据
      res.json({ code: 0 });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  }).catch((err) => {
    return next(err);
  });
};

// 根据用户id查询，由该用户发起的所有流程
const getMyTasks = (req, res, next) => {
  const query = req.query;
  if (!query.name) {
    return res.json({code: 0, msg: "查询参数不能为空！"});
  }
  const value = {
    name: query.name,
    status: query.type || "all",  // 默认为空
  };
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/my-tasks',
    body: value,
  });
  rp(options).then((rst) => {
    // console.log('flow-start-rst', rst);
    if (rst.code === 0) {
      // 处理流程的数据
      let resultData = rst.data;
      // res.json({ code: 0, data: rst.data });
      
      return new Promise((resolve, reject) => {
        // 遍历查询数据库，合并数据
        async.map(resultData, (item, callback) => {
          const sql = `SELECT 
            t1.SU_NAME AS CATEGROY_NAME, 
            t1.DEPARTMENT_ID AS DEPARTMENT_ID,
            t2.NAME AS SW_NAME, 
            (select WMSYS.WM_CONCAT(t.NAME)
                  from B_MODULE t
                  start with t.ID=t2.MODULE_ID
            connect by prior t.PID = t.ID) AS MODULE_TREE, 
            t2.ID AS SW_ID, 
            t3.NAME AS MODULE_NAME, 
            t3.ID AS MODULE_ID,
            t4.SU_NAME AS DEV_NAME
          FROM
            B_CATEGORY t1, B_SOFTWARE t2, B_MODULE t3, B_UNIT t4
          WHERE t1.ID=:ID 
          AND t1.SW_ID=t2.ID
          AND t3.ID=t2.MODULE_ID
          AND t4.ID=t1.DEPARTMENT_ID`;
          let itemData = item;
          console.log(item)
          const id = item.applicantInfo.categoryId;
          req.db.sqlback(sql, {ID: id}, (err, rst) => {
            if (err) callback(err);
            // 合并数据
            itemData.applicantInfo = Object.assign({}, itemData.applicantInfo, rst.rows[0]);
            callback(null, itemData);
          });
        },(err, result) => {
          if (err) reject(err);
          // console.log("async", result);
          // 最后数据出口
          resolve(result);
        });
      });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  })
  .then((rst) => {
    res.json({code: 0, data: rst});
  })
  .catch((err) => {
    return next(err);
  });
};

// 查询流程的历史记录
const getHistory = (req, res, next) => {
  const processId = req.params.id;
  if ( !processId ) return res.json({ code: 1, msg: "缺少流程ID"});
  workflowUtils.getHistory(processId)
    .then((rst) => {
      if (rst.code === 0) {
        // 处理数据
        let result = rst.data[0];
        const categoryId = result.applicantInfo.categoryId;
        // console.log("categoryId", categoryId);
        const sql = `SELECT 
          t1.SU_NAME AS CATEGROY_NAME, 
          t2.NAME AS SW_NAME, 
          t2.ID AS SW_ID, 
          t3.NAME AS MODULE_NAME, 
          t3.ID AS MODULE_ID 
        FROM
          B_CATEGORY t1, B_SOFTWARE t2, B_MODULE t3
        WHERE t1.ID=:ID 
        AND t1.SW_ID=t2.ID
        AND t3.ID=t2.MODULE_ID `;
        // 查询数据库，返回promise
        return new Promise((resolve, reject) => {
          req.db.sqlback(sql, {ID: categoryId}, (err, rst) => {
            if (err) return reject(err);
            // 合并数据
            result.applicantInfo = Object.assign({}, result.applicantInfo, rst.rows[0]);
            resolve(result);
          });
        });
      } else {
        return res.json({ code: 1, msg: rst.msg });
      }
    })
    .then((rst) => {
      res.json({ code: 0, data: rst});
    })
    .catch((err) => {
      return next(err);
    });
};

/**
 * 使用流程方式修改  
 * 以下方式 会逐渐代替上面的方法
 */
// 开始流程
const run = (req, res, next) => {
  const body = req.body;
  if (body.applicant == null) {
    return res.json({code: 1, msg: "缺少用户ID"});
  } 
  if (body.reviewer == null) {
    return res.json({code: 1, msg: "缺少审批人ID"});
  } 
  // 先开始流程，然后存入数据库
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/run',
    body: {
      applicant: body.applicant,  // 申请人
      applicantName: body.applicantName, // 申请人名称
      reviewerName: body.reviewerName, // 审批人名称
      reviewer: body.reviewer,  // 审批人
    },
  });
  rp(options).then((rst) => {
    // console.log('flow-start-rst', rst);
    if (rst.code === 0) {
      // 将数据存入 申请表
      let wfRst = rst.data[0];
      const value = {
        SW_ID: body.sw_ID, // 软件ID
        TREE_ID: body.tree_ID, // 谱系号
        ODD_CODE: body.oddNum, // 单号
        TASK_ID: body.taskSource,  // 任务ID
        SW_CATEGORY_ID: body.categoryId, // 单元ID
        VERSION: body.version, // 版本
        MD5: body.MD5, // MD5
        SW_DESCRIPTION: body.description,  // 描述
        SW_GRADE: body.softwareGrade, // 软件等级
        SYSTEM: body.system, // 系统
        SW_GROUPINFO: body.softwareKit, // 配套软件
        INS_LOC: body.installPos,   // 典型安装位置
        STORAGE_LOC: body.storageLoc, // 存储位置
        STORAGE_MODE: body.stroageStyle, // 存储方式
        ADJUNCT: body.adjunct,  // 附件
        CODE_SIZE: body.codeSize, // 代码规模
        EXPLAIN: body.remark,  //  说明
        APPLICANT_UID: body.applicant,  // 申请人
        FLOW_ID: wfRst.processId, // 流程ID
        CREATE_DATE: new Date(), // 创建时间
        STATUS: 0,
      };
      const sql = `INSERT INTO P_STORAGEAPPLY(
        SW_ID, TREE_ID, ODD_CODE, TASK_ID, SW_CATEGORY_ID,
        VERSION, MD5, SW_DESCRIPTION, SW_GRADE, SYSTEM, 
        SW_GROUPINFO, INS_LOC, STORAGE_LOC, STORAGE_MODE,
        ADJUNCT, CODE_SIZE, EXPLAIN, APPLICANT_UID, FLOW_ID,
        CREATE_DATE, STATUS
      ) VALUES (
        :SW_ID, :TREE_ID, :ODD_CODE, :TASK_ID, :SW_CATEGORY_ID,
        :VERSION, :MD5, :SW_DESCRIPTION, :SW_GRADE, :SYSTEM, 
        :SW_GROUPINFO, :INS_LOC, :STORAGE_LOC, :STORAGE_MODE,
        :ADJUNCT, :CODE_SIZE, :EXPLAIN, :APPLICANT_UID, :FLOW_ID,
        :CREATE_DATE, :STATUS
      )`;
      return new Promise((resolve, reject) => {
        req.db.sqlback(sql, value, (err, rst) => {
          if (err) reject(err);
          resolve(rst);
        });
      });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  })
  .then((rst) => {
    res.json({code: 0});
  })
  .catch((err) => {
    return next(err);
  });
};

// 根据用户id查询，由该用户发起的所有流程
const getMyApplyTask = (req, res, next) => {
  const userId = req.params.user_id;
  if (userId == null) {
    return res.json({code: 1, msg: "缺少用户ID"});
  } 
  const options = Object.assign({}, rpcfg.POST, {
    uri: rpcfg.URL + 'software-in/my-tasks',
    body: {name: userId, status: 'all'},
  });
  rp(options).then((rst) => {
    if (rst.code === 0) {review
      let wfRst = rst.data;
      return new Promise((resolve, reject) => {
        async.map(wfRst, (item, callback) => {
          const sql = `SELECT 
            t1.ID,
            t1.ODD_CODE,
            t1.TASK_ID,
            t1.APPLICANT_UID,
            (SELECT NAME FROM B_USER WHERE ID=t1.APPLICANT_UID) AS APPLICANT_NAME,
            t1.CREATE_DATE,
            t1.FLOW_ID,
            t1.VERSION,
            t2.NAME AS SW_NAME,
            t2.SW_CODE,
            t3.NAME AS M_NAME,
            (select WMSYS.WM_CONCAT(t.NAME)
                  from B_MODULE t
                  start with t.ID=t1.TREE_ID
            connect by prior t.PID = t.ID) AS MODULE_TREE,
            t4.SU_NAME AS C_NAME,
            t4.SU_CODE AS C_CODE,
            t5.SU_NAME AS U_NAME
          FROM
          P_STORAGEAPPLY t1, B_SOFTWARE t2, B_MODULE t3,B_CATEGORY t4, B_UNIT t5
          WHERE t1.FLOW_ID=:ID
          AND t2.ID(+)=t1.SW_ID
          AND t1.TREE_ID=t3.ID(+)
          AND t1.SW_CATEGORY_ID=t4.ID(+)
          AND t5.ID(+)=t4.DEPARTMENT_ID`;
          let itemData = item;
          const id = item.processInstanceId;
          // 查询数据库， 流程以数据库为准
          req.db.sqlback(sql, {ID: id}, (err, rst) => {
            if (err) return callback(err);
            // console.log('rst', rst);
            if (rst.rows.length){
              itemData.applicantInfo = Object.assign({}, itemData.applicantInfo, rst.rows[0]);
              callback(null, itemData);
            } else {
              callback(null, null);
            }
          });
        }, (err, result) => {
          if (err) return reject(err);
          resolve(result.filter(item => item));
        }); 
      });
    } else {
      res.json({ code: 1, msg: rst.msg });
    }
  })
  .then((rst) => {
    res.json({ code: 0, data: rst});
  })
  .catch((err) => { 
    return next(err) 
  });
};

// 根据流程ID，获取流程的历史记录
const getHistory_2 = (req, res, next) => {
  const processId = req.params.id;
  if ( !processId ) return res.json({ code: 1, msg: "缺少流程ID"});
  workflowUtils.getHistory(processId)
  .then((rst) => {
    if (rst.code === 0) {
      // 处理数据
      let result = rst.data[0];
      // console.log("categoryId", categoryId);
      const sql = `SELECT 
        t1.ID,
        t1.ODD_CODE,
        t1.TASK_ID,
        t1.APPLICANT_UID,
        t6.NAME AS APPLICANT_NAME,
        t6.ORGANIZATION_ID AS APPLICANT_UNIT_ID,
        (SELECT SU_NAME FROM B_UNIT WHERE ID=t6.ORGANIZATION_ID) AS APPLY_UNIT_NAME,
        t1.CREATE_DATE,
        t1.FLOW_ID,
        t1.VERSION,
        t1.SW_GRADE,
        t1.INS_LOC,
        t1.SYSTEM,
        t1.SW_GROUPINFO,
        t1.CODE_SIZE,
        t1.STORAGE_MODE,
        t1.MD5,
        t1.STORAGE_LOC,
        t1.ADJUNCT,
        t1.SW_DESCRIPTION,
        t1.APPLICANT_UID,
        t1.EXPLAIN,
        t2.NAME AS SW_NAME,
        t2.SW_CODE,
        t3.NAME AS M_NAME,
        (select WMSYS.WM_CONCAT(t.NAME)
              from B_MODULE t
              start with t.ID=t1.TREE_ID
        connect by prior t.PID = t.ID) AS MODULE_TREE,
        t4.SU_NAME AS C_NAME,
        t4.SU_CODE AS C_CODE,
        t5.SU_NAME AS U_NAME
      FROM
      P_STORAGEAPPLY t1, B_SOFTWARE t2, B_MODULE t3,B_CATEGORY t4, B_UNIT t5, B_USER t6
      WHERE t1.FLOW_ID=:ID
      AND t2.ID(+)=t1.SW_ID
      AND t1.TREE_ID=t3.ID(+)
      AND t1.SW_CATEGORY_ID=t4.ID(+)
      AND t5.ID(+)=t4.DEPARTMENT_ID
      AND t6.ID(+)=t1.APPLICANT_UID`;
      // 查询数据库，返回promise
      return new Promise((resolve, reject) => {
        req.db.sqlback(sql, {ID: processId}, (err, rst) => {
          if (err) return reject(err);
          // 合并数据
          result.applicantInfo = Object.assign({}, result.applicantInfo, rst.rows[0]);
          resolve(result);
        });
      });
    } else {
      return res.json({ code: 1, msg: rst.msg });
    }
  })
  .then((rst) => {
    res.json({ code: 0, data: rst});
  })
  .catch((err) => {
    return next(err);
  });
};

router.post("/start", softwareIn);

router.post("/review", completeReview);
router.post("/registrant", completeRegistrant);
router.post("/accept", completeAccept);
router.post("/set-assignee", setAssignee);

router.get("/my-tasks", getMyTasks);
router.get("/history/:id", getHistory);
//+++++++++++++++++++++++++++++++++++++++++
router.post('/run', run);
router.get('/my-apply/:user_id', getMyApplyTask);
router.get('/process-history/:id', getHistory_2);


module.exports = router;
