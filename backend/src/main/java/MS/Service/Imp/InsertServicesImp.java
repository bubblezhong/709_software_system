package MS.Service.Imp;

import org.activiti.engine.TaskService;
import org.springframework.beans.factory.annotation.Autowired;

import MS.util.Config;

public class InsertServicesImp extends ActivitiservicesIpm {

	@Autowired 
	TaskService taskService;
	
	public void InsertApproval(String  id){
		//数据入库
		//开启流程
		startProcess(Config.processInsert, Config.processInsert+id);
	}
	
    public void Approval(String taskId){
    	//
    	taskService.complete(taskId);
    }
}
