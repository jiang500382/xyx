package com.xxgame.pet.modal;

import java.util.ArrayList;
import java.util.List;

/**
 * 处理wss响应
 * @author jls
 *
 */
public  abstract class CommondDeal {
	
	private List<String> commonds = new ArrayList<String>();

	//处理命令函数
	public abstract  void dealCommond( GameRespone res);
	
	public List<String> getCommonds() {
		return commonds;
	}

	public void setCommonds(List<String> commonds) {
		this.commonds = commonds;
	}
	
	public void addCommond( String commond){
		commonds.add(commond);
	}
}
