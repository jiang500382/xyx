package com.xyx.base.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class XyxUtil {
	
	static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
	
	public static void log(String msg){
		System.out.println(sdf.format(new Date()) + ","+msg);
	}
	
	public static void err(String msg){
		System.out.println(sdf.format(new Date()) + ",Err:"+msg);
	}
	
	public static String md5(String str) throws NoSuchAlgorithmException {
		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(str.getBytes());
		String md5 = new BigInteger(1, md.digest()).toString(16);
		// BigInteger会把0省略掉，需补全至32位
		return fillMd5(md5);
	}

	public static String fillMd5(String md5) {
		return md5.length() == 32 ? md5 : fillMd5("0" + md5);
	}
	
	public static void sleep(Long time){
		try{
			if( time <=0){
				return;
			}
			Thread.sleep(time);
		}catch(Exception e){
			
		}
	}
	
	public static void randomSleep(Integer fixedTime,Integer randomTime){
		randomSleep( (long)fixedTime,(long)randomTime );
	}
	
	public static void randomSleep(Long fixedTime,Long randomTime){
		double r = Math.random() * randomTime;
		long sleepTime = (long)r + fixedTime;
		sleep( sleepTime );
	}
	
	
	public static String getStrTime(){
		Date now = new Date();
		return sdf.format(now);
	}
	
	static SimpleDateFormat sdf_file = new SimpleDateFormat("yyyyMMdd_HHmmss"); 
	public static String getFilenNameTinm(){
		Date now = new Date();
		return sdf_file.format(now);
	}
	
}
