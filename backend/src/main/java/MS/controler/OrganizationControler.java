package MS.controler;


import java.awt.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;













import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import unit.Result;
import unit.User;
import MS.Service.OrganizationService;
import MS.Service.Imp.OrganizationServiceimpl;


/*
 * @author lynn.lqp
 */

@RestController
public class OrganizationControler {
	
	@Autowired
	private OrganizationService OrganizationService;
    Gson gson=new Gson();
		  
    //查询Organization列表
	  @RequestMapping(value="/api/v0.1/get_OrganizationList",method=RequestMethod.GET)
	  @ResponseBody
	  public String getOrganizationlist(HttpServletRequest request) {
		  HttpSession session=request.getSession();
		  User user=(User) session.getAttribute("User");
		  if (user==null) {
			  return  gson.toJson(new Result(1002, "请您重新登录"));
		 }else {
			Result result=OrganizationService.getAllOrganization();
			return gson.toJson(result);
		}
		
		
	}
	
	  

}
