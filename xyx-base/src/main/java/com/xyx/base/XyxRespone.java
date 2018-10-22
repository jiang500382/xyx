package com.xyx.base;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;


public class XyxRespone implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer code;
	private Long time;
	private String message;
	private JSONObject value;
	private String key;
	
	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public XyxRespone(String str) throws Exception{
		JSONObject jre = null;
		try{
			jre = JSONObject.parseObject(str);
		}catch(Exception e){
			throw new Exception("reponse is not json");
		}
		this.code = jre.getInteger("code");
		this.time = jre.getLong("time");
		this.message = jre.getString("message");
		this.value = jre.getJSONObject("value");
	}
	
	public boolean checkSuccess(){
		if( code == 200 ){
			return true;
		}else{
			return false;
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
