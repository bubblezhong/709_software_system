package MS.Dao;

import java.util.List;
import java.util.Map;

import unit.SoftwareBase;
import unit.User;

public interface UserDao extends BaseDao<User> {
	public List<Map<String, Object>> queryUserByName(String name)throws Exception;
}
