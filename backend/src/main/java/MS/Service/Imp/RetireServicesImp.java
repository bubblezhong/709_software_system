package MS.Service.Imp;

import java.util.List;

import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;

import MS.Service.RetireServices;
import MS.util.Config;

public class RetireServicesImp  extends ActivitiservicesIpm{

	@Autowired 
	TaskService taskService;
	public void outPutApproval(String  identify_id){
		//数据入库,获得存储id
		int id=1;
		//开启流程
		startProcess(Config.processRetire, Config.processRetire+id);
	}
}
