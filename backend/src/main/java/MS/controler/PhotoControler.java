package MS.controler;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
 





import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 





import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import MS.util.Config;

import com.google.gson.Gson;
 

/*
 * @author lynn.lqp
 */

@RestController
public class PhotoControler {

	Gson gson = new Gson();

//	// 查询role列表
//	@RequestMapping(value = "/api/v0.1/get_roleList", method = RequestMethod.GET)
//	@ResponseBody
//	public String getUserlist(HttpServletRequest request) {
//		HttpSession session = request.getSession();
//		User user = (User) session.getAttribute("User");
//		if (user == null) {
//			return gson.toJson(new Result(1002, "请您重新登录"));
//		} else {
//
//		}
//
//	}

	@RequestMapping("/api/v0.1/updateAvatar")
	public @ResponseBody String modifyTeaAvatar(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	request.setCharacterEncoding("utf-8");	//设置编码
		
	if (!ServletFileUpload.isMultipartContent(request)) {
//	    // 如果不是则停止
//	    PrintWriter writer = response.getWriter();
//	    writer.println("Error: 表单必须包含 enctype=multipart/form-data");
//	    writer.flush();
	    return "s";
	}

    // 配置上传参数
    DiskFileItemFactory factory = new DiskFileItemFactory();
    // 设置内存临界值 - 超过后将产生临时文件并存储于临时目录中
    factory.setSizeThreshold(Config.MEMORY_THRESHOLD);
    // 设置临时存储目录
    factory.setRepository(new File(System.getProperty("java.io.tmpdir")));

    ServletFileUpload upload = new ServletFileUpload(factory);
     
    // 设置最大文件上传值
    upload.setFileSizeMax(Config.MAX_FILE_SIZE);
     
    // 设置最大请求值 (包含文件和表单数据)
    upload.setSizeMax(Config.MAX_REQUEST_SIZE);

    // 构造临时路径来存储上传的文件
    // 这个路径相对当前应用的目录
    String uploadPath = Config.UPLOAD_DIRECTORY;
   
     
    // 如果目录不存在则创建
    File uploadDir = new File(uploadPath);
    if (!uploadDir.exists()) {
        uploadDir.mkdir();
    }

    try {
        // 解析请求的内容提取文件数据
        @SuppressWarnings("unchecked")
        List<FileItem> formItems = upload.parseRequest(request);

        if (formItems != null && formItems.size() > 0) {
            // 迭代表单数据
            for (FileItem item : formItems) {
                // 处理不在表单中的字段
                if (!item.isFormField()) {
                    String fileName = new File(item.getName()).getName();
                    String filePath = uploadPath + File.separator + fileName;
                    File storeFile = new File(filePath);
                    // 在控制台输出文件的上传路径
                    System.out.println(filePath);
                    // 保存文件到硬盘
                    item.write(storeFile);
                    request.setAttribute("message",
                        "文件上传成功!");
                }
            }
        }
        return "";
    } catch (Exception ex) {
        request.setAttribute("message",
                "错误信息: " + ex.getMessage());
        return "";
    }

	}

}
