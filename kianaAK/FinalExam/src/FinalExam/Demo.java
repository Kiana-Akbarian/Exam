package FinalExam;


public class Demo {
	public static void main(String[] args) {
		FinalExam q = new FinalExam(4);
		
		q.enqueue(7);
		q.enqueue(1);
		q.enqueue(2);
		q.enqueue(4);
		q.printme();
		q.dequeue();
		
		q.printme();
		
		
		
		q.clear();
		
		q.printme();
		
	}

}
