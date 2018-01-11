package unit;

import java.util.Date;

public class Organization extends BaseEntity {

	private int parent_id;//	  "parent_id" NUMBER(11, 0) DEFAULT NULL,
	private int department_type;//	  "department_type" NUMBER(2) NOT NULL, -- '单位组织类型 1主管部门 2日常管理部门 3使用部门 4代表室 5论证部门 6管理员',
	private String description;//	  "description" VARCHAR2(500BYTE) DEFAULT NULL, -- '单位描述',
	private String address;//	  "address" VARCHAR2(500BYTE) DEFAULT NULL, -- '单位办公地址',
	
	
		public int getParent_id() {
			return parent_id;
		}
		public void setParent_id(int parent_id) {
			this.parent_id = parent_id;
		}
		public int getDepartment_type() {
			return department_type;
		}
		public void setDepartment_type(int department_type) {
			this.department_type = department_type;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
	
	
	
}
