package unit;

import java.util.Date;

public class SoftwareBase extends BaseEntity {

	public int category_id;				//	  "category_id" NUMBER(11, 0), -- 软件谱系 ID
	public int modules_id_list;				//	  "modules_id_list" NUMBER(11, 0), -- 软件单元 ID 列表
	public int type;				//	  "type" NUMBER(1, 0), -- 软件类型，1.常规应用软件，2.导航软件3.目标指示软件
	public String usage;				//	  "usage" VARCHAR2(2000BYTE), -- 软件用途说明
	public String remark;				//	  "remark" VARCHAR2(2000BYTE), -- （软件）备注信息
	public String appendix;				//	  "appendix" VARCHAR2(2000BYTE), -- 附加信息
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public int getModules_id_list() {
		return modules_id_list;
	}
	public void setModules_id_list(int modules_id_list) {
		this.modules_id_list = modules_id_list;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getUsage() {
		return usage;
	}
	public void setUsage(String usage) {
		this.usage = usage;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getAppendix() {
		return appendix;
	}
	public void setAppendix(String appendix) {
		this.appendix = appendix;
	}



	
}
