package unit;

public class Role extends BaseEntity {
	private String name;			//	  "name" VARCHAR2(100BYTE) DEFAULT NULL,
	private String description;			//	  "description" VARCHAR2(500BYTE) DEFAULT NULL,
	private int department_type;			//	  "department_type" NUMBER(2) NOT NULL, -- '用户角色所属单位组织类型 1主管部门 2日常管理部门 3使用部门 4代表室 5论证部门 6管理员',
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getDepartment_type() {
		return department_type;
	}
	public void setDepartment_type(int department_type) {
		this.department_type = department_type;
	}
	
}
