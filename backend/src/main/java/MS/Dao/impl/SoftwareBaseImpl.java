package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import unit.SoftwareBase;
import MS.Dao.BaseDao;

public class SoftwareBaseImpl extends BaseImpl implements BaseDao<SoftwareBase> {

	
	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"software_info_basic\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"software_info_basic\"");
	}



	@Override
	public void update(SoftwareBase t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"software_info_basic\" set"
				+ "\"category_id\"=?,"
				+ "\"name\"=?,"
				+ "\"type\"=?,"
				+ "\"usage\"=?,"
				+ "\"remark\"=?,"
				+ "\"appendix\"=?,"
				+ "\"status\"=?,"
				+ "\"create_date\"=?,"
				+ "\"create_user_id\"=?,"
				+ "where \"id\"=?");
		jdbctemlete.update(selectSql,new Object[]{t.getCategory_id(),t.getName(),t.getType(),t.getUsage(),t.getRemark()
				,t.getAppendix(),t.getStatus(),t.getCreate_date(),t.getCreate_user_id(),t.getId()});
		
	}

	@Override
	public void add(SoftwareBase t) throws Exception {
		String selectSql = String.format("insert into \"SOFTWARE\".\"software_info_basic\" ("
				+ "\"category_id\","
				+ "\"name\","
				+ "\"type\","
				+ "\"usage\","
				+ "\"remark\","
				+ "\"appendix\","
				+ "\"status\","
				+ "\"create_date\","
				+ "\"create_user_id\","
				+ ") values (?,?,?,?,?,?,?,?,?"
				+ ")");
		jdbctemlete.update(selectSql,new Object[]{t.getCategory_id(),t.getName(),t.getType(),t.getUsage(),t.getRemark()
				,t.getAppendix(),t.getStatus(),t.getCreate_date(),t.getCreate_user_id()});
		
	}

}
