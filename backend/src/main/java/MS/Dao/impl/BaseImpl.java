package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class BaseImpl {

	@Autowired
	JdbcTemplate jdbctemlete;
	public List<Map<String, Object>> querrylist(String table) throws Exception {
		String selectSql = String.format("select * from "+ table);
		List<Map<String, Object>> rows =jdbctemlete.queryForList(selectSql);
		return rows;
	}
	
	public List<Map<String, Object>> querryByID(int id,String table) throws Exception {
		String selectSql = String.format("select * from "+table+" where id =?");
		List<Map<String, Object>> rows =jdbctemlete.queryForList(selectSql,new Object[]{id});
		return rows;
	}
	
}
