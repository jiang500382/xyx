package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;
/**
 * {"code":200,"time":1532665929,"message":"","value":{"result":"login success"},"command":"login"}
 */

public class GameRespone implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer code;
	private Long time;
	private String message;
	private JSONObject value;
	private String command;
	
	public GameRespone(String reponse) throws Exception{
		JSONObject jre = null;
		try{
			jre = JSONObject.parseObject(reponse);
		}catch(Exception e){
			throw new Exception("reponse message is not json");
		}
		this.code = jre.getInteger("code");
		this.time = jre.getLong("time");
		this.message = jre.getString("message");
		this.value = jre.getJSONObject("value");
		this.command = jre.getString("command");
	}
	
	public boolean checkSuccess(){
		if( code == 200 ){
			return true;
		}else{
			return false;
		}
	}
	
	public boolean checkCommand(String command){
		if(( command == null ) || ( command == null )){
			return false;
		}
		if( this.command.equals("command")){
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
		js.put("command", command);
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
	public String getCommand() {
		return command;
	}
	public void setCommand(String command) {
		this.command = command;
	}
}
