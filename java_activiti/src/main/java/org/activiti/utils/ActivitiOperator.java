package org.activiti.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.ApplicantRepository;
import org.activiti.engine.HistoryService;
import org.activiti.engine.IdentityService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.activiti.result.RestResultData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Service
@Transactional
@RestController
public class ActivitiOperator {
	@Autowired
	private RuntimeService runtimeService;

	@Autowired
	private ApplicantRepository applicantRepository;

	@Autowired
	private RepositoryService repositoryService;

	@Autowired
	private IdentityService identityService;

	@Autowired
	private HistoryService historyService;

	@Autowired
	private TaskService taskService;

	// 根据个人id查询与自己相关的任务，并返回
	public List<Map> getOwnTask(String name) {
		List<Task> tasks = taskService.createTaskQuery().taskAssignee(name).list();
		List<Map> list = new ArrayList<Map>();
		for (Task task : tasks) {
			Map<String, String> map = new HashMap<String, String>();
			map.put("processId", task.getProcessInstanceId());
			map.put("taskId", task.getId());
			map.put("taskName", task.getName());
			list.add(map);
		}
		return list;
	}

	// 根据流程ID，姓名查询当前任务
	public Map<String, String> getTaskInfo(String prcoessId, String name) {
		Task task = taskService.createTaskQuery().processInstanceId(prcoessId).taskAssignee(name).singleResult();
		if (task == null) {
			return null;
		}
		Map<String, String> map = new HashMap<String, String>();
		map.put("taskId", task.getId());
		map.put("taskName", task.getName());
		return map;
	}

	// 根据流程定义key，获取所有的流程实例
	public List<Map<String, Object>> getProcessInstance(String key) {
		List<HistoricProcessInstance> list = historyService.createHistoricProcessInstanceQuery()
				.processDefinitionKey(key).list();
		List<Map<String, Object>> rst = new ArrayList<Map<String, Object>>();
		if (list != null && list.size() > 0) {
			for (HistoricProcessInstance hpi : list) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("processDefinitionId", hpi.getProcessDefinitionId());
				map.put("processInstanceId", hpi.getId());
				System.out.println("流程定义ID：" + hpi.getProcessDefinitionId());
				System.out.println("流程实例ID：" + hpi.getId());
				System.out.println("开始时间：" + hpi.getStartTime());
				System.out.println("结束时间：" + hpi.getEndTime());
				System.out.println("流程持续时间：" + hpi.getDurationInMillis());
				System.out.println("=======================================");
				rst.add(map);
			}
		}
		return rst;
	}

	// 根据流程id，获取流程的历史信息
	public Map<String, Object> getProcessValues(String id) {
		System.out.println("historyService" + historyService.toString());
		List<HistoricVariableInstance> history = historyService.createHistoricVariableInstanceQuery()
				.processInstanceId(id).list();
		Map<String, Object> map = new HashMap<String, Object>();
		for (HistoricVariableInstance hsr : history) {
			String key = hsr.getVariableName();
			Object value = (Object) hsr.getValue();
			map.put(key, value);
		}
		String status = this.qureyProcessInstance(id);
		map.put("processStatus", status);
		return map;
	}

	// 查询用户发起的的流程
	public List<HistoricProcessInstance> getStartUserProcesses(String name, String status,
			String processDefinitionKey) {
		List<HistoricProcessInstance> processList = null;
		System.out.println("定义id:" + processDefinitionKey);
		// 查询指定用户发起的流程 （流程历史 用户发起 ）
		if (status.equals("finished")) {
			processList = historyService.createHistoricProcessInstanceQuery().processDefinitionKey(processDefinitionKey)
					.finished()// finished--> 完成的流程；  unfinish ---> 还在运行中的流程
					.startedBy(name).orderByProcessInstanceStartTime().desc().list();
		} else if (status.equals("unfinished")) {
			processList = historyService.createHistoricProcessInstanceQuery().processDefinitionKey(processDefinitionKey)
					.unfinished()// finished--> 完成的流程；  unfinish ---> 还在运行中的流程
					.startedBy(name).orderByProcessInstanceStartTime().desc().list();
		} else { // 返回全部
			processList = historyService.createHistoricProcessInstanceQuery().processDefinitionKey(processDefinitionKey)
					.startedBy(name).orderByProcessInstanceStartTime().desc().list();
		}
		// for (HistoricProcessInstance hpi : processList) {
		// Map<String, Object> map = new HashMap<String, Object>();
		// map.put("processDefinitionId", hpi.getProcessDefinitionId());
		// map.put("processInstanceId", hpi.getId());
		// map.put("processStatus", this.qureyProcessInstance(hpi.getId()));
		//// Map<String, Object> history = this.getProcessValues(hpi.getId());
		//// map.put("processInstanceHistory", history);
		// rst.add(map);
		// }
		return processList;
	}

	// 根据流程id删除实例
	public void deleteProcess(String deId) {
		runtimeService.deleteProcessInstance(deId, "");
		historyService.deleteHistoricProcessInstance(deId);
		// repositoryService.deleteDeployment(deId, true); // 默认是false true就是级联删除
		System.out.println("刪除流程实例:" + deId);
	}

	// 更改任务的分配人
	public int setAssignee(String taskId, String newName) {
		try {
			taskService.setAssignee(taskId, newName);
			return 0;
		} catch (Exception e) {
			return 1;
		}
	}

	// 查询流程到了哪一步
	public String qureyProcessInstance(String processId) {
		ProcessInstance pi = runtimeService.createProcessInstanceQuery().processInstanceId(processId).singleResult();
		String rst = "";
		if (pi != null) {
			rst = pi.getActivityId();
		} else {
			rst = "已结束";
		}
		return rst;
	}

	// 根据人， 查询任务。
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/get-my-tasks", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getOwnTask(@RequestBody Map<String, String> data) {
		String name = data.get("name");
		List<Task> tasks = taskService.createTaskQuery().taskAssignee(name).list();
		List list = new ArrayList<Map>();
		for (Task task : tasks) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("processId", task.getProcessInstanceId());
			map.put("processDefinitionId", task.getProcessDefinitionId());
			map.put("taskId", task.getId());
			map.put("taskName", task.getName());
			Map<String, Object> history = this.getProcessValues(task.getProcessInstanceId());
			map.put("history", history);
			list.add(map);
			System.out.println("--------------------------------------------");
			System.out.println("id:" + task.getId() + "name" + task.getName());
		}
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 删除流程定义
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/delete", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> detele(@RequestBody Map<String, String> data) {
		this.deleteProcess(data.get("processId"));
		RestResultData<?> rst = new RestResultData(0, "", null);
		return rst;
	}

	// 根据流程查询历史信息
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/history", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getHistory(@RequestBody Map<String, String> data) {
		List list = new ArrayList();
		Map<String, Object> rstMap = this.getProcessValues(data.get("processId"));
		list.add(rstMap);
		RestResultData<?> rst = new RestResultData(0, "", list);
		return rst;
	}

	// 根据流程到哪一步了
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/process/status", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getProcessStatus(@RequestBody Map<String, String> data) {
		String processId = data.get("processId");
		String status = this.qureyProcessInstance(processId);
		List list = new ArrayList();
		Map<String, Object> rstMap = new HashMap<>();
		rstMap.put("status", status);
		list.add(rstMap);
		RestResultData<?> rst = new RestResultData(0, "", list);
		return rst;
	}

}
