package FinalExam;

public class FinalExam {
	
	
	static private int queu[];
	static private int front,rear,capacity;
	
	FinalExam(int c){
		front = 0 ;
		rear = 0 ;
		capacity = c;
		queu = new int[capacity];
	}
	
	static void enqueue(int data) {
		if(capacity == rear) {
			System.out.println("My queue is full");
			return;
		}else {
			queu[rear]=data;
			rear++;
		}
		return;
	}
	
	static void printme() {
		int i ;
		if(front == rear) {
			System.out.println("My queue is Epmty");
			return;
		}
		for(i=front;i<rear;i++) {
			System.out.print(queu[i] + "   ");
		}
		System.out.println();
	}
	
	
	static void dequeue() {
		if(front == rear) {
			System.out.println("My queue is Epmty");
			return;
		}
		else {
			for(int i = 0 ; i<rear-1;i++) {
				queu[i] = queu[i+1];
			}
			if(rear <= capacity) {
				queu[--rear] = 0;
				
			}
		}
		return;
	}
	
	static void peek() {
		if(front == rear) {
			System.out.println("My queue is Epmty");
			return;
		}
		System.out.println("My front is : ");
		System.out.println(queu[front]);
	}
	
	public boolean isEmpty() {
	     return (rear + 1) % capacity == front; // based on suggestion of @eckes
	}
	
	public void clear() {
		queu = new int[capacity];
	}

}
