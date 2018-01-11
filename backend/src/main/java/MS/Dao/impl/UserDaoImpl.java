package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import unit.User;
import MS.DB.DbBase;
import MS.Dao.UserDao;
import MS.util.OverFunction;

@Component
public class UserDaoImpl  implements UserDao  {

	@Autowired 
	JdbcTemplate jdbctemlete;
	
	
	@Override
	public List<Map<String, Object>> queryUserByName(String name
			) {
		String selectSql = String.format("select * from \"user\" where \"login_name\" =? ");
		List<Map<String, Object>> rows =jdbctemlete.queryForList(selectSql,new Object[]{name});
		return rows;
	}



	@Override
	public List<Map<String, Object>> querrylist() throws Exception  {
		String selectSql = String.format("select * from \"user\" ");
		List<Map<String, Object>> rows =jdbctemlete.queryForList(selectSql);
		return rows;
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception  {
		String selectSql = String.format("select * from Account where id=?");
		List<Map<String, Object>> rows =jdbctemlete.queryForList(selectSql,new Object[]{id});
		return rows;
	}

	@Override
	public void add(User t) throws Exception {
		String selectSql = String.format("insert into \"user\" ("
				+ "\"organization_id\","
				+ "\"role_id\","
				+ "\"real_name\","
				+ "\"telephone\","
				+ "\"mobile\","
				+ "\"gender\","
				+ "\"email\","
				+ "\"address\","
				+ "\"birthday\","
				+ "\"qq\","
				+ "\"wechat\","
				+ "\"remark\","
				+ "\"login_name\","
				+ "\"password\","
				+ "\"create_user_id\","
				+ "\"status\""
				+ ") values (?,?,?,?,?,?,?,?,?,?,"
				+ "?,?,?,?,?,?)");
		jdbctemlete.update(selectSql,new Object[]{t.getOrganization_id(),t.getRole_id(),t.getReal_name(),t.getTelephone(),t.getMobile()
				,t.getGender(),t.getEmail(),t.getAddress(),t.getBirthday(),t.getQq(),t.getWechat(),t.getRemark(),t.getLogin_name()
				,t.getPassword(),t.getCreate_user_id(),t.getStatus()});
	}

	@Override
	public void update(User user) throws Exception {
		String selectSql = String.format("update \"user\" set"
				+ "\"organization_id\"=?,"
				+ "\"role_id\"=?,"
				+ "\"real_name\"=?,"
				+ "\"telephone\"=?,"
				+ "\"mobile\"=?,"
				+ "\"gender\"=?,"
				+ "\"email\"=?,"
				+ "\"address\"=?,"
				+ "\"birthday\"=?,"
				+ "\"qq\"=?,"
				+ "\"wechat\"=?,"
				+ "\"remark\"=?,"
				+ "\"login_name\"=?,"
				+ "\"password\"=?,"
				+ "\"update_user\"=?,"
				+ "\"status\"=?"
				+ "where \"id\"=?");
		jdbctemlete.update(selectSql,new Object[]{user.getOrganization_id(),user.getRole_id(),user.getReal_name(),user.getTelephone(),user.getMobile()
				,user.getGender(),user.getEmail(),user.getAddress(),user.getBirthday(),user.getQq(),user.getWechat(),user.getRemark(),user.getLogin_name()
				,user.getPassword(),user.getUpdate_user(),user.getStatus(),user.getId()});
		
	}












	
}
