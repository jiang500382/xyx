package com.xyx.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import com.xyx.base.util.XyxFileUtil;

public class GameUserMapping {
	
	public static void main(String[] args) {
		try{
			String dir = "F:\\个人开发\\github\\xyx\\doc\\data\\赛车赢奖\\playdata";
			int min = 10;
			int max = 37000;
			int num = 5;
			
			boolean debug = true;
			if( ! debug ){
				if( args.length != 4 ){
					System.out.println("./GameUserMapping  dir  min max num");
					return;
				}else{
					dir = args[0];
					min = Integer.parseInt( args[1] );
					max = Integer.parseInt( args[2] );
					num = Integer.parseInt( args[3] );
				}
			}

			mappingMain(dir,min,max,num);
		}catch(Exception e){
			e.printStackTrace();
		}

	}
	
	public static void mappingMain(String dir,int min,int max,int num) throws Exception {
		if( min < 1 ){
			min = 1;
		}
		if( min > max ){
			throw new Exception("min  > max");
		}
		System.out.println("start mapping ");
		String du = dir + "\\01_mapping";
		mappingStep1(min,max+1,du);
		if( num < 1 ){
			num = 1;
		}
		for( int i=0;i<num;i++){
			mappingStep(du,2+i);
		}		
	}
	
	private static void mappingStep1(int min,int max,String dir) throws Exception {
		final int step = 10000;
		File f = new File(dir + "/step1/success.txt");
		if( f.exists() ){
			System.out.println("mapping step1 aready");
			return;
		}
		int start = min;
		while( start < max ){
			int end = start + step;
			if( end > max ){
				end = max;
			}
			List<Integer> list =  makeMapping(start,end);
			makeMappingFile(list,dir + "/step1/" + start + ".txt");		
			start += step;
		}
		XyxFileUtil.write(f, new ArrayList<String>());
		System.out.println("mapping step1 success");
	}
	
	private static void mappingStep(String dir,int n) throws Exception {
		if( n <= 1 ){
			throw new Exception("mappingStep n <=1 ");
		}
		String dir1 = dir + "/step" + (n-1) + "/";
		String dirn = dir + "/step" + n +"/";
		
		File f2 = new File(dirn + "/success.txt");
		if( f2.exists() ){
			System.out.println("mapping step"+n+" aready");
			return;
		}
		File d1 = new File( dir1 );
		if( !d1.isDirectory() ){
			throw new Exception("pre dir step"+(n-1) + " not exist");
		}
		File[] fs = d1.listFiles();
		List<String> list = new ArrayList<String>();
		for(int i=0;i<fs.length;i++){
			if( !fs[i].getName().equals("success.txt") ){
				list.add( fs[i].getName());
			}
		}
		
		List<String>  list2 = new ArrayList<String>();
		while( list.size() > 0 ){
			list2.add( list.get(0));
			list.remove(0);
			if( list.size() > 0 ){
				int k = (int) (Math.random() * ( list.size() ) );
				if (k >= list.size()) {
					k = list.size() - 1;
				}
				list2.add( list.get(k));
				list.remove(k);
			}else{
				int k = (int) (Math.random() * ( list2.size() ) );
				if (k >= list2.size()) {
					k = list2.size() - 1;
				}
				list2.add( list2.get(k));
			}
		}
		System.out.println( list2 );
		
		for(int i=0;i<list2.size()-1;i+=2){
			mappingFile(dir1 + list2.get(i),dir1 + list2.get(i+1),dirn + list2.get(i),dirn + list2.get(i+1));
		}
		XyxFileUtil.write(f2, new ArrayList<String>());
		System.out.println("mapping step"+n+" success");
	}
	
	public static List<Integer> readMappingFile(String file) throws Exception {
		return readMappingFile( new File(file));
	}
	

	public static List<Integer> readMappingFile(File file) throws Exception {
		List<String> lines = XyxFileUtil.read(file);
		List<Integer> list = new ArrayList<Integer>();
		for (int i = 0; i < lines.size(); i++) {
			String[] sp = lines.get(i).split(" ");
			List<Integer> li = new ArrayList<Integer>();
			
	//		System.out.println(lines.get(i));
			
			for (int j = 0; j < sp.length; j++) {
				String str = sp[j];
				if( str.trim().equals("")){
					continue;
				}
				Integer k = Integer.parseInt(str);
				if (k != null) {
					li.add(k);
				}
			}
			list.addAll(li);
		}
		return list;
	}

	public static void makeMappingFile(List<Integer> list,String file) throws Exception {
		List<String> lines = new ArrayList<String>();
		for (int i = 0; i < list.size(); i += 10) {
			StringBuffer bu = new StringBuffer();
			for (int j = 0; j < 10; j++) {
				int k = i+j;
				if( k < list.size()  ){
					bu.append(String.format("  %6d", list.get(i + j)));
				}
			}
			lines.add(bu.toString());
		}
		XyxFileUtil.write(file, lines);
	}

	public static List<Integer> makeMapping(int min,int max) {
		List<Integer> list = new ArrayList<Integer>();
		for (int i = min; i < max; i++) {
			list.add(i);
		}
		List<Integer> list2 = new ArrayList<Integer>();
		while( list.size() > 0 ){
			int k = (int) (Math.random() * list.size());
			if (k >= list.size()) {
				k = list.size() - 1;
			}
			list2.add(list.get(k));
			list.remove(k);
		}
		return list2;
	}
	
	public static void mappingFile(String file1,String file2,String targetFile1,String targetFile2) throws Exception{
		List<Integer> list = readMappingFile(file1);
		List<Integer> list2 = readMappingFile(file2);
		list.addAll( list2);
		List<Integer> newlist = new ArrayList<Integer>();
		while( list.size() > 0 ){
			int k = (int) (Math.random() * ( list.size() ) );
			if (k >= list.size()) {
				k = list.size() - 1;
			}
			newlist.add(list.get(k));
			list.remove(k);
		}
		int n = newlist.size()/2;
		list = newlist.subList(0, n );
		if( ( n + 1 ) >= newlist.size()  ){
			list2.clear();
		}else{
			list2  = newlist.subList(n + 1 , newlist.size() - 1);
		}
		makeMappingFile( list,targetFile1);
		makeMappingFile( list2,targetFile2);
	}
}
