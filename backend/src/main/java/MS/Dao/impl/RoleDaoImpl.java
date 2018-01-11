package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import unit.Role;
import MS.DB.DbBase;
import MS.Dao.BaseDao;

public class RoleDaoImpl extends BaseImpl implements BaseDao<Role>  {
	
	@Autowired 
	JdbcTemplate jdbctemlete;
	
	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"role\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"role\"");
	}

	@Override
	public void add(Role t) {
		String selectSql = String.format("insert into \"SOFTWARE\".\"role\" ("
				+ "\"name\","
				+ "\"description\","
				+ "\"department_type\","
				+ "\"status\""
				+ ") values (?,?,?,?,?,?,?,?,?"
				+ ")");
		jdbctemlete.update(selectSql,new Object[]{t.getName(),t.getDescription(),t.getDepartment_type(),t.getStatus()
				});
		
	}


	@Override
	public void update(Role t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"role\" set"
				+ "\"name\"=?,"
				+ "\"description\"=?,"
				+ "\"department_type\"=?,"
				+ "\"status\"=?  where id=?"
				);
		jdbctemlete.update(selectSql,new Object[]{t.getName(),t.getDescription(),t.getDepartment_type(),t.getStatus(),t.getId()
				});
	}

}
