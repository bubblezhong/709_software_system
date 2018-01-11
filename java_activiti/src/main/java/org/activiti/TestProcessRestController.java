package org.activiti;

import org.activiti.engine.HistoryService;
import org.activiti.engine.IdentityService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricActivityInstance;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.activiti.engine.repository.ProcessDefinition;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.activiti.result.RestResultData;
import org.activiti.utils.ActivitiOperator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.cfg.HandlerInstantiator;

import model.Event;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TestProcessRestController {
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
	@Autowired
	private ActivitiOperator activitiOperator;

	// 开始任务
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/start-my-test", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> startHireProcess(@RequestBody Map<String, String> data) {
		// 设置流程变量
		Map<String, Object> vars = new HashMap<String, Object>();
		// 申请人
		vars.put("name", data.get("name"));
		// 开始流程
		identityService.setAuthenticatedUserId(data.get("name"));
		ProcessInstance pi = runtimeService.startProcessInstanceByKey("MyTest", vars);

		System.out.println("-----------------------------------------------------------------------------");
		System.out.println("process id:" + pi.getId());
		System.out.println("-----------------------------------------------------------------------------");

		List list = new ArrayList<Map>();
		Map<String, String> rstMap = new HashMap<String, String>();
		rstMap.put("processId", pi.getId());
		// 查询任务
		Task task = taskService.createTaskQuery().taskAssignee(data.get("name")).processInstanceId(pi.getId())
				.singleResult();
		String taskName = (String) task.getName();
		String taskId = (String) task.getId();
		rstMap.put("taskId", taskId);
		rstMap.put("taskName", taskName);
		list.add(rstMap);
		RestResultData rst = new RestResultData(0, "", list);

		// 设置流程变量
		Map<String, String> mapValue = new HashMap<String, String>();
		mapValue.put("reason", data.get("reason"));
		mapValue.put("days", data.get("days"));
		mapValue.put("applicant", data.get("applicant"));
		mapValue.put("taskId", taskId);
		mapValue.put("taskName", taskName);
		Map<String, Object> setValue = new HashMap<String, Object>();
		setValue.put("applicant", mapValue);
		taskService.setVariables(taskId, setValue);
		return rst;
	}

	// 根据人， 查询任务。
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/get-tasks", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getOwnTask(@RequestBody Map<String, String> data) {
		String name = data.get("name");
		List<Task> tasks = taskService.createTaskQuery().taskAssignee(name).list();
		List list = new ArrayList<Map>();
		for (Task task : tasks) {
			Map<String, String> map = new HashMap<String, String>();
			map.put("processId", task.getProcessInstanceId());
			map.put("taskId", task.getId());
			map.put("taskName", task.getName());
			list.add(map);
			System.out.println("--------------------------------------------");
			System.out.println("id:" + task.getId() + "name" + task.getName());
		}
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 根据人物名称，流程ID，获取当前任务信息
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/get-task", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getTask(@RequestBody Map<String, String> data) {
		String name = data.get("name");
		String processId = data.get("processId");
		Map<String, String> vaules = new HashMap<String, String>();
		vaules = this.getTaskInfo(processId, name);
		List<Map<String, String>> list = new ArrayList<Map<String, String>>();
		list.add(vaules);
		RestResultData<?> rst = new RestResultData(0, "", list);
		return rst;
	}

	// 根据任务id，完成任务
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/complete-task", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> finshTask(@RequestBody Map<String, String> data) {
		String id = data.get("id");
		// 完成流程，存入数据
		Map<String, Object> setValues = new HashMap<String, Object>();
		// 遍历得到的数据
		Boolean status = Boolean.parseBoolean(data.get("status"));
		setValues.put("status", status);
		setValues.put("reviewer", data);
		// 根据任务id， 完成任务。 推荐任务
		taskService.complete(id, setValues);
		List list = new ArrayList<Map>();
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 根据流程id，查询流程到了哪一阶段
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/qurey-process", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> qureyProcessInstance(@RequestBody Map<String, String> data) {
		String id = data.get("id");
		ProcessInstance pi = runtimeService.createProcessInstanceQuery().processInstanceId(id).singleResult();
		List list = new ArrayList<Map>();
		Map<String, String> map = new HashMap<String, String>();
		if (pi != null) {
			map.put("msg", "当前流程在" + pi.getActivityId());
		} else {
			map.put("msg", "流程已经结束");
		}
		list.add(map);
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 根据流程id，查询历史流程变量
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/history-values", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> qureyHistory(@RequestBody Map<String, String> data) {
		List list = new ArrayList<Map>();
//		Map<String, Object> map = this.getProcessValues(data.get("processId"));
		Map<String, Object> map = activitiOperator.getProcessValues(data.get("processId"));
		list.add(map);
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 查询该流程的所有流程定义信息
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/process-all-mytest", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> listAll() {
		List<Map<String, Object>> list = this.getProcessInstance("MyTest");
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 查询由用户发起的流程实例信息
	@ResponseStatus(value = HttpStatus.OK)
	@RequestMapping(value = "/my-processes", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public RestResultData<?> getUserStart(@RequestBody Map<String, String> data) {
		List<Map<String, Object>> list = this.getStartUserProcesses(data.get("name"), data.get("status"));
		RestResultData rst = new RestResultData(0, "", list);
		return rst;
	}

	// 根据流程id，获取流程的历史信息
	public Map<String, Object> getProcessValues(String id) {
		List<HistoricVariableInstance> history = historyService.createHistoricVariableInstanceQuery()
				.processInstanceId(id).list();
		Map<String, Object> map = new HashMap<String, Object>();
		for (HistoricVariableInstance hsr : history) {
			String key = hsr.getVariableName();
			Object value = (Object) hsr.getValue();
			map.put(key, value);
		}
		return map;
	}

	// 根据流程的key，获取所有的流程定义信息
	public List<Map<String, Object>> getPrcoesses(String key) {
		List<ProcessDefinition> pdList = repositoryService.createProcessDefinitionQuery() // 创建流程定义查询
				.processDefinitionKey(key) // 通过key查询
				.list(); // 返回一个集合
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		for (ProcessDefinition pd : pdList) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("processId", pd.getId());
			map.put("processName", pd.getName());
			map.put("processKey", pd.getKey());
			map.put("processVersion", pd.getVersion());
			list.add(map);
		}
		return list;
	}

	// 根据流程ID，姓名查询当前任务
	public Map<String, String> getTaskInfo(String prcoessId, String name) {
		Task task = taskService.createTaskQuery().processInstanceId(prcoessId).taskAssignee(name).singleResult();
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

	// 查询用户发起的的流程
	public List<Map<String, Object>> getStartUserProcesses(String name, String status) {
		List<Map<String, Object>> rst = new ArrayList();
		List<HistoricProcessInstance> processList = null;
		// 查询指定用户发起的流程 （流程历史 用户发起 ）
		if (status == "finished") {
			processList = historyService.createHistoricProcessInstanceQuery().finished()// finished--> 完成的流程；  unfinish ---> 还在运行中的流程
					.startedBy(name).orderByProcessInstanceStartTime().desc().list();
		} else if (status == "unfinished") {
			processList = historyService.createHistoricProcessInstanceQuery().unfinished()// finished--> 完成的流程；  unfinish ---> 还在运行中的流程
					.startedBy(name).orderByProcessInstanceStartTime().desc().list();
		} else { // 返回全部
			processList = historyService.createHistoricProcessInstanceQuery()
					.startedBy(name).orderByProcessInstanceStartTime().desc().list();
		}
		System.out.println("processList" + processList.toString());
		for (HistoricProcessInstance hpi : processList) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("processDefinitionId", hpi.getProcessDefinitionId());
			map.put("processInstanceId", hpi.getId());
			Map<String, Object> history = this.getProcessValues(hpi.getId());
			map.put("processInstanceHistory", hpi.getId());
			rst.add(map);
		}
		return rst;
	}

}
