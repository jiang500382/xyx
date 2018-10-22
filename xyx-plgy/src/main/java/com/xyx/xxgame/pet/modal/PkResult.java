package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;

public class PkResult implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer step = 0;
	private Integer score = 0;
	private Integer success = 0;
	private Integer failed = 0;
	private Integer perfect = 0;
	
	//上次增加的分数
	private Integer add = 10;
	
	/**
	 * 上次的长度
	 */
	private Double length = 0.0;
	/**
	 * perfect,success,long,short
	 */
	private String  record = "";
	
	public PkResult( ){
	}
	
	public void init(){
		step = 0;
		score = 0;
		success = 0;
		failed = 0;
		perfect = 0;
		length = 0.0;
		record = "";
	}
	
	public void step(String  record,Double length){
		this.length = length;
		this.record = record;
		switch( record ){
		case "perfect":
			step += 1;
			perfect += 1;
			success += 1;
			add += 10;
			score += add;
			break;
		case "success":
			step += 1;
			success += 1;
			add = 10;
			score += add;
			break;
		case "long":
		case "short":
			failed += 1;
			add = 10;
			break;
			default:
				break;
		}
	}
	
	public JSONObject toJSONObject(){
		JSONObject js = new JSONObject();
		js.put("step", step);
		js.put("score", score);
		js.put("success", success);
		js.put("failed", failed);
		js.put("perfect", perfect);
		js.put("length", length);
		js.put("record", record);
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	
	public Integer getStep() {
		return step;
	}
	public void setStep(Integer step) {
		this.step = step;
	}
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	public Integer getSuccess() {
		return success;
	}
	public void setSuccess(Integer success) {
		this.success = success;
	}
	public Integer getFailed() {
		return failed;
	}
	public void setFailed(Integer failed) {
		this.failed = failed;
	}
	public Integer getPerfect() {
		return perfect;
	}
	public void setPerfect(Integer perfect) {
		this.perfect = perfect;
	}

	public Integer getAdd() {
		return add;
	}

	public void setAdd(Integer add) {
		this.add = add;
	}

	public Double getLength() {
		return length;
	}

	public void setLength(Double length) {
		this.length = length;
	}

	public String getRecord() {
		return record;
	}

	public void setRecord(String record) {
		this.record = record;
	}
	
}
