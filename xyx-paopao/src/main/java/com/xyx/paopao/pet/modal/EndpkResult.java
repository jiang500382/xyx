package com.xxgame.pet.modal;

import java.io.Serializable;

import com.alibaba.fastjson.JSONObject;

public class EndpkResult implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long winUserid;
	private Integer ispromotion;
	private Integer rank;
	private Integer prUserCount;
	
	private UserPkResult loseUser;
	private UserPkResult winUser;
	private Long time;
	
	public EndpkResult(){
		
	}
	public EndpkResult(JSONObject data){
		winUserid = data.getLong("win_userid");
		time = data.getLong("time");
		ispromotion = data.getInteger("ispromotion");
		rank = data.getInteger("rank");
		prUserCount = data.getInteger("prUserCount");
		
		loseUser = new UserPkResult ( data.getJSONObject("lose_user") );
		winUser = new UserPkResult ( data.getJSONObject("win_user") );
	}
	
	public JSONObject toJSONObject(){
		JSONObject js = new JSONObject();
		js.put("winUserid", winUserid);
		js.put("time", time);
		js.put("loseUser", loseUser);
		js.put("winUser", winUser);
		return js;
	}
	
	@Override
	public String toString(){
		return toJSONObject().toString();
	}
	
	public String makePkResult(){
		StringBuffer bu = new StringBuffer();
		bu.append( winUser.toShortString() );
		bu.append( ":" );
		bu.append( loseUser.toShortString() );
		bu.append( "=" );
		bu.append( winUser.getScore() );
		bu.append( ":" );
		bu.append( loseUser.getScore() );
		return bu.toString();
	}
	
	
	
	public Long getWinUserid() {
		return winUserid;
	}
	public void setWinUserid(Long winUserid) {
		this.winUserid = winUserid;
	}
	public UserPkResult getLoseUser() {
		return loseUser;
	}
	public void setLoseUser(UserPkResult loseUser) {
		this.loseUser = loseUser;
	}
	public UserPkResult getWinUser() {
		return winUser;
	}
	public void setWinUser(UserPkResult winUser) {
		this.winUser = winUser;
	}
	public Long getTime() {
		return time;
	}
	public void setTime(Long time) {
		this.time = time;
	}
	
	public Integer getIspromotion() {
		return ispromotion;
	}
	public void setIspromotion(Integer ispromotion) {
		this.ispromotion = ispromotion;
	}
	public Integer getRank() {
		return rank;
	}
	public void setRank(Integer rank) {
		this.rank = rank;
	}
	public Integer getPrUserCount() {
		return prUserCount;
	}
	public void setPrUserCount(Integer prUserCount) {
		this.prUserCount = prUserCount;
	}




	public class  UserPkResult implements Serializable {
		private static final long serialVersionUID = 1L;
		
		private UserPkResult(){
			
		}
		private UserPkResult(JSONObject data){
			userId = data.getLong("user_id");
			score = data.getInteger("score");
			userName = data.getString("user_name");
			paoGold = data.getInteger("pao_gold");
			userIcon = data.getString("user_icon");
			winChang = data.getInteger("win_chang");
			maxScore = data.getInteger("maxScore");
		}
		
		public JSONObject toJSONObject(){
			JSONObject js = new JSONObject();
			js.put("userId", userId);
			js.put("score", score);
			js.put("userName", userName);
			js.put("paoGold", paoGold);
			js.put("userIcon", userIcon);
			js.put("winChang", winChang);
			js.put("maxScore", maxScore);
			return js;
		}
		
		@Override
		public String toString(){
			return toJSONObject().toString();
		}
		
		public String toShortString(){
			StringBuffer bu = new StringBuffer();
			bu.append( userName );
			bu.append( "(" );
			bu.append( userId );
			bu.append( ")" );
			return bu.toString();
		}
		
		private Integer score;
		private Long userId;
		private Integer paoGold;
		
		private String userName;
		private Integer winChang;
		private Integer maxScore;
		private String userIcon;

		public Integer getScore() {
			return score;
		}
		public void setScore(Integer score) {
			this.score = score;
		}
		public Long getUserId() {
			return userId;
		}
		public void setUserId(Long userId) {
			this.userId = userId;
		}
		public Integer getPaoGold() {
			return paoGold;
		}
		public void setPaoGold(Integer paoGold) {
			this.paoGold = paoGold;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public Integer getWinChang() {
			return winChang;
		}
		public void setWinChang(Integer winChang) {
			this.winChang = winChang;
		}
		public Integer getMaxScore() {
			return maxScore;
		}
		public void setMaxScore(Integer maxScore) {
			this.maxScore = maxScore;
		}
		public String getUserIcon() {
			return userIcon;
		}
		public void setUserIcon(String userIcon) {
			this.userIcon = userIcon;
		}
		
		
		
	}
}
