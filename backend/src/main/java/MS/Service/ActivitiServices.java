package MS.Service;

import java.util.List;

import org.activiti.engine.task.Task;

public interface ActivitiServices {

	public List<Task> getTaskByRole(String role);


	void startProcess(String processtype, String id);

	
}
