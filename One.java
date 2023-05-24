package 프로젝트;

import java.util.ArrayList;
import java.util.Scanner;

public class One {

	ArrayList<String> ID = new ArrayList<>();
	ArrayList<String> PW = new ArrayList<>();
	boolean b = false;

	void id(String s) {
		ID.add(s);
	}

	void pw(String t) {
		PW.add(t);
	}

	void member() {
		if (b == false) {
			Loop: while (true) {
				System.out.println("ID를 입력해주세요 : ");
				Scanner sc2 = new Scanner(System.in);
				String str = sc2.nextLine();
				for (int y = 0; y < ID.size(); y++) {
					if (str.equals(ID.get(y))) {
						System.out.println("이 아이디는 존재합니다.");
						break Loop;
					}
				}

				System.out.println("pw를 입력하세요 : ");
				Scanner sc3 = new Scanner(System.in);
				String str5;
				pw(str5 = sc3.next());

				if (str5.length() < 4) {
					System.out.println("비밀번호는 4자리 이상이여야 합니다. 다시 하시오.");
					break;
				}
				if (str5.matches(".*[0-9].*")) {
				} else {
					System.out.println("숫자 없음!");
					break;
				}

				if (str5.matches(".*[a-z].*")) {

					id(str);
					System.out.println("가입완료");

					break;
				} else {
					System.out.println("알파벳을 입력하시오.");
					break;
				}
			}
		} else if (b == true) {
			System.out.println("로그아웃 후 이용해주세요.");
		}
	}

	void login() {
		if (b == false) {
			System.out.println("ID를 입력하시오 : ");
			Scanner sc5 = new Scanner(System.in);
			String in_id = sc5.nextLine();

			System.out.println("PW를 입력하시오 : ");
			Scanner sc6 = new Scanner(System.in);
			String in_pw = sc6.nextLine();
			int z = 0;
			for (z = 0; z < ID.size(); z++) {
                if (in_id.equals(ID.get(z))) {
                	if (in_pw.equals(PW.get(z))) {
                		b = true;
                		System.out.println("로그인 성공");
                	
                			break;
                	}
                    
                }
			}
			if (z>=ID.size()) {
				System.out.println("로그인 실패");
			}
		} else if (b == true) {
			System.out.println("로그아웃을 하시오");
		}

	}

	void logout() {
		if (b == true) {
			System.out.println("로그아웃");
			b = false;
		} else if (b == false) {
			System.out.println("로그인을 하시오");
		}
	}

	void memberlist() {
		if (b == true) {
			System.out.println("회원목록");
			System.out.printf("회원%s 비밀번호%s \n", ID, PW);
		} else {
			System.out.println("로그인을 하시오");
		}
	}
}
