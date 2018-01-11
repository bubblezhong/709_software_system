package MS.Service;

import java.util.List;

import org.activiti.engine.task.Task;

public interface ProcessServices {
    //
	public void startProcess(int id);
	public void completeTask(int taskId);
	public String getProgress(int processId);

	
}
