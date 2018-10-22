package com.game.base;

import java.util.ArrayList;
import java.util.List;

public class GameUserMapping_bak0802 {

	List<Integer> list1;
	List<Integer> list2;

	public GameUserMapping_bak0802(String file1, String file2) throws Exception {
		list1 = readMappingFile(file1);
		list2 = readMappingFile(file2);
	}

	public int mappingUserId(int userId) throws Exception {
		try {
			int v1 = userId % 1000;
			int v = userId / 1000;
			int v2 = v % 1000;
			v = v / 1000;

			v1 = list1.get(v1);
			v2 = list1.get(v2);
			int mapUserId = v * 1000000 + v2 * 1000 + v1;
			return mapUserId;
		} catch (Exception e) {
			throw new Exception("mapping failed");
		}
	}

	public static List<Integer> readMappingFile(String file) throws Exception {
		List<String> lines = GameFileUtils.read(file);
		List<Integer> list = new ArrayList<Integer>();
		if(lines.size() != 100){
			throw new Exception("phase mapping failed");
		}
		for (int i = 0; i < lines.size(); i++) {
			String[] sp = lines.get(i).split(" ");
			List<Integer> li = new ArrayList<Integer>();
			
			System.out.println(lines.get(i));
			
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
			if (li.size() != 10) {
				System.out.println("li="+li);
				System.out.println("i="+i +",li.size="+li.size());
				throw new Exception("phase mapping failed");
			}
			list.addAll(li);
		}
		return list;
	}

	public static List<Integer> makeMappingFile(String file) throws Exception {
		List<Integer> list = GameUserMapping_bak0802.makeMapping();
		List<String> lines = new ArrayList<String>();
		for (int i = 0; i < list.size(); i += 10) {
			StringBuffer bu = new StringBuffer();
			for (int j = 0; j < 10; j++) {
				bu.append(String.format("%3d", list.get(i + j)));
				bu.append("   ");
			}
			lines.add(bu.toString());
		}
		GameFileUtils.write(file, lines);
		return list;
	}

	public static List<Integer> makeMapping() {
		List<Integer> list = new ArrayList<Integer>();
		for (int i = 0; i < 1000; i++) {
			list.add(i);
		}
		List<Integer> list2 = new ArrayList<Integer>();
		for (int i = 0; i < 1000; i++) {
			int k = (int) (Math.random() * list.size());
			if (k >= list.size()) {
				k = list.size() - 1;
			}
			list2.add(list.get(k));
			list.remove(k);
		}
		return list2;
	}

}
