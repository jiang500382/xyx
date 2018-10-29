package com.xyx.scyj;

import com.alibaba.fastjson.JSONObject;
import com.xyx.base.XyxRespone;

public class ScyjRespone extends XyxRespone{

	private static final long serialVersionUID = 1L;
	
	public ScyjRespone(String str) throws Exception {
		super(str);
	}

	@Override
	public void init(JSONObject jre){
		code = jre.getInteger("code");
		message = jre.getString("msg");
		if( message == null ){
			message = jre.getString("error");
		}
		getData(jre,"data");
		
	}
	
	
}
