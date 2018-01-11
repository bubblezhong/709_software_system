package unit;

import java.util.List;
import java.util.Map;

public class Result {
	
	public int code;
	public String message;
	public java.util.List<Map<String,Object>>  data;
	public User user;
	
	
	public Result(int code, String message, List<Map<String, Object>> data) {
		this.code = code;
		this.message = message;
		this.data = data;
	}
	
	
	
	
	public Result(int code, String message) {
		this.code = code;
		this.message = message;
		this.data=null;
	}




	public Result(int code, String message, User user) {
		this.code = code;
		this.message = message;
		this.user = user;
	}




	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public java.util.List<Map<String, Object>> getData() {
		return data;
	}
	public void setData(java.util.List<Map<String, Object>> data) {
		this.data = data;
	}
	

	

	
	
	
	

}
