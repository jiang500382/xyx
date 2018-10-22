package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;

public class UserBets implements Serializable{
	private static final long serialVersionUID = 1L;
	private Integer score = 0;
	private Double bridgeLength;
	private PkGameData nextGameData;
	
	public UserBets(){
		
	}
	
	public UserBets(Double bridgeLength,Integer score,PkGameData nextGameData){
		this.bridgeLength = bridgeLength;
		this.score = score;
		this.nextGameData = nextGameData;
	}
	
	public JSONObject toJSONObject(){
		JSONObject nextPier = new JSONObject();
		nextPier.put("bridgeLength", bridgeLength);
		nextPier.put("pierType", nextGameData.getPierType());
		nextPier.put("pierSpacing", nextGameData.getPierSpacing());
		
		JSONObject js = new JSONObject();
		js.put("nextPier", nextPier);
		js.put("score", score);
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	
	
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	public Double getBridgeLength() {
		return bridgeLength;
	}
	public void setBridgeLength(Double bridgeLength) {
		this.bridgeLength = bridgeLength;
	}

	public PkGameData getNextGameData() {
		return nextGameData;
	}

	public void setNextGameData(PkGameData nextGameData) {
		this.nextGameData = nextGameData;
	}

}
