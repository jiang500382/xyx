package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;

public class GameUser  implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer userId;
	private String gender;
	private String userName;
	private Integer age;
	private String userIcon;
	private String location;
	
	
	public GameUser(String str) throws Exception{
		JSONObject juser = null;
		try{
			juser = JSONObject.parseObject(str);
		}catch(Exception e){
			throw new Exception("user string is not json");
		}
		init(juser);
	}
	
	public GameUser(JSONObject juser){
		init(juser);
	}
	
	private void init(JSONObject data){
		userId = data.getInteger("user_id");
		gender = data.getString("gender");
		userName = data.getString("user_name");
		age = data.getInteger("age");
		userIcon = data.getString("user_icon");
		location = data.getString("location");
	}
	
	public JSONObject toJSONObject(){
		JSONObject js = new JSONObject();
		js.put("userId", userId);
		js.put("gender", gender);
		js.put("userName", userName);
		js.put("age", age);
		js.put("location", location);
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	
	public String toShortString(){
		StringBuffer bu = new StringBuffer();
		bu.append( userName );
		bu.append( "(" );
		bu.append( userId );
		bu.append( ")" );
		return bu.toString();
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getUserIcon() {
		return userIcon;
	}

	public void setUserIcon(String userIcon) {
		this.userIcon = userIcon;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
