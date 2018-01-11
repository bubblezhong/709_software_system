package MS.Service.Imp;

import java.util.List;

import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;

import MS.Service.ChukuServices;
import MS.util.Config;

public class OutPutServicesImp extends ActivitiservicesIpm {

	@Autowired 
	TaskService taskService;
	public void outPutApproval(String  id){
		//数据入库
		//开启流程
		startProcess(Config.processOutput, Config.processOutput+id);
	}
	
	public void Approval(String TaskId){
		//数据处理
		//出库
		taskService.complete(TaskId);
	}

}
