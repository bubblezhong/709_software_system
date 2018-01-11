package unit;

import java.util.Date;

public abstract class BaseEntity {
	public int id;
	public String name;
	public Date create_date;		//	  "create_date" DATE DEFAULT SYSDATE,
	public int create_user_id;		//	  "create_user_id" NUMBER(11, 0) DEFAULT NULL,
	public Date update_date;		//	  "update_date" DATE DEFAULT SYSDATE,
	public int update_user;	    	//	  "update_user" NUMBER(11, 0) DEFAULT NULL
	public int status;
	
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Date getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	public int getCreate_user_id() {
		return create_user_id;
	}
	public void setCreate_user_id(int create_user_id) {
		this.create_user_id = create_user_id;
	}
	public Date getUpdate_date() {
		return update_date;
	}
	public void setUpdate_date(Date update_date) {
		this.update_date = update_date;
	}
	public int getUpdate_user() {
		return update_user;
	}
	public void setUpdate_user(int update_user) {
		this.update_user = update_user;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}