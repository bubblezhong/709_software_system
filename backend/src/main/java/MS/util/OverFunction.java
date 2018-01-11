package MS.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class OverFunction {

	
	public static void println(String string) {
		System.out.println(string);
	}
	
	
	public static Date stringToDate(String time)  {
		Date date=null;
		SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    try {
			date=formatter.parse(time);
		} catch (ParseException e) {
			date=getDate();
		}finally{
			return date;
		}
		
		
	}
	
	public static Date getDate() {
		
		return new Date();
	}
	
	
	 private final static String[] strDigits = { "0", "1", "2", "3", "4", "5",
         "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" };


	 // 返回形式为数字跟字符串
	 private static String byteToArrayString(byte bByte) {
	     int iRet = bByte;
	     // System.out.println("iRet="+iRet);
	     if (iRet < 0) {
	         iRet += 256;
	     }
	     int iD1 = iRet / 16;
	     int iD2 = iRet % 16;
	     return strDigits[iD1] + strDigits[iD2];
	 }

	
	 // 转换字节数组为16进制字串
    private static String byteToString(byte[] bByte) {
        StringBuffer sBuffer = new StringBuffer();
        for (int i = 0; i < bByte.length; i++) {
            sBuffer.append(byteToArrayString(bByte[i]));
        }
        return sBuffer.toString();
    }

    public static String GetMD5Code(String strObj) {
        String resultString = null;
        try {
            resultString = new String(strObj);
            MessageDigest md = MessageDigest.getInstance("MD5");
            // md.digest() 该函数返回值为存放哈希值结果的byte数组
            resultString = byteToString(md.digest(strObj.getBytes()));
        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
        }
        return resultString;
    }
	
	public static void main(String[] args) {
		OverFunction.println(OverFunction.getDate().toString());
	}
	
}
