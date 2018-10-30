package com.xyx;

import com.xyx.scyj.Scyj;
import com.xyx.scyj.ScyjRespone;
import com.xyx.scyj.ScyjMain;

public class Tmain {

	static String openid = "oOZZc5Wc1dWpEVSk9CJf6VgE2NFE";

	public static void main(String[] args) {
		try {
			String type = "scan";
			String dir = "F:\\个人开发\\github\\xyx\\doc\\data\\赛车赢奖\\playdata";
			int min = 10;
			int max = 37000;

			boolean debug = false;
			if (!debug) {
				if (args.length == 4) {
					type = args[0];
					dir = args[1];
					min = Integer.parseInt(args[2]);
					max = Integer.parseInt(args[3]);
				} else if (args.length == 2) {
					type = args[0];
					dir = args[1];
					min = 0;
					max = Integer.MAX_VALUE;
				} else {
					System.out.println("./scyj  type dir  min max");
					return;

				}
			}
			ScyjMain sm = new ScyjMain(dir, min, max);
			switch (type) {
			case "test":
				test();
				break;
			case "scan":
				sm.scan();
				break;
			case "filter":
				sm.filter(40,-1);
				break;
			case "filter2":
				sm.filter(0,3);
				break;
			case "play":
				sm.play(30);
				break;		
			default:
				System.out.println("not support,type="+type);
				break;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void test() {
		try {
			// 2334、2335 37000 36412
			 Scyj scyj = new Scyj(12049);
		//	 scyj.sign();
		//	 System.out.println(scyj.getProgress() );
			// System.out.println(scyj.getProgress() );
		//	 System.out.println(scyj.getCurrentData());
			// System.out.println(scyj.getCurrentData());
			// System.out.println(scyj.play());
			// System.out.println(scyj.putForward());
			//
			 String sn = scyj.putForward();
			 System.out.println("sn=" + sn);
			 scyj.tx(sn, openid);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
