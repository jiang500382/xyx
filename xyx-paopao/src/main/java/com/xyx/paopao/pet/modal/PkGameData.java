package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;

public class PkGameData implements Serializable,Comparable<PkGameData> {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Integer pierType;
	private Integer pierSpacing;
	private Integer stage;
	
	public PkGameData(){
		
	}
	
	//第一个点
	public void init(){
		pierType = 162;
		pierSpacing = 100;
	}
	
	public PkGameData(JSONObject js){
		id = js.getInteger("id");
		stage = js.getInteger("stage");
		String space = js.getString("space");
		String[] sp = space.split("-");
		if( sp.length >= 1 ){
			pierSpacing =  Integer.parseInt(sp[0]);
		}
		if( sp.length >= 2 ){
			pierType =  Integer.parseInt(sp[1]);
		}
	}
	
	public JSONObject toJSONObject(){
		JSONObject js = new JSONObject();
		js.put("id", id);
		js.put("pierType", pierType);
		js.put("pierSpacing", pierSpacing);
		js.put("stage", stage);
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	

	@Override
	public int compareTo(PkGameData o) {
		if(this.getId() < o.getId() ){
			return -1;
		}
		if(this.getId() > o.getId() ){
			return 1;
		}else{
			return 0;
		}
		
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getPierType() {
		return pierType;
	}
	public void setPierType(Integer pierType) {
		this.pierType = pierType;
	}
	public Integer getPierSpacing() {
		return pierSpacing;
	}
	public void setPierSpacing(Integer pierSpacing) {
		this.pierSpacing = pierSpacing;
	}
	public Integer getStage() {
		return stage;
	}
	public void setStage(Integer stage) {
		this.stage = stage;
	}

	
	
}