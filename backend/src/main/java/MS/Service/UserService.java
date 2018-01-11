package MS.Service;

import unit.Result;
import unit.User;


public interface UserService {

	public Result login(String name,String password);

	public Result getUserList();

	public Result getUserByID(int id);
	
	public Result addUser(User user);

	public Result upDateUser(User user);
}