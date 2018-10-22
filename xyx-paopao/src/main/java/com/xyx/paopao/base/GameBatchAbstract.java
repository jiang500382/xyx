package com.game.base;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public abstract class GameBatchAbstract {
	protected DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	List<Integer> userIds = new ArrayList<Integer>();
	//批量执行
	public abstract  void batchPlay();
	
	public List<Integer> getUserIds() {
		return userIds;
	}
	public void setUserIds(List<Integer> userIds) {
		this.userIds = userIds;
	}
	


}
