package PAck2;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
    
}
class LinkedList {
    private Node head;

    public LinkedList() {
        this.head = null;
    }

    // Insertion at the beginning
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    // Insertion at the end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node last = head;
        while (last.next != null) {
            last = last.next;
        }
        last.next = newNode;
    }
    
    
    public void delete(int value) {
        Node current = head;
        Node prev = null;

        while (current != null && current.data != value) {
            prev = current;
            current = current.next;
        }

        if (current == null) {
            System.out.println("Value not found in the list.");
            return;
        }

        if (prev == null) {
            head = current.next;
        } else {
            prev.next = current.next;
        }
    }

    public void reverse() {
        Node prev = null;
        Node current = head;
        Node next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        head = prev;
    }
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

}
public class Demo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 LinkedList list = new LinkedList();

	        list.insertAtBeginning(3);
	        list.insertAtBeginning(2);
	        list.insertAtBeginning(1);
	        list.insertAtEnd(4);

	        System.out.print("Original List: ");
	        list.display();

	        list.delete(1);

	        System.out.print("List after deletion: ");
	        list.display();


	        list.reverse();

	        System.out.print("Reversed List: ");
	        list.display();
	}

}
