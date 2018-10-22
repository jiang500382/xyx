package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;

public class BridgeLength implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer min;
	private Integer max;
	private Integer perfect;
	
	public BridgeLength(PkGameData data){
		this(data.getPierSpacing(),data.getPierType());
	}
	
	public BridgeLength(Integer pierSpacing,Integer pierType){
		perfect  = 10 + pierSpacing + pierType/2;
		min = 10 + pierSpacing;
		max = 10 + pierSpacing + pierType;
	}
	
	public JSONObject toJSONObject(){
		JSONObject js = new JSONObject();
		js.put("perfect", perfect);
		js.put("min", min);
		js.put("max", max);
		js.put("perfectMin", this.getPerfectMin());
		js.put("perfectMax", this.getPerfectMax());
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	
	
	public Integer computePerfect(PkGameData now, PkGameData next){
		return computePerfect(now.getPierSpacing(),next.getPierType());
	}
	
	public Integer computePerfect(Integer pierSpacing,Integer pierType){
		Integer  bridgeLength  = 10 + pierSpacing + pierType/2 - 7 ;
		return bridgeLength;
	}
	
	public Integer getMin() {
		return min;
	}
	public void setMin(Integer min) {
		this.min = min;
	}
	public Integer getMax() {
		return max;
	}
	public void setMax(Integer max) {
		this.max = max;
	}
	public Integer getPerfect() {
		return perfect;
	}
	public void setPerfect(Integer perfect) {
		this.perfect = perfect;
	}
	public Integer getPerfectMin() {
		return perfect - 7;
	}
	public Integer getPerfectMax() {
		return perfect + 7;
	}
}
