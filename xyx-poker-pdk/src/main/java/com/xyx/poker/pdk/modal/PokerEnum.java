package com.xyx.poker.pdk.modal;

/*
 * 花色
 */
public enum PokerEnum {

	_2("2",2),_3("3",3),_4("4",4),_5("5",5),_6("6",6),_7("7",7),_8("8",8),_9("5",9),_10("10",10),
	J("J",11),Q("Q",12),K("K",13),A("A",14),XW("XW",15),DW("DW",17);
	
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
