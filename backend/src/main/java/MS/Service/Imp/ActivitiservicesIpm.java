package MS.Service.Imp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;

import MS.Service.ActivitiServices;
import MS.util.OverFunction;


public class ActivitiservicesIpm implements ActivitiServices{
	
	@Autowired
	private TaskService taskService;
	
	@Autowired
	RuntimeService runtimeService;

	

	@Override
	public List<Task> getTaskByRole(String role) {
		OverFunction.println(taskService.createTaskQuery().taskCandidateUser(role).list().toString());
		return taskService.createTaskQuery().taskCandidateUser(role).list();
	}

	@Override
	public void startProcess(String processtype,String id) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("InputId", id);
		runtimeService.startProcessInstanceByKey(processtype, params);	
		taskService.complete(taskService.createTaskQuery().singleResult().getId());
	}
	


}
