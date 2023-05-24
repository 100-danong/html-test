package 프로젝트;

import java.util.Scanner;

public class Two {

	public static void main(String[] args) {
		One o = new One();
		loop: while (true) {
			System.out.println("1.회원가입 2.로그인 3.로그아웃 4.회원목록 5.종료");
			Scanner sc = new Scanner(System.in);
			String str = sc.nextLine();

			switch(str){
			case "1":
				o.member();
				break;
			case "2":
				o.login();
				break;
			case "3":
				o.logout();
				break;
			case "4":
				o.memberlist();
				break;
			case "5":
				System.out.println("종료하시겠습니까? (y/n)");
				Scanner sc1 = new Scanner(System.in);
				String str3 = sc1.nextLine();
				if (str3.equals("y")) {
					System.out.println("종료");
					break loop;
				}
				default :
					System.out.println("다시 입력해");
				
			}
		}
	}
}
