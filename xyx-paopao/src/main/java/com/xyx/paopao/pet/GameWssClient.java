package com.xxgame.pet;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

import com.alibaba.fastjson.JSONObject;
import com.xxgame.pet.modal.CommondDeal;
import com.xxgame.pet.modal.GameRespone;

public class GameWssClient extends WebSocketClient{

	DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	static String wssUrl = "wss://wsapi2.xingqiu123.com/river";
	//最近收到的命令,后面收到的直接覆盖
	private Map<String,GameRespone> msgMap = new HashMap<String,GameRespone>();
	
	//处理收到的信息
	private Map<String,CommondDeal> dealFuncs = new HashMap<String,CommondDeal>();
	
	private Exception err = null;
	Long userId = -1L;
	
	public Exception getErr() {
		return err;
	}
	
	public void log(String message ){
		String  sdate = formatter.format( new Date());
		System.out.println( sdate +","+ message );
	}

	public GameWssClient( String url,Long userId ) throws URISyntaxException {
		super( new URI(url));
		this.userId = userId;
	}
	
	public GameWssClient( URI uri,Long userId ) throws URISyntaxException {
		super( uri);
		this.userId = userId;
	}
	
	public GameWssClient(Long userId) throws URISyntaxException {
		super(new URI(wssUrl));
		this.userId = userId;
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
	
	//登录
	public void syncLogin() throws Exception{
		JSONObject data = new JSONObject();
		data.put("user_id", userId);
		GameRespone reponse = syncSendCommond("login",data);
		if( ! reponse.checkSuccess() ){
			throw new Exception("login failed,message=" + reponse.getMessage() );
		}
	}
	
	//20s发一次
	public void syncHeartbeat() throws Exception{
		GameRespone reponse = syncSendCommond("heartbeat",new JSONObject());
		if( ! reponse.checkSuccess() ){
			throw new Exception("heartbeat failed,message=" + reponse.getMessage() );
		}
	}
	
	public void sendCommond(String command,JSONObject data) throws Exception{
		if( checkConnect() ){
			data.put("command", command);
			log( "  send：" + data );
			this.send(data.toString());
		}else{
			throw new Exception("send failed,not connect");
		}
	}
	
	public GameRespone waiteReponse(String commond) throws Exception{
		return waiteReponse(commond,3000);
	}
	
	//timeout单位ms
	public GameRespone waiteReponse(String commond,int timeout) throws Exception{
		for(int i=0;i<timeout/300;i++){
			GameRespone res = msgMap.get(commond);
			if( res != null ){
				return res;
			}else{
				try{
					Thread.sleep(  300 );
				}catch(Exception e){}
			}
		}
		throw new Exception("timeout");
	}
	
	public GameRespone syncSendCommond(String command,JSONObject data) throws Exception{
		return syncSendCommond(command,data,5000);
	}
	
	public GameRespone syncSendCommond(String command,JSONObject data,int timeout) throws Exception{
		sendCommond(command,data);
		return waiteReponse(command,timeout);
	}
	
	public GameRespone getReponse(String commond){
		return  getReponse(commond,true);
	}
	public GameRespone getReponse(String commond,boolean clean){
		GameRespone res = msgMap.get(commond);
		if( clean ){
			msgMap.remove(commond);
		}
		return res;
	}
	
	public void cleanReponse(String commond){
		msgMap.remove(commond);
	}
	
	public void addDealFuncs(CommondDeal dealFunc){
		for( String cmd :dealFunc.getCommonds() ){
			dealFuncs.put(cmd, dealFunc);
		}
		
	}
	
	public void clearAllDealFuncs(){
		dealFuncs.clear();
	}
	
	@Override
	public void onMessage(String msg) {
		try{
			
			log( "recive：" + msg );
			GameRespone reponse = new GameRespone( msg );
			String commond = reponse.getCommand();
			msgMap.put( commond, reponse);
			if( dealFuncs.containsKey( commond) ){
				CommondDeal cmdDeal = dealFuncs.get(commond);
				cmdDeal.dealCommond( reponse );
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@Override
	public void onClose(int paramInt, String paramString, boolean paramBoolean) {
//		 System.out.println("已关闭");
		
	}

    @Override
    public void onError(Exception e) {
    	err = e;
    	try{
    		close();
    	}catch(Exception e2){}
    }

	@Override
	public void onOpen(ServerHandshake paramServerHandshake) {
		// TODO Auto-generated method stub
	//	System.out.println("open");
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public void setErr(Exception err) {
		this.err = err;
	}

	
}
