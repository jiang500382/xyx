package com.xxgame.pet;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public final class GameWssHeartbeat implements Runnable {
	DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
	private Thread t;
	boolean flag = true;
	long cycle = 20000;
	
	private List<GameWssClient> list = new ArrayList<GameWssClient>();

	public GameWssHeartbeat() {
		t = new Thread(this);
	}

	public void add(GameWssClient client) {
		list.add(client);
	}

	public void log(String message ){
		String  sdate = formatter.format( new Date());
		System.out.println( sdate +","+ message );
	}
	
	public void run() {
		while (true) {
		//	log("xxxxxxxxx="+list.size());
			Date d1 = new Date();
			List<GameWssClient> removeList = new ArrayList<GameWssClient>();
			for (GameWssClient client : list) {
				if (!flag) {
					return;
				}
				try {
					if (client.checkConnect()) {
						client.syncHeartbeat();
					}
				//	log("wwwww="+client.checkConnect());
				} catch (Exception e) {
					removeList.add(client);
					e.printStackTrace();
				}
			}
			for (GameWssClient client : removeList) {
				list.remove(client);
			}
			
			Date d2 = new Date();
			long number = d2.getTime() - d1.getTime();
			for (long i = number; i < cycle; i += 1000) {
				if (!flag) {
					return;
				}
				try {
					Thread.sleep(1000);
				} catch (Exception e) {
				}
			}

		}
	}

	public void start() {
		flag = true;
		t.start();
	}

	public void stop() {
		flag = false;
	}
}
