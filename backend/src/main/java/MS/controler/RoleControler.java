package MS.controler;


import java.awt.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;











import org.apache.catalina.connector.Request;
import org.jboss.logging.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import unit.Result;
import unit.User;
import MS.Dao.impl.UserDaoImpl;
import MS.Service.RoleService;
import MS.Service.UserService;
import MS.Service.Imp.RoleServiceimpl;
import MS.Service.Imp.UserServiceImp;
import MS.util.OverFunction;

/*
 * @author lynn.lqp
 */

@RestController
public class RoleControler {
	
	@Autowired
	private RoleService roleService;
    Gson gson=new Gson();

 
		  
    //查询role列表
	  @RequestMapping(value="/api/v0.1/get_roleList",method=RequestMethod.GET)
	  @ResponseBody
	  public String getUserlist(HttpServletRequest request) {
		  HttpSession session=request.getSession();
		  User user=(User) session.getAttribute("User");
		  if (user==null) {
			  return  gson.toJson(new Result(1002, "请您重新登录"));
		 }else {
			Result result=roleService.getAllRole();
			return gson.toJson(result);
		}
		
		
	}
	
	  

}
