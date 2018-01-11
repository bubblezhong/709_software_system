package MS.Service.Imp;

import java.awt.List;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import unit.Result;
import unit.User;
import MS.Dao.UserDao;
import MS.Dao.impl.UserDaoImpl;
import MS.Service.UserService;
import MS.util.OverFunction;

@Service
public class UserServiceImp implements UserService {

	
	@Autowired
    private UserDao userDao;
	
	@Override
	public Result login(String name, String password) {
		
		java.util.List<Map<String, Object>> list=null;
		try {
			list = userDao.queryUserByName(name);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常", list);
		}
		if (list.isEmpty()) {
			return new Result(1001, "用户不存在", list);
		}
		User user=new User();
		user.setId(Integer.valueOf(list.get(0).get("id").toString()));
	    user.setOrganization_id(Integer.valueOf(list.get(0).get("organization_id").toString()));
	    user.setRole_id(Integer.valueOf(list.get(0).get("role_id").toString()));
	    user.setAvatar(list.get(0).get("avatar").toString());
		user.setReal_name(list.get(0).get("real_name").toString());
		user.setTelephone(list.get(0).get("telephone").toString());
		user.setMobile(list.get(0).get("mobile").toString());
	    user.setGender(Integer.valueOf(list.get(0).get("gender").toString()));
		user.setEmail(list.get(0).get("email").toString());
		user.setAddress(list.get(0).get("address").toString());
		user.setBirthday(OverFunction.stringToDate(list.get(0).get("birthday").toString()));		
	    user.setQq(list.get(0).get("qq").toString());
		user.setWechat(list.get(0).get("wechat").toString());
		user.setRemark(list.get(0).get("remark").toString());
		user.setLogin_name(list.get(0).get("login_name").toString());
		user.setPassword(list.get(0).get("password").toString());
		user.setCreate_user_id(Integer.valueOf(list.get(0).get("create_user_id").toString()));
		user.setStatus(Integer.valueOf(list.get(0).get("status").toString()));
		user.setCreate_date(OverFunction.stringToDate(list.get(0).get("create_date").toString()));
		user.setUpdate_date(OverFunction.stringToDate(list.get(0).get("update_date").toString()));
		user.setUpdate_user(Integer.valueOf(list.get(0).get("update_user").toString()));
		if (user.getStatus()==1) {
			return new Result(1002, "用户未激活", list);
		}else if (user.getStatus()==2) {
			return new Result(1003, "用户已禁用", list);
		}else if (user.getPassword().equals(password)) {
			return new Result(1000, "登录成功", user);
		}
		return new Result(5000, "异常", list);

	}

	@Override
	public Result getUserList() {
		java.util.List<Map<String, Object>> list=null;
		try {
			list = userDao.querrylist();
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常", list);
		}
		return new Result(1000, "查询成功", list);
	}

	@Override
	public Result getUserByID(int id) {
		java.util.List<Map<String, Object>> list=null;
		try {
			list = userDao.querryByID(id);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常", list);
		}
		return new Result(1000, "查询成功", list);
	}

	@Override
	public Result addUser(User user) {
		try {
			userDao.add(user);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常");
		}
		return new Result(2000, "添加成功");
	}

	@Override
	public Result upDateUser(User user) {
		try {
			userDao.update(user);
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(5000, "异常");
		}
		return new Result(3000, "修改成功");
	}

}
