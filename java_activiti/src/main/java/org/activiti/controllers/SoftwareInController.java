package org.activiti.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.HistoryService;
import org.activiti.engine.IdentityService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.activiti.result.RestResultData;
import org.activiti.utils.ActivitiOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SoftwareInController {
	@Autowired
	private RuntimeService runtimeService;
	@Autowired
	private RepositoryService repositoryService;
	@Autowired
	private HistoryService historyService;
	@Autowired
	private IdentityService identityService;
	@Autowired
	private TaskService taskService;
	@Autowired
	private ActivitiOperator activitiOperator;

	// 开始任务
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/software-in/start", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> startProcess(@RequestBody Map<String, String> data) {
		List list = new ArrayList<Map>();
		Map<String, Object> vars = new HashMap<String, Object>();
		// 申请人
		vars.put("applicant", data.get("applicant"));
		vars.put("currentName", data.get("applicant")); // 保存当前该由那个人处理
		// 获取流程，开启实例
		identityService.setAuthenticatedUserId(data.get("applicant"));
		ProcessInstance pi = runtimeService.startProcessInstanceByKey("SoftwareIn", vars);

		Task task = taskService.createTaskQuery().taskAssignee(data.get("applicant")).processInstanceId(pi.getId())
				.singleResult();
		String taskName = (String) task.getName();
		String taskId = (String) task.getId();

		// 设置任务变量
		Map<String, String> mapValue = new HashMap<String, String>();
		mapValue.put("oddNum", data.get("oddNum"));
		mapValue.put("applicant", data.get("applicant"));
		mapValue.put("applicantName", data.get("applicantName"));
		mapValue.put("taskSource", data.get("taskSource"));
		mapValue.put("categoryId", data.get("categoryId"));
		mapValue.put("version", data.get("version"));
		mapValue.put("MD5", data.get("MD5"));
		mapValue.put("description", data.get("description"));
		mapValue.put("codeSize", data.get("codeSize"));
		mapValue.put("softwareGrade", data.get("softwareGrade"));
		mapValue.put("system", data.get("system"));
		mapValue.put("softwareKit", data.get("softwareKit"));
		mapValue.put("installPos", data.get("installPos"));
		mapValue.put("stroageStyle", data.get("stroageStyle"));
		mapValue.put("adjunct", data.get("adjunct"));
		mapValue.put("reviewer", data.get("reviewer"));
		mapValue.put("reviewerName", data.get("reviewerName"));
		mapValue.put("remark", data.get("remark"));
		mapValue.put("ACT_TASK_ID", taskId);
		mapValue.put("ACT_TASK_NAME", taskName);
		mapValue.put("date", (new Date()).toString()); // 申请时间
		Map<String, Object> setValue = new HashMap<String, Object>();
		setValue.put("applicantInfo", mapValue); // 申请人信息
		taskService.setVariables(taskId, setValue);

		// 直接完成当前审核任务，推向审核步骤
		vars = new HashMap<String, Object>();
		// 审核人
		vars.put("reviewer", data.get("reviewer"));
		vars.put("currentName", data.get("reviewer"));
		vars.put("currentTaskName", taskName);
		taskService.complete(taskId, vars);

		// 返回信息
		// task =
		// taskService.createTaskQuery().taskAssignee(data.get("reviewer")).processInstanceId(pi.getId())
		// .singleResult();
		Map<String, Object> rstMap = new HashMap<String, Object>();
		rstMap.put("processId", pi.getId());
		// rstMap.put("taskId", task.getId());
		// rstMap.put("taskName", task.getName());
		Map<String, Object> history = activitiOperator.getProcessValues(pi.getId());
		if (history != null) {
			rstMap.put("historyInfo", history);
		}
		list.add(rstMap);
		RestResultData rst = new RestResultData(0, "", list);

		System.out.println("------------------------------------------------");
		System.out.println("运行流程: " + pi.getId());
		System.out.println("------------------------------------------------");
		return rst;
	}

	// 开始任务
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/software-in/run", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> runProcess(@RequestBody Map<String, String> data) {
		List list = new ArrayList<Map>();
		Map<String, Object> vars = new HashMap<String, Object>();
		// 申请人
		vars.put("applicant", data.get("applicant"));
		vars.put("currentName", data.get("applicant")); // 保存当前该由那个人处理
		// 获取流程，开启实例
		identityService.setAuthenticatedUserId(data.get("applicant"));
		ProcessInstance pi = runtimeService.startProcessInstanceByKey("SoftwareIn", vars);

		Task task = taskService.createTaskQuery().taskAssignee(data.get("applicant")).processInstanceId(pi.getId())
				.singleResult();
		String taskName = (String) task.getName();
		String taskId = (String) task.getId();

		// 设置任务变量
		Map<String, String> mapValue = new HashMap<String, String>();
		mapValue.put("ACT_TASK_ID", taskId);
		mapValue.put("ACT_TASK_NAME", taskName);
		mapValue.put("applicant", data.get("applicant"));
		mapValue.put("applicantName", data.get("applicantName"));
		mapValue.put("reviewer", data.get("reviewer"));
		mapValue.put("reviewerName", data.get("reviewerName"));
		Map<String, Object> setValue = new HashMap<String, Object>();
		setValue.put("applicantInfo", mapValue); // 申请人信息
		taskService.setVariables(taskId, setValue);

		// 直接完成当前审核任务，推向审核步骤
		vars = new HashMap<String, Object>();
		// 审核人
		vars.put("reviewer", data.get("reviewer"));
		vars.put("currentName", data.get("reviewer"));
		vars.put("currentTaskName", taskName);
		taskService.complete(taskId, vars);
		// 返回信息
		Map<String, Object> rstMap = new HashMap<String, Object>();
		rstMap.put("processId", pi.getId());
		Map<String, Object> history = activitiOperator.getProcessValues(pi.getId());
		if (history != null) {
			rstMap.put("historyInfo", history);
		}
		list.add(rstMap);
		RestResultData rst = new RestResultData(0, "", list);

		System.out.println("------------------------------------------------");
		System.out.println("运行流程: " + pi.getId());
		System.out.println("------------------------------------------------");
		return rst;
	}

	// 完成流程
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/software-in/complete-task", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> finshTask(@RequestBody Map<String, String> data) {
		/**
		 * 完成任务几个关键字段： currentName： 当前执行任务人 processInstanceId： 流程id status：
		 * 状态，决定任务走哪一步（有分支的情况下） nextName： 被分派下一个任务的人 nextTaskName： 准备执行下一任务的名称：
		 * applicant， reviewer，registrant... currentTaskName： 当前任务名称（流程图上被指定的分派人变量）
		 * 其他所有字段都会被存入当前任务信息中
		 */
		List list = new ArrayList<Map>();
		RestResultData rst = null;
		String currentName = data.get("currentName");
		String processInstanceId = data.get("processInstanceId");
		String taskId = "";
		// 根据名称和流程ID查询出当前任务id
		Map<String, String> taskInfo = activitiOperator.getTaskInfo(processInstanceId, currentName);
		if (taskInfo == null) {
			rst = new RestResultData(404, "没有该用户和流程实例对应的任务！", null);
		} else {
			taskId = taskInfo.get("taskId");
			System.out.println("------------------------------------------------");
			System.out.println("准备完成任务: " + taskId);
			System.out.println("------------------------------------------------");
			// 完成流程，存入数据
			Map<String, Object> setValues = new HashMap<String, Object>();
			// 处理数据，让流程图知道推进方向
			String status = data.get("status"); // 通过， 不通过， 分配
			setValues.put("status", status);
			setValues.put("currentName", data.get("nextName")); // 记录作用
			setValues.put(data.get("currentTaskName"), data.get("currentName")); // 比如 reviewer ： 1 分派任务
			setValues.put(data.get("nextTaskName"), data.get("nextName")); // 比如 reviewer ： 1 分派任务
			setValues.put("currentTaskName", taskInfo.get("taskName")); // 比如 reviewer ： 1 分派任务
			// 遍历data里面传过来的所有值
			Map<String, String> nextInfo = new HashMap<String, String>();
			for (Map.Entry<String, String> entry : data.entrySet()) {
				nextInfo.put(entry.getKey(), entry.getValue());
			}
			setValues.put(data.get("currentTaskName") + "Info", nextInfo);
			// 根据任务id， 完成任务。
			taskService.complete(taskId, setValues);
			System.out.println("------------------------------------------------");
			System.out.println("完成任务: " + taskId);
			System.out.println("------------------------------------------------");
			list.add(setValues);
			rst = new RestResultData(0, "", list);
		}
		return rst;
	}

	// 返回所有由该人，发起的流程
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/software-in/my-tasks", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getMyTasks(@RequestBody Map<String, String> data) {
		List rstList = new ArrayList<>();
		List<HistoricProcessInstance> historyList = activitiOperator.getStartUserProcesses(data.get("name"),
				data.get("status"), "SoftwareIn");
		for (HistoricProcessInstance hpi : historyList) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("processDefinitionId", hpi.getProcessDefinitionId());
			map.put("processInstanceId", hpi.getId());
			map.put("processStatus", activitiOperator.qureyProcessInstance(hpi.getId()));
			Map<String, Object> history = activitiOperator.getProcessValues(hpi.getId());
			map.put("applicantInfo", history.get("applicantInfo"));
			rstList.add(map);
		}
		RestResultData rst = new RestResultData(0, "", rstList);
		return rst;
	}

	// 更改用户的分配人
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/software-in/set-assignee", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> setAssignee(@RequestBody Map<String, String> data) {
		String taskId = data.get("taskId");
		String newName = data.get("newName");
		String currentTask = data.get("currentTask");
		activitiOperator.setAssignee(taskId, newName);
		// 更新历史记录
		taskService.setVariable(taskId, "currentName", newName);
		taskService.setVariable(taskId, currentTask, newName);
		RestResultData<?> rst = new RestResultData<>(0, "", null);
		return rst;
	}

}
