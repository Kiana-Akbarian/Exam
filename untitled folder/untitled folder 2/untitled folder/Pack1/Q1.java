package Pack1;

import java.util.Scanner;

public class Q1 {

	private static final int SSIZE = 200;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner kb = new Scanner(System.in);

		System.out.println("PLEase give me string ? ");
		String input = kb.nextLine();
		if(isCorrect(input)) {
			System.out.println("yup");
		}else {
			System.out.println("Nope");
		}
	}

	private static boolean isCorrect(String input) {
		char[] stack = new char[SSIZE];
		int top = -1;
		for(int i = 0 ; i < input.length();i++) {
			char chr = input.charAt(i);
			
			if(isopeningbracket(chr)) {
				if(top == SSIZE - 1) {
					System.out.println("the stack is full");
					return false;
				}
				stack[++top] = chr;//stack[0]
			}else if(isclosingingbracket(chr)) {
				if(top ==-1 || !ismatchpair(stack[top],chr)) {
					return false;
				}
				top--;
			}
		}
		return top == -1;
	}
	
	
	private static boolean isopeningbracket(char c) {
		return c == '(' || c == '{' || c == '[';
	}
	private static boolean isclosingingbracket(char c) {
		return c == ')' || c == '}' || c == ']';
	}
	
	private static boolean ismatchpair(char open, char close) {
		return(open=='(' && close==')')||(open=='{' && close=='}')||(open=='[' && close==']');
	}
}
