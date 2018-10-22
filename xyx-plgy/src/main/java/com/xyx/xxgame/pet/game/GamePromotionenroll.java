package com.xxgame.pet.game;

import com.xxgame.pet.GameWssClient;
import com.xxgame.pet.modal.EndpkResult;

public class GamePromotionenroll extends GameBase{

	private Integer typeId;
	public GamePromotionenroll(GameWssClient client,Integer typeId) {
		super(client);
		this.typeId = typeId ;
	}
	
	synchronized public EndpkResult play() throws Exception {
		throw new Exception("not defined");
	}

}
