package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import unit.SoftwareModules;
import MS.Dao.BaseDao;
import MS.util.OverFunction;

public class SoftWareModuleimpl extends BaseImpl implements BaseDao<SoftwareModules> {

	
	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"software_modules\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"software_modules\"");
	}

	@Override
	public void add(SoftwareModules t) throws Exception {
		String selectSql = String.format("insert into \"SOFTWARE\".\"software_modules\" ("
				+ "\"parent_id\","
				+ "\"category_id\","
				+ "\"name\","
				+ "\"identification\","
				+ "\"development_department_id\","
				+ "\"important_level\","
				+ "\"status\","
				+ "\"create_date\","
				+ "\"create_user_id\","
				+ ") values (?,?,?,?,?,?,?,?,?"
				+ ")");
		jdbctemlete.update(selectSql,new Object[]{t.getParent_id(),t.getCategory_id(),t.getName(),t.getIdentification(),t.getDevelopment_department_id()
				,t.getImportant_level(),t.getStatus(),OverFunction.getDate(),t.getCreate_user_id()});
		
	}

	@Override
	public void update(SoftwareModules t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"software_modules\" set"
				+ "\"parent_id\"=?,"
				+ "\"category_id\"=?,"
				+ "\"name\"=?,"
				+ "\"description\"=?,"
				+ "\"identification\"=?,"
				+ "\"development_department_id\"=?,"
				+ "\"important_level\"=?,"
				+ "\"status\"=?,"
				+ "\"create_user_id\"=?,"
				+ "\"update_date\"=?"
				+ "where id=?");
		jdbctemlete.update(selectSql,new Object[]{t.getParent_id(),t.getCategory_id(),t.getName(),t.getIdentification(),t.getDevelopment_department_id()
				,t.getImportant_level(),t.getStatus(),OverFunction.getDate(),t.getCreate_user_id(),t.getId()
				});
	}

}
