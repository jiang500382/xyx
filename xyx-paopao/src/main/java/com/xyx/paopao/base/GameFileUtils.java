package com.game.base;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class GameFileUtils {
	public static List<String> read(String fileName) throws Exception {
		List<String> list = new ArrayList<String>();
		BufferedReader br = null;
		InputStreamReader reader = null;
		FileInputStream stream = null;
		try {
			File file = new File(fileName);
			stream = new FileInputStream(file);
			reader = new InputStreamReader( stream );
			br = new BufferedReader(reader);
			String line;
			while ((line = br.readLine()) != null) {
				list.add(line);
			}
		} catch (Exception e) {
			throw new Exception("read file failed");
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (Exception e) {
				}
			}
			if (reader != null) {
				try {
					reader.close();
				} catch (Exception e) {
				}
			}
			if (stream != null) {
				try {
					stream.close();
				} catch (Exception e) {
				}
			}
		}
		return list;
	}
	
	public static void write(String fileName,List<String> list) throws Exception {

		FileWriter writer = null;
		BufferedWriter out = null;
		try {
			File file = new File(fileName);
			writer = new FileWriter(file);
			
			out = new BufferedWriter(writer);
			for(int i=0;i<list.size();i++){
				out.write(list.get(i) + "\r\n"); 
			}
            out.flush();
		} catch (Exception e) {
			throw new Exception("write file failed");
		} finally {
			if (out != null) {
				try {
					out.close();
				} catch (Exception e) {
				}
			}
			if (writer != null) {
				try {
					writer.close();
				} catch (Exception e) {
				}
			}
		}
	}
}
