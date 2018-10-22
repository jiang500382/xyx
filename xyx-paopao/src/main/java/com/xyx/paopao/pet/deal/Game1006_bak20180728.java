package com.xxgame.pet.deal;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xxgame.pet.GameWssClient;
import com.xxgame.pet.modal.BridgeLength;
import com.xxgame.pet.modal.CommondDeal;
import com.xxgame.pet.modal.EndpkResult;
import com.xxgame.pet.modal.GameRespone;
import com.xxgame.pet.modal.GameUser;
import com.xxgame.pet.modal.PkGameData;
import com.xxgame.pet.modal.PkResult;
import com.xxgame.pet.modal.UserBets;

public class Game1006_bak20180728 extends CommondDeal {
	private GameWssClient client;
	private boolean play = false;
	private boolean inPlay = false;
	private String errMsg = null;
	private List<PkGameData> petList = new ArrayList<>();
	private Long firstId;
	private List<GameUser> users = new ArrayList<GameUser>();
	private PkResult my = new PkResult();
	private PkResult matcher = new PkResult();
	private double perfectChance = 0.5; // perfectLength=100时perfect的概率
	private long stepSleepTime = 1000; // 每步思考时间,用于控制速度
	private EndpkResult endpkResult = null;

	public Game1006_bak20180728(GameWssClient client) {
		this.client = client;
		addCommond("matchsuccess");
		addCommond("startpkgame");
		addCommond("startpk");
		addCommond("betpk");
		addCommond("disconnect");
		addCommond("endpk");
	}

	synchronized public EndpkResult play() throws Exception {
		try {
			inPlay = true;
			play = false;
			errMsg = null;
			my.init();
			matcher.init();
			firstId = null;
			petList.clear();

			JSONObject joinmatch = new JSONObject();
			joinmatch.put("game_id", 1005);
			client.sendCommond("joinmatch", joinmatch);
			// 等待开始
			int waiteStartConter = 0;
			while (true) {
				if (play) {
					break;
				}
				if (waiteStartConter >= 60) {
					throw new Exception("waite start play time out");
				}
				Thread.sleep(500);
				waiteStartConter += 1;
			}
			// 等待结束
			int startConter = 0;
			while (play) {
				if (startConter >= 40) {
					throw new Exception("play step exception");
				} else {
					startConter += 1;
				}
				UserBets bets = makeUserBets();
				// log("UserBets=" + bets );
				// log("my=" + my );
				randomStepSleep(my.getLength());
				if (bets != null) {
					JSONObject user_bets = new JSONObject();
					user_bets.put("user_bets", bets.toJSONObject());
					client.sendCommond("betpk", user_bets);
				}
			}
			log("my=" + my);
			Thread.sleep(1000 + (long)( Math.random() *5000 ) );
			client.sendCommond("leave_room", new JSONObject());
			if (endpkResult == null) {
				throw new Exception("get pk result failed");
			}
			// log("result:" + endpkResult.makePkResult() );
			inPlay = false;
			return endpkResult;
		} catch (Exception e) {
			inPlay = false;
			errMsg = e.getMessage();
			throw e;
		}
	}

	@Override
	public void dealCommond(GameRespone res) {
		try {
			if (!inPlay) {
				return;
			}
			if (!res.checkSuccess()) {
				errMsg = res.getMessage();
				return;
			}

			String cmd = res.getCommand();
			JSONObject value = res.getValue();
			switch (cmd) {
			case "matchsuccess":
				String roomName = value.getString("room_name");
				firstId = value.getLong("first_id ");
				JSONArray matchList = value.getJSONArray("match_list");
				users.clear();
				for (int i = 0; i < matchList.size(); i++) {
					GameUser user = new GameUser(matchList.getJSONObject(i));
					users.add(user);
				}

				JSONObject startmatch = new JSONObject();
				startmatch.put("game_id", 1005);
				startmatch.put("room_name", roomName);
				client.sendCommond("startmatch", startmatch);
				break;
			case "startpkgame":
				petList.clear();
				JSONArray petArray = value.getJSONArray("pet_list");
				for (int i = 0; i < petArray.size(); i++) {
					JSONObject pet = petArray.getJSONObject(i);
					PkGameData pd = new PkGameData(pet);
					petList.add(pd);
				}
				if (petList.size() > 0) {
					petList.get(0).init();
				}
			case "startpk":
				if (firstId != client.getUserId()) {
					Thread.sleep(5000);
				}
				play = true;
				break;
			case "betpk":
				play = true;
				break;
			case "endpk":
				play = false;
				endpkResult = new EndpkResult(value);
				break;
			default:
				break;
			}
		} catch (Exception e) {
			errMsg = e.getMessage();
		}
	}

	public void randomStep(PkGameData now) {
		double f = perfectChance + (Math.random() - 0.5) * 0.1;
		if( f >= 1.0 ){
			f = 1.0;
		}
		if( f < 0){
			f = 0;
		}
		randomStep(now, my, f);
	}

	public void randomStep(PkGameData now, PkResult result, double perfectChance) {
		BridgeLength bridgeLength = new BridgeLength(now);
		Integer perfectLength = bridgeLength.getPerfect();
		double f1 = perfectChance * 200;
		f1 = f1 / (perfectLength + f1);
		double r1 = Math.random(); // 判断成功失败
		double r2 = Math.random(); // 计算偏差
		double r3 = Math.random(); // 判断长长还是短
		if (f1 > r1) {
			my.step("perfect", perfectLength + r2 * 14 - 7);
			return;
		}
		r1 = r1 / f1;
		double successChange = perfectChance * (0.95 / 0.5);
		double k = 1.0 / (3 - 1);
		r2 = (r2 * r2 + k * r2) / (k + 1);
		if (r1 > successChange) {
			//
			double successLength = now.getPierType() / 2.0 - 7;
			successLength *= (1 - r2);
			if (r3 > 0.6) {
				my.step("success", bridgeLength.getMax() - successLength);
			} else {
				my.step("success", bridgeLength.getMin() + successLength);
			}
		} else {
			// failed
			double failedLength = now.getPierSpacing() - 10;
			if (r3 > 0.7) {
				failedLength = 20L * r2;
				my.step("long", bridgeLength.getMax() + failedLength);
			} else {
				if (failedLength > 40) {
					failedLength = 40;
				}
				my.step("short", bridgeLength.getMin() - failedLength);
			}
		}
	}

	public UserBets makeUserBets() {
		if (my.getStep() >= (petList.size() - 1)) {
			return null;
		}
		PkGameData now = petList.get(my.getStep());
		randomStep(now);
		UserBets ub = new UserBets();
		ub.setScore(my.getScore());
		ub.setBridgeLength(my.getLength());
		ub.setNextGameData(petList.get(my.getStep()));
		return ub;
	}

	public long randomStepSleep(double length) {
		double t = 0.0043 * length + 1.5;
		t += 0.5 * Math.random();
		t *= 1000;
		try {
			t += stepSleepTime * Math.random();
			long sleep = (long) t;
			Thread.sleep(sleep);
		} catch (Exception e) {

		}
		return 0L;
	}

	public GameWssClient getClient() {
		return client;
	}

	public void setClient(GameWssClient client) {
		this.client = client;
	}

	public boolean isPlay() {
		return play;
	}

	public void setPlay(boolean play) {
		this.play = play;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}

	DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

	public void log(String message) {
		String sdate = formatter.format(new Date());
		System.out.println(sdate + "," + message);
	}

}
