package com.xyx.base.wss;

import java.util.ArrayList;
import java.util.List;

import com.xyx.base.XyxRespone;

/**
 * 处理wss响应
 * @author jls
 *
 */
public  abstract class XyxWssDeal {
	
	private List<String> keys = new ArrayList<String>();

	//处理函数
	public abstract  void deal(XyxRespone res);
	
	protected boolean checkKey(XyxRespone res){
		if( res == null){
			return false;
		}
		String key = res.getKey();
		return checkKey(key);
	}
	
	protected boolean checkKey( String key){
		if( key == null ){
			return false;
		}
		if(keys.contains(key)){
			return true;
		}else{
			return false;
		}
	}
	
	public List<String> getKeys() {
		return keys;
	}

	public void setKeys(List<String> keys) {
		this.keys = keys;
	}
	
	public void addkey( String key){
		keys.add(key);
	}
	
	public void removeKey( String key){
		keys.remove(key);
	}
}
