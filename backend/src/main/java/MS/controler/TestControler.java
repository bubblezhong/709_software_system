package MS.controler;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestControler {

	@Autowired 
	JdbcTemplate jdbctemlete;
	
	@RequestMapping(value = "/api/v0.1/test3", method = RequestMethod.GET)
	@ResponseBody
	public String getUserlist() {
		return (jdbctemlete.queryForList("select * from \"user\"").toString());
	}

	
	
	
}
