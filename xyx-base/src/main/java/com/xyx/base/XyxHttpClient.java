package com.xyx.base;

import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.CookieStore;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSONObject;

public class XyxHttpClient {
	private CookieStore cookieStore = new BasicCookieStore();
	private CloseableHttpClient httpCilent;
	private Exception httpCilentException;
	
	private RequestConfig postRequestConfig;
	private RequestConfig getRequestConfig;

	private Map<String, String> urlencodedHeader = new HashMap<String, String>();
	private Map<String, String> jsonHeader = new HashMap<String, String>();

	public XyxHttpClient() {
		this(false);
	}

	public XyxHttpClient(boolean https) {
		try {
			urlencodedHeader.put("content-type", "application/x-www-form-urlencoded");
			jsonHeader.put("content-type", "application/json;charset=UTF-8");
			setTimeout(5000);

			HttpClientBuilder httpClientBuilder = HttpClients.custom().setDefaultCookieStore(cookieStore);

			if (https) {
				ignoreVerifySSL(httpClientBuilder);
			}
			httpCilent = httpClientBuilder.build();

		} catch (Exception e) {
			httpCilent = null;
			httpCilentException = e;
		}
	}

	public void setTimeout(int timeout) {
		setTimeout(timeout, timeout, timeout);
	}

	public void setTimeout(int connectTimeout, int requestTimeout, int socketTimeout) {
		postRequestConfig = RequestConfig.custom().setConnectTimeout(connectTimeout)
				.setConnectionRequestTimeout(requestTimeout).setSocketTimeout(socketTimeout).setRedirectsEnabled(true)
				.build();
		getRequestConfig = RequestConfig.custom().setConnectTimeout(connectTimeout)
				.setConnectionRequestTimeout(requestTimeout).setSocketTimeout(socketTimeout).setRedirectsEnabled(true)
				.build();
	}

	private String phaseReponse2string(HttpResponse response) throws Exception {
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

	public JSONObject phase2json(String str) throws Exception {
		if (str == null) {
			return null;
		} else {
			return JSONObject.parseObject(str);
		}
	}

	public JSONObject postJSON(String url, String body) throws Exception {
		return phase2json(post(url, body));
	}

	public JSONObject postJSON(String url, JSONObject body) throws Exception {
		return phase2json(post(url, body));
	}

	public JSONObject postJSON(String url, String body, Map<String, String> headers) throws Exception {
		return phase2json(post(url, body, headers));
	}

	public JSONObject postJSON(String url, HttpEntity entity, Map<String, String> headers) throws Exception {
		return phase2json(post(url, entity, headers));
	}

	public String post(String url, String body) throws Exception {
		StringEntity entity = null;
		if (body != null) {
			entity = new StringEntity(body);
		}
		return post(url, entity, urlencodedHeader);
	}

	public String post(String url, JSONObject body) throws Exception {
		StringEntity entity = null;
		if (body != null) {
			entity = new StringEntity(body.toString());
		}
		return post(url, entity, jsonHeader);
	}

	public String post(String url, String body, Map<String, String> headers) throws Exception {
		StringEntity entity = null;
		if (body != null) {
			entity = new StringEntity(body);
		}
		return post(url, entity, headers);
	}

	public String post(String url, HttpEntity entity, Map<String, String> headers) throws Exception {
		if( httpCilent == null){
			throw httpCilentException;
		}
		HttpPost httpPost = new HttpPost(url);
		try {
			httpPost.setConfig(postRequestConfig);
			for (String key : headers.keySet()) {
				httpPost.addHeader(key, headers.get(key));
			}
			;
			if (entity != null) {
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
					// return post(newuri, entity, headers);
				}
			}
			String str = phaseReponse2string(httpResponse);

			return str;
		} catch (Exception e) {
			throw e;
		} finally {
			try{
				httpPost.abort();
			}catch(Exception e){}
		}
	}

	public JSONObject getJSON(String url) throws Exception {
		return phase2json(get(url));
	}

	public JSONObject getJSON(String url, Map<String, String> headers) throws Exception {
		return phase2json(get(url, headers));
	}

	public String get(String url) throws Exception {
		return get(url, new HashMap<String, String>());
	}

	public String get(String url, Map<String, String> headers) throws Exception {
		if( httpCilent == null){
			throw httpCilentException;
		}
		HttpGet httpGet = new HttpGet(url);
		try {
			httpGet.setConfig(getRequestConfig);
			for (String key : headers.keySet()) {
				httpGet.addHeader(key, headers.get(key));
			}
			;

			HttpResponse httpResponse = httpCilent.execute(httpGet);
			if (httpResponse != null) {
				int code = httpResponse.getStatusLine().getStatusCode();
				if (code == 302) {
					Header header = httpResponse.getFirstHeader("location");
					String newuri = header.getValue();
					return get(newuri, headers);
				}
			}
			String str = phaseReponse2string(httpResponse);
			return str;
		} catch (Exception e) {
			throw e;
		} finally {
			try{
				httpGet.abort();
			}catch(Exception e){}
		}
	}

	public void createCookie(List<BasicClientCookie> cookielist) {
		for (BasicClientCookie cookie : cookielist) {
			cookieStore.addCookie(cookie);
		}
	}

	/**
	 * 绕过验证
	 * 
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws KeyManagementException
	 */

	public void ignoreVerifySSL(HttpClientBuilder httpClientBuilder) throws Exception {
		SSLContext sslcontext = createIgnoreVerifySSL();
		// 设置协议http和https对应的处理socket链接工厂的对象
		Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory> create()
				.register("http", PlainConnectionSocketFactory.INSTANCE)
				// .register("https", new
				// SSLConnectionSocketFactory(sslcontext))
				// 正常的SSL连接会验证码所有证书信息
				// .register("https", new
				// SSLConnectionSocketFactory(sslcontext)).build();
				// 只忽略域名验证码
				.register("https", new SSLConnectionSocketFactory(sslcontext, NoopHostnameVerifier.INSTANCE))

				.build();
		PoolingHttpClientConnectionManager connManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
		HttpClients.custom().setConnectionManager(connManager);
		httpClientBuilder.setConnectionManager(connManager);
	}

	public SSLContext createIgnoreVerifySSL() throws NoSuchAlgorithmException, KeyManagementException {
		SSLContext sc = SSLContext.getInstance("SSLv3");

		// 实现一个X509TrustManager接口，用于绕过验证，不用修改里面的方法
		X509TrustManager trustManager = new X509TrustManager() {
			@Override
			public void checkClientTrusted(java.security.cert.X509Certificate[] paramArrayOfX509Certificate,
					String paramString) throws CertificateException {
			}

			@Override
			public void checkServerTrusted(java.security.cert.X509Certificate[] paramArrayOfX509Certificate,
					String paramString) throws CertificateException {
			}

			@Override
			public java.security.cert.X509Certificate[] getAcceptedIssuers() {
				return null;
			}
		};

		sc.init(null, new TrustManager[] { trustManager }, null);
		return sc;
	}

}
