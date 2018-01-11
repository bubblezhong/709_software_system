package MS.Service.Imp;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import unit.Organization;
import unit.Result;
import MS.Dao.BaseDao;
import MS.Dao.impl.OrganizationImpl;
import MS.Service.OrganizationService;

@Component
public class OrganizationServiceimpl implements OrganizationService {

	@Autowired
	OrganizationImpl or;
	public Result getAllOrganization() {
		java.util.List<Map<String, Object>> list=null;
		try {
			list = or.querrylist();
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常", list);
		}
		return new Result(1000, "查询成功", list);
	}

	
}
