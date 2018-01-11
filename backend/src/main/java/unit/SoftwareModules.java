package unit;

import java.util.Date;

public class SoftwareModules extends BaseEntity {
	
	public int parent_id;		        //	  "parent_id" VARCHAR2(500BYTE) DEFAULT NULL, -- '父级单元 ID',
	public int category_id;		        //	  "category_id" NUMBER(11, 0) NOT NULL, -- '单元所属谱系的 ID'
	public String identification;		//	  "identification" VARCHAR2(500BYTE) DEFAULT NULL, -- 软件单元标识 uuid
	public int development_department_id;		//	  "development_department_id" NUMBER(11, 0) DEFAULT NULL, -- 研发单位 ID
	public int important_level;		//	  "important_level" NUMBER(1, 0), -- （数据字典配置 重要等级）1机密 2秘密 3内部公开 4公开

	public int getParent_id() {
		return parent_id;
	}
	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getIdentification() {
		return identification;
	}
	public void setIdentification(String identification) {
		this.identification = identification;
	}
	public int getDevelopment_department_id() {
		return development_department_id;
	}
	public void setDevelopment_department_id(int development_department_id) {
		this.development_department_id = development_department_id;
	}
	public int getImportant_level() {
		return important_level;
	}
	public void setImportant_level(int important_level) {
		this.important_level = important_level;
	}



	
	
}
