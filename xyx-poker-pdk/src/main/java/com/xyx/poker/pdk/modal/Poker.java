package com.xyx.poker.pdk.modal;

public class Poker {
	private String name;
	private Integer value;
	private Integer color;
	
	public Poker(String name){
		this(name,null);
	}
			
	public Poker(String name,Integer color){
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getValue() {
		return value;
	}
	public void setValue(Integer value) {
		this.value = value;
	}
	public Integer getColor() {
		return color;
	}
	public void setColor(Integer color) {
		this.color = color;
	}
	
	
}
