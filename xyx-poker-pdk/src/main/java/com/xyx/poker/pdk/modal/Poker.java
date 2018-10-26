package com.xyx.poker.pdk.modal;

public class Poker {
	private PokerEnum name;
	private PokerColorEnum color;
	
	public Poker(PokerEnum name){
		this(name,null);
	}
			
	public Poker(PokerEnum name,PokerColorEnum color){
		this.name = name;
		this.color = color;
		
	}

	public PokerEnum getName() {
		return name;
	}

	public void setName(PokerEnum name) {
		this.name = name;
	}

	public PokerColorEnum getColor() {
		return color;
	}

	public void setColor(PokerColorEnum color) {
		this.color = color;
	}
	
	
	
	
}
