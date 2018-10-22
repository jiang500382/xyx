package com.game.base;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.CookieStore;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSONObject;

public class GameHttpClient {
	public CookieStore cookieStore = new BasicCookieStore();
	public CloseableHttpClient httpCilent = HttpClients.custom().setDefaultCookieStore(cookieStore).build();

	// 配置超时时间
	int timeout = 5000;
	int connectTimeout = 5000;
	int requestTimeout = 5000;
	int socketTimeout = 5000;
	
	RequestConfig postRequestConfig = RequestConfig.custom().setConnectTimeout(connectTimeout).setConnectionRequestTimeout(requestTimeout)
			.setSocketTimeout(socketTimeout).setRedirectsEnabled(true).build();
	RequestConfig getRequestConfig = RequestConfig.custom().setConnectTimeout(connectTimeout).setConnectionRequestTimeout(requestTimeout)
			.setSocketTimeout(socketTimeout).setRedirectsEnabled(true).build();
	
	public Map<String,String> urlencodedHeader = new HashMap<String,String>();
	
	public GameHttpClient(){
		urlencodedHeader.put("content-type", "application/x-www-form-urlencoded");
	}
	
	
	public String phaseReponse2string(HttpResponse response) throws Exception{
		if (response == null) {
			return null;
		}
		int code = response.getStatusLine().getStatusCode();
		if (code == 200) {
			return EntityUtils.toString(response.getEntity());
		} else {
			throw new Exception(response.getStatusLine().getReasonPhrase());
		}
	}

	public JSONObject phaseReponse2json(HttpResponse response) throws Exception{
		String str = phaseReponse2string(response);
		if( str == null ){
			return null;
		}else{
			return JSONObject.parseObject( str );
		}
	}
	
	public HttpResponse post(String url, String body) throws Exception {
		StringEntity entity =null;
		if( body != null ){
			entity = new StringEntity(body) ;
		}
		return post(url,entity,urlencodedHeader);
	}
	
	public HttpResponse post(String url, String body, Map<String, String> headers) throws Exception {
		StringEntity entity =null;
		if( body != null ){
			entity = new StringEntity(body) ;
		}
		return post(url,entity,headers);
	}
	
	public HttpResponse post(String url, HttpEntity entity, Map<String, String> headers) throws Exception {
		HttpPost httpPost = new HttpPost(url);
		
		try {
			httpPost.setConfig(postRequestConfig);
			for (String key : headers.keySet()) {
				httpPost.addHeader(key, headers.get(key));
			};
			if( entity != null){
				httpPost.setEntity(entity);
			}
			
			HttpResponse httpResponse = httpCilent.execute(httpPost);
			if (httpResponse != null) {
				int code = httpResponse.getStatusLine().getStatusCode();
				if (code == 302) {
					Header header = httpResponse.getFirstHeader("location");
					String newuri = header.getValue();
					newuri = newuri + "&" + entity.toString();
					return get(newuri, headers);
				//	return post(newuri, entity, headers);
				}
			}
			return httpResponse;
		} catch (Exception e) {
			throw e;
		} finally {

		}
	}
	
	
	
	public HttpResponse get(String url) throws Exception {
		return get(url,new HashMap<String, String>());
	}

	public HttpResponse get(String url,Map<String, String> headers) throws Exception {

		HttpGet httpGet = new HttpGet(url);
		
		try {
			httpGet.setConfig(getRequestConfig);
			for (String key : headers.keySet()) {
				httpGet.addHeader(key, headers.get(key));
			};
			
			HttpResponse httpResponse = httpCilent.execute(httpGet);
			if (httpResponse != null) {
				int code = httpResponse.getStatusLine().getStatusCode();
				if (code == 302) {
					Header header = httpResponse.getFirstHeader("location");
					String newuri = header.getValue();
					return get(newuri, headers);
				}
			}
			return httpResponse;
		} catch (Exception e) {
			throw e;
		} finally {

		}
	}

	public void setCookieStore(List<BasicClientCookie> cookielist) {
		for (BasicClientCookie cookie : cookielist) {
			cookieStore.addCookie(cookie);
		}
	}

	public void createCookie(List<BasicClientCookie> cookielist) {
		for (BasicClientCookie cookie : cookielist) {
			cookieStore.addCookie(cookie);
		}
	}

}

