package MS.Dao;

import java.util.List;
import java.util.Map;

public interface BaseDao <T>{
	public List<Map<String, Object>> querrylist() throws Exception;
	public List<Map<String, Object>> querryByID(int id) throws Exception;
	public void add(T t) throws Exception;
	public void update(T t) throws Exception;
}
