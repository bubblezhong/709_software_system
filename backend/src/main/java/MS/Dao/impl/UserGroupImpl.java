package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import unit.UserGroup;
import MS.Dao.BaseDao;

public class UserGroupImpl extends BaseImpl implements BaseDao<UserGroup> {

	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"user_group\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"user_group\"");
	}
	@Override
	public void add(UserGroup t) throws Exception {
		String selectSql = String.format("insert into  \"SOFTWARE\".\"user_group\"("
				+ "\"user_id\","
				+ "\"group_id\","
				+ ") values (?,?"
				+ ")");
		jdbctemlete.update(selectSql,new Object[]{
				t.getUser_id(),
				t.getGroup_id()
				
				});
		
	}

	@Override
	public void update(UserGroup t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"user_group\" set"
				+ "\"user_id\"=?,"
				+ "\"group_id\"=?,"
				+ "where id=?");
		jdbctemlete.update(selectSql,new Object[]{
				t.getUser_id(),
				t.getGroup_id(),
				t.getId()
				});
		
	}

}
