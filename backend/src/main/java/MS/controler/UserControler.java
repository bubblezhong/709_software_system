package MS.controler;


import java.awt.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;









import org.apache.catalina.connector.Request;
import org.jboss.logging.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import unit.Result;
import unit.User;
import MS.Dao.impl.UserDaoImpl;
import MS.Service.UserService;
import MS.Service.Imp.UserServiceImp;
import MS.util.OverFunction;

/*
 * @author lynn.lqp
 */

@RestController
public class UserControler {
	
	@Autowired
	private UserService UserService;
	
	Gson gson=new Gson();

    @RequestMapping("/")
    public @ResponseBody String index() {
        return "你好，软件运维平台";
    }
    
 
    
		  //登录
		  @RequestMapping(value="/api/v0.1/login",method=RequestMethod.POST)
		  @ResponseBody
	      public  String login(@RequestParam("login_name") String username,@RequestParam("password") String password,HttpServletRequest request) {
			  HttpSession session=request.getSession();
			  User user=(User) session.getAttribute("User");
			  if (!(user==null)) {
				 return gson.toJson(new Result(1002, "已经登录"));
			}
			 Result result= UserService.login(username, OverFunction.GetMD5Code(password));
			 if (result.getCode()==1000) {
				session.setAttribute("User", result.getUser());
			}
			 return gson.toJson(result);
	        
	      }
		  
	  
	     //添加用户
		  @RequestMapping(value="/api/v0.1/add_user",method=RequestMethod.POST)
		  @ResponseBody
		  public String addUser(
			      @Param int organization_id, @Param int role_id,@Param String real_name,
			      @Param String address,@Param String birthday,@Param String telephone,
			      @Param String qq,@Param String email,@Param String mobile,
				  @Param int gender,@Param String wechat,@Param String remark,
				  @Param String login_name, @Param String password,@Param int status,
				  HttpServletRequest request) {
			  HttpSession session=request.getSession();
			  User userlogin=(User) session.getAttribute("User");
			  if (userlogin==null) {
				  return  gson.toJson(new Result(1002, "请您重新登录"));
			}else {
				User user=new User();
				user.setOrganization_id(organization_id);
				user.setRole_id(role_id);
				user.setRemark(remark);
				user.setLogin_name(login_name);
				user.setPassword(OverFunction.GetMD5Code(password));
				user.setReal_name(real_name);
				user.setAddress(address);
				user.setBirthday(OverFunction.stringToDate(birthday));
				user.setTelephone(telephone);
				user.setEmail(email);
				user.setQq(qq);
				user.setMobile(mobile);
				user.setGender(gender);
				user.setWechat(wechat);
				user.setStatus(status);
//				user.setOrganization_id(1);
//				user.setRole_id(1);
//				user.setRemark(1+"");
//				user.setLogin_name("111");
//				user.setPassword(OverFunction.GetMD5Code("hhh"));
//				user.setReal_name("hhh");
//				user.setAddress("hhh");
//				user.setBirthday(OverFunction.stringToDate(birthday));
//				user.setTelephone("111");
//				user.setEmail("1111");
//				user.setQq("1111");
//				user.setMobile("111");
//				user.setGender(1);
//				user.setWechat("111");
//				user.setStatus(0);
				user.setCreate_user_id(userlogin.getId());
				Result result=UserService.addUser(user);
				return gson.toJson(result);
			}
			  
			
		}
		  
		  
//		  @RequestMapping(value="/api/v0.1/add_user",method=RequestMethod.POST, produces = "application/json;charset=utf-8")
//		  @ResponseBody
//		  public String addUser(@ RequestBody User user, HttpServletRequest request) {
//			  HttpSession session=request.getSession();
//			  User userlogin=(User) session.getAttribute("User");
//			  if (userlogin==null) {
//				  return  gson.toJson(new Result(1002, "请您重新登录"));
//			}else {
//				user.setCreate_user_id(userlogin.getId());
//				Result result=UserService.addUser(user);
//				
//				return gson.toJson(result);
//			}
//			  
//			
//		}
		  
		  
		  
		  
		  
     //查询当前用户信息
	  @RequestMapping(value="/api/v0.1/get_userinfo",method=RequestMethod.GET)
	  @ResponseBody
	  public String getUserinfo(HttpServletRequest request) {
		  HttpSession session=request.getSession();
		  User user=(User) session.getAttribute("User");
		  if (user==null) {
			  return  gson.toJson(new Result(1002, "请您重新登录"));
		}else {
			 return gson.toJson(new Result(1002, "已经登录", user));
		}
		  
		
	}
	  
	  //修改当前用户信息
	  @RequestMapping(value="/api/v0.1/edit_userinfo",method=RequestMethod.POST)
	  @ResponseBody
	  public String upDateUserinfo(
			  @Param int id,
			  @Param int organization_id, @Param int role_id,@Param String real_name,
		      @Param String address,@Param String birthday,@Param String telephone,
		      @Param String qq,@Param String email,@Param String mobile,
			  @Param int gender,@Param String wechat,@Param String remark,
			  @Param String login_name, @Param String password,@Param int status,
			  HttpServletRequest request) {
		  HttpSession session=request.getSession();
		  User userloginUser=(User) session.getAttribute("User");
		  if (userloginUser==null) {
			  return  gson.toJson(new Result(1002, "请您重新登录"));
		}else {
			User user=new User();
			user.setId(id);
			user.setOrganization_id(organization_id);
			user.setRole_id(role_id);
			user.setRemark(remark);
			user.setLogin_name(login_name);
			user.setPassword(OverFunction.GetMD5Code(password));
			user.setReal_name(real_name);
			user.setAddress(address);
			user.setBirthday(OverFunction.stringToDate(birthday));
			user.setTelephone(telephone);
			user.setEmail(email);
			user.setQq(qq);
			user.setMobile(mobile);
			user.setGender(gender);
			user.setWechat(wechat);
			user.setStatus(status);
			user.setUpdate_user(userloginUser.getId());
			Result result=UserService.upDateUser(user);
			return gson.toJson(result);
		}
		  
		
	}
  
	  //查询用户列表
	  @RequestMapping(value="/api/v0.1/get_userList",method=RequestMethod.GET)
	  @ResponseBody
	  public String getUserlist(HttpServletRequest request) {
		  HttpSession session=request.getSession();
		  User user=(User) session.getAttribute("User");
		  if (user==null) {
			  return  gson.toJson(new Result(1002, "请您重新登录"));
		 }else {
			Result result=UserService.getUserList();
			return gson.toJson(result);
		}
		
		
	}
	    
	  //根据ID查询用户信息
	  @RequestMapping(value="/api/v0.1/get_userinfoByid",method=RequestMethod.GET)
	  @ResponseBody
	  public String getUserinfoById (HttpServletRequest request) {
		  HttpSession session=request.getSession();
		  User user=(User) session.getAttribute("User");
		  if (user==null) {
			  return  gson.toJson(new Result(1002, "请您重新登录"));
		}else {
			 return gson.toJson(new Result(1002, "已经登录", user));
		}
		  
		
	}
	  

}
