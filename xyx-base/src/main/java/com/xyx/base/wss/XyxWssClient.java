package com.xyx.base.wss;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

import com.xyx.base.XyxRespone;


public class XyxWssClient extends WebSocketClient{

	//最近收到的命令,后面收到的直接覆盖
	private Map<String,XyxRespone> resMap = new HashMap<String,XyxRespone>();
	
	//处理收到的信息
	private Map<String,XyxWssDeal> dealMap = new HashMap<String,XyxWssDeal>();
	
	private Exception err = null;
	
	private int timeout = 10000;
	
	public Exception getErr() {
		return err;
	}
	

	public XyxWssClient( String url) throws URISyntaxException {
		super( new URI(url));
	}
	
	public XyxWssClient( String url,int timeout) throws URISyntaxException {
		super( new URI(url));
		this.timeout = timeout;
	}	
	
	public void syncConnect() throws Exception{
		connect();
		for(int i=0;i<10;i++){
			if( err != null ){
				throw new Exception("connect faild," + err.getMessage());
			}
			try{
				Thread.sleep(300);
			}catch(Exception e){
			}
			if( checkReady() ){
				return;
			}
		}
		throw new Exception("connect faild");
	}
	
	public void disconnect(){
		close();
	}
	
	
	public boolean checkConnect(){
		return !this.isClosed();
	}
	
	public boolean checkReady(){
		return this.getReadyState().equals(READYSTATE.OPEN);
	}
	
	public void syncHeartbeat() throws Exception{
	}
	
	
	public void send(String key,String msg) throws Exception{
		if( checkConnect() ){
			super.send( msg );
		}else{
			throw new Exception("send failed,not connect");
		}
	}
	
	public XyxRespone waiteReponse(String key) throws Exception{
		return waiteReponse(key,timeout);
	}
	
	//timeout单位ms
	public XyxRespone waiteReponse(String key,int timeout) throws Exception{
		for(int i=0;i<timeout/200;i++){
			XyxRespone res = resMap.get(key);
			if( res != null ){
				return res;
			}else{
				try{
					Thread.sleep(  200 );
				}catch(Exception e){}
			}
		}
		throw new Exception("timeout");
	}
	
	public XyxRespone syncSend(String key,String msg) throws Exception{
		return syncSend(key,msg,5000);
	}
	
	public XyxRespone syncSend(String key,String msg,int timeout) throws Exception{
		send(key,msg);
		return waiteReponse(key,timeout);
	}
	
	public XyxRespone getReponse(String key){
		return  getReponse(key,true);
	}
	public XyxRespone getReponse(String key,boolean clean){
		XyxRespone res = resMap.get(key);
		if( clean ){
			resMap.remove(key);
		}
		return res;
	}

	@Override
	public void onClose(int paramInt, String paramString, boolean paramBoolean) {
//		 System.out.println("已关闭");
		
	}

    @Override
    public void onError(Exception e) {
    	try{
    		err = e;
    		close();
    	}catch(Exception e2){}
    }

	@Override
	public void onOpen(ServerHandshake paramServerHandshake) {
		// TODO Auto-generated method stub
		//	System.out.println("open");
	}


	@Override
	public void onMessage(String msg) {
		try {
			XyxRespone res = new XyxRespone( msg );
			String key = res.getKey();
			if(  key == null ){
				return;
			}
			resMap.put(key, res);
			XyxWssDeal deal = dealMap.get(key);
			if( deal != null ){
				deal.deal(res);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
