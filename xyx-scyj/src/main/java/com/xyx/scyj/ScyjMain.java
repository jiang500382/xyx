package com.xyx.scyj;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.xyx.base.GameUserMapping;
import com.xyx.base.util.XyxFileUtil;
import com.xyx.base.util.XyxUtil;

public class ScyjMain {
	
	String dir;
	int min;
	int max;
	public ScyjMain(String dir){
		this.dir = dir;
		min = 0;
		max = Integer.MAX_VALUE;
	}
	
	public ScyjMain(String dir,int min,int max){
		this.dir = dir;
		this.min= min;
		this.max = max;
	}
	
	public void scan() throws Exception{
		final int pageNum = 1000;
		
		System.out.println("scan start");
		String ds = dir+"/02_scan/" + XyxUtil.getFilenNameTinm() + "/";
		File du = new File(dir+"/01_mapping_ok");
		
		File[] lf = du.listFiles();
		if( lf == null ){
			throw new Exception("no files in dir 01_mapping_ok");
		}
		Scyj scyj = new Scyj(0);
		for(int i=0;i<lf.length;i++){
			if( lf[i].getName().equals("success.txt")){
				continue;
			}
			XyxUtil.log("scan start,fileName="+lf[i].getName());
			
			List<Integer> uids = GameUserMapping.readMappingFile( lf[i] );
			List<String> datas = new ArrayList<String>();
			
			int index = 0;
			
			String  wf = ds + lf[i].getName().replace(".txt", "") + "/";
			
			for(Integer uid : uids){
				index += 1;
				if( index % 100 == 0 ){
					XyxUtil.log("index="+index);
				}
				if(( uid < min ) || ( uid > max ) ){
					continue;
				}
				scyj.setUid(uid);
				try{
					JSONObject data = scyj.getCurrentData();
					datas.add(data.toString() );
				}catch(Exception e){
					JSONObject js = new JSONObject();
					js.put("uid", uid);
					js.put("err", e.getMessage());
					XyxUtil.err(js.toString() );
				}
				if( index % pageNum == 0 ){
					XyxFileUtil.write(wf+(index/pageNum-1)+".txt", datas);
					datas.clear();
				}
			}
			if( datas.size() > 0 ){
				XyxFileUtil.write(wf+index/pageNum+".txt", datas);
			}
			
			XyxUtil.log("scan success,fileName="+lf[i].getName());
		}
		XyxUtil.log("scan finish");
	}
	
	
	public void filter(double diff_time,double money) throws Exception{	
		System.out.println("filter start");
		String df = dir+"/03_filter/" + XyxUtil.getFilenNameTinm() + "/";
		File ds = new File(dir+"/02_scan_ok");
		
		File[] lf = ds.listFiles();
		if( lf == null ){
			throw new Exception("no dirs in dir 02_scan_ok");
		}
		for(int i=0;i<lf.length;i++){
			File di = lf[i];
			if( !di.isDirectory() ){
				continue;
			}
			XyxUtil.log("filter start,dirName="+di.getName());
			File[] ldf = di.listFiles();
			if( ldf == null ){
				XyxUtil.log("filter end,no files");
				continue;
			}
			
			List<String> list = new ArrayList<String>();
			for(int j=0;j<ldf.length;j++){
				
				String dfi = df + di.getName() + "/" + ldf[j].getName() + "/";
				
				List<String> lstr = XyxFileUtil.read( ldf[j] );
				for(String str:lstr){
					try{
						JSONObject js = JSONObject.parseObject(str);
						Double diff_time_i = js.getDouble("diff_time");
						Double money_i = js.getDouble("money");
						if( (diff_time_i==null) || ( money_i == null ) ){
							continue;
						}
						if(( money_i >= money ) && ( diff_time_i >= diff_time) ){
							list.add(str);
						}
					}catch(Exception e){
						XyxUtil.err(str+","+e.getMessage());
					}
				}
				int num = list.size();
				if( list.size() > 0 ){
					XyxFileUtil.write( dfi , list);
					list.clear();
				}
				XyxUtil.log("filter success,filename="+ldf[j].getName()+",num="+num);
				
			}
			
			XyxUtil.log("filter success,dirName="+lf[i].getName());
		}
		XyxUtil.log("filter finish");
	}
	
	
	public void play(double diff_time) throws Exception{	
		System.out.println("play start");
		Scyj scyj = new Scyj(0);
		
		String df = dir+"/04_play/" + XyxUtil.getFilenNameTinm() + "/";
		File ds = new File(dir+"/03_filter_ok");
		
		File[] lf = ds.listFiles();
		if( lf == null ){
			throw new Exception("no dirs in dir 03_filter_ok");
		}
		for(int i=0;i<lf.length;i++){
			File di = lf[i];
			if( !di.isDirectory() ){
				continue;
			}
			XyxUtil.log("play start,dirName="+di.getName());
			File[] ldf = di.listFiles();
			if( ldf == null ){
				XyxUtil.log("play end,no files");
				continue;
			}
			
			List<String> list = new ArrayList<String>();
			for(int j=0;j<ldf.length;j++){
				
				String dfi = df + di.getName() + "/" + ldf[j].getName() + "/";
				
				List<String> lstr = XyxFileUtil.read( ldf[j] );
				for(String str:lstr){
					JSONObject data = null;
					try{
						JSONObject js = JSONObject.parseObject(str);
						
						Integer uid = js.getInteger("uid");
						if( uid==null){
							throw new Exception("uid=null");
						}
						scyj.setUid(uid);
						data = scyj.getCurrentData();
						Double diff_time_i = data.getDouble("diff_time");
						if( diff_time_i==null){
							throw new Exception("diff_time=null");
						}
						if( diff_time_i < diff_time) {
							throw new Exception("diff_time("+diff_time_i+")<"+diff_time);
						}
						data = scyj.play();
						list.add(data.toString());
					}catch(Exception e){
						XyxUtil.err(str+","+e.getMessage());
						if( data != null ){
							data.put("err_msg", e.getMessage());
							list.add(data.toString());
						}
					}
					
				}
				int num = list.size();
				if( list.size() > 0 ){
					XyxFileUtil.write( dfi , list);
					list.clear();
				}
				XyxUtil.log("play success,filename="+ldf[j].getName()+",num="+num);
				
			}
			
			XyxUtil.log("play success,dirName="+lf[i].getName());
		}
		XyxUtil.log("play finish");
	}

}
