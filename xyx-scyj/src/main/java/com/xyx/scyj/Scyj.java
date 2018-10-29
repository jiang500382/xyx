package com.xyx.scyj;

import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xyx.base.XyxHttpClient;

public class Scyj {
	String baseUrl = "https://scyj.60nf.com/api";
	XyxHttpClient client = new XyxHttpClient();

	int uid;

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public Scyj(int uid) {
		this.uid = uid;
	}

	// first_login
	public ScyjRespone getProgress() throws Exception {
		String url = baseUrl + "/game/getProgress";
		String body = "uid=" + uid;
		String str = client.post(url, body);
		ScyjRespone res = new ScyjRespone(str);
		// System.out.println(res);
		res.checkSuccess();
		return res;
	}

	public ScyjRespone getTesting() throws Exception {
		String url = baseUrl + "/setting/getTesting";
		String body = "uid=" + uid + "&is_jp=0&is_jx=FRD-L19";
		String str = client.post(url, body);
		ScyjRespone res = new ScyjRespone(str);
		res.checkSuccess();
		return res;
	}

	public ScyjRespone sign() throws Exception {
		String url = baseUrl + "/game/sign";
		String body = "uid=" + uid;
		String str = client.post(url, body);
		ScyjRespone res = new ScyjRespone(str);
		res.checkSuccess();
		return res;
	}

	public ScyjRespone getReward(String build_id) throws Exception {
		String url = baseUrl + "/game/getReward";
		String body = "uid=" + uid + "&build_id=" + build_id;
		String str = client.post(url, body);
		ScyjRespone res = new ScyjRespone(str);
		res.checkSuccess();
		return res;
	}
	
	public String putForward() throws Exception {
		return putForward(3);
	}

	public String putForward(int total) throws Exception {
		String url = baseUrl + "/game/putForward";
		String body = "uid=" + uid + "&total="+total;
		String str = client.post(url, body);
		ScyjRespone res = new ScyjRespone(str);
		System.out.println(res);
		res.checkSuccess();

		// {"data":{"sn":"TX20181026223209211190"},"msg":"操作成功！","code":200}
		JSONObject data = res.getValue();
		if (data == null) {
			throw new Exception("data is null");
		}
		String sn = data.getString("sn");
		if (sn == null) {
			throw new Exception("sn is null");
		}
		return sn;
	}

	public JSONObject getCurrentData() throws Exception {
		JSONObject data = new JSONObject();
		data.put("uid", uid);
		ScyjRespone res = getProgress();
		JSONObject value = res.getValue();
		Long last_get_time = value.getLong("last_get_time");
		Long current_time = value.getLong("current_time");
		data.put("last_get_time", last_get_time);
		data.put("current_time", current_time);
		 Long diff_time = (current_time-last_get_time)*100/(3600*24);
		 data.put("diff_time", diff_time/100.0);

		data.put("last_time_diff", value.getString("last_time_diff"));
		double  money = value.getDouble("money");
		if( money >= 3 ){
			data.put("flag", true);
		}
		data.put("money", value.getString("money"));
		data.put("is_sign", value.getString("is_sign"));
		
		JSONObject user_info = value.getJSONObject("user_info");
		if (user_info == null) {
			throw new Exception("user_info is null");
		}
		
		data.put("money_total", user_info.getString("money_total"));
		return data;
	}

	public JSONObject play( ) throws Exception {
		JSONObject data = getCurrentData();
		Integer is_sign = data.getInteger("is_sign");
		if( ( is_sign != null ) && ( is_sign == 1 ) ){
			return  data;
		}
		return play(data);
	}
	public JSONObject play(JSONObject data ) throws Exception {

		ScyjRespone res1 = sign();
		JSONArray build_jar = res1.getValue().getJSONArray("build_id");
		String build_id = build_jar.getString(0);
		ScyjRespone res2 = getReward(build_id);
		Double price = res2.getValue().getDouble("price");
		Double money = data.getDouble("money") + price;
		data.put("money", money);
		data.put("price", price);
		return data;
	}

	public void tx(String sn, String openid) throws Exception {
		//String url = "https://hbcg.ccovc.com/album/getdraw";
		String url = "https://hbcg.ccovc.com//album/getdraw";
		// {"draw_sn":"TX20181026223209211190","openid":"oOZZc5Wc1dWpEVSk9CJf6VgE2NFE"}
		//{"draw_sn":"TX20181029134015683190","openid":"oOZZc5Wc1dWpEVSk9CJf6VgE2NFE"}
		JSONObject body = new JSONObject();
		body.put("draw_sn", sn);
		body.put("openid", openid);
		
		Map<String, String> header = new HashMap<String, String>();
		header.put("content-type", "application/json");
		header.put("User-Agent", "Mozilla/5.0 (Linux; Android 5.1.1; FRD-L19 Build/LMY48Z) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36 MicroMessenger/6.6.7.1321(0x26060739) NetType/WIFI Language/zh_CN MicroMessenger/6.6.7.1321(0x26060739) NetType/WIFI Language/zh_CN");
		header.put("referer","https://servicewechat.com/wx3ec390cc2010fc31/10/page-frame.html");
		header.put("gameid","123");
		
		JSONObject res = client.postJSON(url, body.toString(),header);

		System.out.println(res);

		int code = res.getIntValue("code");
		if (code != 200) {
			throw new Exception(res.getString("error"));
		}
	}

}
