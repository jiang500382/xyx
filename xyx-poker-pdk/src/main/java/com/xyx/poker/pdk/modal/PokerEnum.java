package com.xyx.poker.pdk.modal;

/*
 * 花色
 */
public enum PokerEnum {

	_2("2",1),_3("3",2),heart("heart",3),spade("spade",4);
	
	private String name;
	private Integer value;
	PokerEnum(String name,Integer value){
		this.name = name;
		this.value = value;
	}
	
	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
