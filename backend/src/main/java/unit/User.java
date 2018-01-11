package unit;

import java.util.Date;

public class User {
	
	private int id;									//	 `id` bigint(10) NOT NULL AUTO_INCREMENT,
	private int organization_id;					//	  `organization_id` bigint(10) DEFAULT NULL COMMENT '所属单位（机构，对应 organization 表)',
	private int role_id;							 //	  `role_id` bigint(10) DEFAULT NULL COMMENT '用户角色id，由用户角色控制权限',
	private String avatar;							 //	  `avatar` varchar(100) DEFAULT NULL COMMENT '用户头像(t)',
	private String real_name;						 //	  `real_name` varchar(20) DEFAULT NULL COMMENT '用户真实姓名(t)',
	private String telephone;						 //	  `telephone` varchar(18) DEFAULT NULL COMMENT '座机(t)',
	private String mobile;                           //	  `mobile` varchar(18) DEFAULT NULL COMMENT '用户手机号码(t)',
	private int gender;								 //	  `gender` int(1) DEFAULT 0 COMMENT '用户性别 0 男，1女(t)',
	private String email;  							 //	  `email` varchar(50) DEFAULT NULL COMMENT '用户邮箱(t)',
	private String address;  						 //	  `address` varchar(100) DEFAULT NULL COMMENT '用户地址(t)',
	private Date birthday;					 //	  `birthday` datetime DEFAULT NULL COMMENT '用户生日（t）',
	private String qq; 								 //	  `qq` varchar(20) DEFAULT NULL COMMENT 'QQ号码',
	private String wechat; 							 //	  `wechat` varchar(100) DEFAULT NULL COMMENT '微信号码',
	private String remark; 							 //	  `remark` varchar(200) DEFAULT NULL COMMENT '用户备注，管理员分配用户的时候填写，用户不能自己编写',
	private String login_name; 						 //	  `login_name` varchar(20) NOT NULL COMMENT '用户登录名，管理分配，唯一 （TODO 待加索引）',
	private String password; 						 //	  `password` varchar(200) NOT NULL COMMENT '用户密码（t）',
	private int create_user_id;						 //	  `create_user_id` bigint(10) DEFAULT NULL COMMENT '创建者的ID',
	private int status;								 //	  `status` int(1) DEFAULT 1 COMMENT '创建用户时，选择是否激活用户。激活为 0，1 未激活，2 永久删除（禁用）',
	private Date create_date;				 //	  `create_date` datetime DEFAULT NULL COMMENT '用户被创建的时间',
	private Date update_date;				 //	  `update_date` datetime DEFAULT NULL COMMENT '用户更新时间。用户自己或者管理员更新用户信息后，记录时间',
	private int update_user;						 //	  `update_user` bigint(10) DEFAULT NULL  COMMENT '用户被谁更新。用户自己或者管理员更新用户信息后，记录用户ID',
	
	public User(){};
	
	public User(int id, int organization_id, int role_id, String avatar,
			String real_name, String telephone, String mobile, int gender,
			String email, String address, Date birthday, String qq,
			String wechat, String remark, String login_name, String password,
			int create_user_id, int status, java.sql.Date create_date,
			java.sql.Date update_date, int update_user) {
		this.id = id;
		this.organization_id = organization_id;
		this.role_id = role_id;
		this.avatar = avatar;
		this.real_name = real_name;
		this.telephone = telephone;
		this.mobile = mobile;
		this.gender = gender;
		this.email = email;
		this.address = address;
		this.birthday = birthday;
		this.qq = qq;
		this.wechat = wechat;
		this.remark = remark;
		this.login_name = login_name;
		this.password = password;
		this.create_user_id = create_user_id;
		this.status = status;
		this.create_date = create_date;
		this.update_date = update_date;
		this.update_user = update_user;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOrganization_id() {
		return organization_id;
	}
	public void setOrganization_id(int organization_id) {
		this.organization_id = organization_id;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public String getReal_name() {
		return real_name;
	}
	public void setReal_name(String real_name) {
		this.real_name = real_name;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date date) {
		this.birthday = date;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	public String getWechat() {
		return wechat;
	}
	public void setWechat(String wechat) {
		this.wechat = wechat;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getLogin_name() {
		return login_name;
	}
	public void setLogin_name(String login_name) {
		this.login_name = login_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getCreate_user_id() {
		return create_user_id;
	}
	public void setCreate_user_id(int create_user_id) {
		this.create_user_id = create_user_id;
	}
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
	
	
}
