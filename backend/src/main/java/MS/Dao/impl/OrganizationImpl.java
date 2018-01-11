package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import unit.Organization;
import MS.Dao.BaseDao;
import MS.util.OverFunction;

@Component
public class OrganizationImpl extends BaseImpl implements BaseDao<Organization> {

	
	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"organization\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"organization\"");
	}

	@Override
	public void add(Organization t) {
		String selectSql = String.format("insert into  \"SOFTWARE\".\"organization\"("
				+ "\"name\","
				+ "\"parent_id\","
				+ "\"department_type\","
				+ "\"description\","
				+ "\"address\","
				+ "\"status\","
				+ "\"create_date\","
				+ "\"create_user_id\","
				+ "\"update_date\","
				+ ") values (?,?,?,?,?,?,?,?,?"
				+ ")");
		jdbctemlete.update(selectSql,new Object[]{t.getName(),t.getParent_id(),t.getDepartment_type(),t.getDescription(),t.getAddress()
				,t.getStatus(),OverFunction.getDate(),t.getCreate_user_id(),OverFunction.getDate()
				});
	
	}




	@Override
	public void update(Organization t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"organization\" set"
				+ "\"name\"=?,"
				+ "\"parent_id\"=?,"
				+ "\"department_type\"=?,"
				+ "\"description\"=?,"
				+ "\"address\"=?,"
				+ "\"status\"=?,"
				+ "\"create_user_id\"=?,"
				+ "\"update_date\"=?"
				+ "where id=?");
		jdbctemlete.update(selectSql,new Object[]{t.getName(),t.getParent_id(),t.getDepartment_type(),t.getDescription(),t.getAddress()
				,t.getStatus(),t.getCreate_user_id(),OverFunction.getDate(),t.getId()
				});
		
	}

}
