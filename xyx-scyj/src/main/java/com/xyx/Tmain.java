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

			boolean debug = true;
			if (!debug) {
				if (args.length == 4) {
					type = args[1];
					dir = args[2];
					min = Integer.parseInt(args[3]);
					max = Integer.parseInt(args[4]);
					return;
				} else if (args.length == 2) {
					type = args[1];
					dir = args[2];
					min = 0;
					max = Integer.MAX_VALUE;
					return;
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
		//		scan.filter(0,3);
				break;
			case "play":
				sm.play(30);
				break;			
			default:
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
		//	 String sn = scyj.putForward();
//			 System.out.println("sn=" + sn);
			 
			 String sn = "TX20181028220927854884";
			 //	 String sn = "TX20181029134015683190";
			 scyj.tx(sn, openid);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
