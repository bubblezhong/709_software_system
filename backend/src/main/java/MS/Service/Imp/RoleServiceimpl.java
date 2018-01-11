package MS.Service.Imp;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import unit.Result;
import unit.Role;
import MS.Dao.BaseDao;
import MS.Dao.impl.RoleDaoImpl;
import MS.Service.RoleService;

public class RoleServiceimpl implements RoleService {

	@Autowired
	RoleDaoImpl roleDao;
	@Override
	public Result getAllRole() {
		java.util.List<Map<String, Object>> list=null;
		try {
			list = roleDao.querrylist();
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常", list);
		}
		return new Result(1000, "查询成功", list);
	}
	
	

}
