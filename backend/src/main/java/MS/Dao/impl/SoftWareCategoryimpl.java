package MS.Dao.impl;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import unit.SoftwareCategory;
import MS.Dao.BaseDao;
public class SoftWareCategoryimpl extends BaseImpl implements BaseDao<SoftwareCategory> {

	
	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"software_category\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"software_category\"");
	}

	@Override
	public void add(SoftwareCategory t) throws Exception {
		String selectSql = String.format("insert into  \"SOFTWARE\".\"software_category\" ("
				+ "\"name\","
				+ "\"parent_id\","
				+ "\"status\","
				+ "\"create_date\","
				+ "\"create_user_id\")"
				+ "values (?,?,?,?,?)");
		jdbctemlete.update(selectSql,new Object[]{t.getName(),t.getParent_id(),t.getStatus(),t.getCreate_date(),t.getCreate_user_id()});
		
		
	}

	@Override
	public void update(SoftwareCategory t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"software_category\" set"
				+ "\"name\"=?,"
				+ "\"parent_id\"=?,"
				+ "\"status\"=?,"
				+ "\"create_date\"=?,"
				+ "\"create_user_id\"=?,"
				+ "where \"id\"=?");
		jdbctemlete.update(selectSql,new Object[]{t.getName(),t.getParent_id(),t.getStatus(),t.getCreate_date(),t.getCreate_user_id(),t.getId()});
		
	}
}
