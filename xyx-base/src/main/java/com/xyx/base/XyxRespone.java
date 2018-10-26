package com.xyx.base;

import java.io.Serializable;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;


public class XyxRespone implements Serializable {
	private static final long serialVersionUID = 1L;
	protected Integer code;
	protected Long time;
	protected String message;
	protected JSONObject value;
	protected String key;
	protected JSONArray array;
	
	public JSONArray getArray() {
		return array;
	}

	public void setArray(JSONArray array) {
		this.array = array;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public XyxRespone(String str) throws Exception{
		init(str);
	}
	
	public XyxRespone(JSONObject jre) throws Exception{
		init(jre);
	}
	
	public  void init(String str) throws Exception{
		JSONObject jre = null;
		try{
			jre = JSONObject.parseObject(str);
		}catch(Exception e){
			throw new Exception("reponse is not json");
		}
		init(jre);
	}
	
	public void init(JSONObject jre) throws Exception{
		this.code = jre.getInteger("code");
		this.time = jre.getLong("time");
		this.message = jre.getString("message");
		getData(jre,"data");
	}
	
	protected void getData(JSONObject jre,String key){
		try{
			value = jre.getJSONObject(key);
			array = null;
		}catch(Exception e){
			array = jre.getJSONArray(key);
			value = null;
		}
	}
	
	public boolean checkSuccess()  throws Exception{
		return checkSuccess(true);
	}
	
	public boolean checkSuccess(boolean execption) throws Exception{
		if( code == 200 ){
			return true;
		}else{
			if(execption){
				throw new Exception(message);
			}else{
				return false;
			}
			
		}
	}
	

	
	
	public JSONObject toJSONObject(){
		JSONObject js = new JSONObject();
		js.put("code", code);
		js.put("time", time);
		js.put("message", message);
		js.put("value", value);
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public Long getTime() {
		return time;
	}
	public void setTime(Long time) {
		this.time = time;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public JSONObject getValue() {
		return value;
	}
	public void setValue(JSONObject value) {
		this.value = value;
	}
}
