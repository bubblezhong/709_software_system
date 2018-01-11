package MS.Dao.impl;

import java.util.List;
import java.util.Map;

import unit.SoftwareBase;
import unit.softwareExtension;
import MS.Dao.BaseDao;

public class softwareExtensionImpl extends BaseImpl implements BaseDao<softwareExtension> {
	@Override
	public List<Map<String, Object>> querrylist() throws Exception {
		return querrylist("\"SOFTWARE\".\"software_info_extension\"");
	}

	@Override
	public List<Map<String, Object>> querryByID(int id) throws Exception {
		return querryByID(id, "\"SOFTWARE\".\"software_info_extension\"");
	}


	@Override
	public void add(softwareExtension t) throws Exception {
		String selectSql = String.format("insert into \"SOFTWARE\".\"software_info_extension\" ("
				+ "\"software_info_basic_id\","
				+ "\"modules_id_list\","
				+ "\"version_name\","
				+ "\"version_code\","
				+ "\"development_department_id\","
				+ "\"operation_system\","
				+ "\"software_language\","
				+ "\"software_storage\","
				+ "\"software_info\","
				+ "\"software_magnitude\","
				+ ") values (?,?,?,?,?,?,?,?,?,?"
				+ ")");
		jdbctemlete.update(selectSql,new Object[]{
				
		});
		
	}

	@Override
	public void update(softwareExtension t) throws Exception {
		String selectSql = String.format("update \"SOFTWARE\".\"software_info_extension\" set"
				+ "\"software_info_basic_id\"=?,"
				+ "\"modules_id_list\"=?,"
		+ "\"version_name\"=?,"
				+ "\"version_code\"=?,"
				+ "\"development_department_id\"=?,"
				+ "\"operation_system\"=?,"
				+ "\"software_language\"=?,"
				+ "\"software_storage\"=?,"
				+ "\"software_info\","
				+ "\"software_magnitude\"=?,"
				+ "where \"id\"=?");
		jdbctemlete.update(selectSql,new Object[]{
				t.getSoftware_info_basic_id(),
				t.getModules_id_list(),
				t.getVersion_name(),
				t.getVersion_code(),
				t.getDevelopment_department_id(),
				t.getOperation_system(),
				t.getSoftware_language(),
				t.getSoftware_storage(),
				t.getSoftware_info(),
				t.getSoftware_magnitude(),
				t.getId()
		});
		
	}

}
