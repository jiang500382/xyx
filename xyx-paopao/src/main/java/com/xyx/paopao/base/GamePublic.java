package com.game.base;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class GamePublic {
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
	
}
