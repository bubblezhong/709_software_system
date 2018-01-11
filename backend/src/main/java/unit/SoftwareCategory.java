package unit;

import java.util.Date;

public class SoftwareCategory extends BaseEntity {

	
	public int 	parent_id;		//	  "parent_id" VARCHAR2(500BYTE) DEFAULT NULL, -- '父级谱系 ID',
	public int getParent_id() {
		return parent_id;
	}
	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}


	
	
	
}
