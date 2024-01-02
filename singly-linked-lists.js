// piece of data - val
// reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    //create a new node using the value passed in the function
    const node = new Node(val);
    //if the list is empty - set head and tail equal to new node
    if ((this.length = 0)) {
      this.head = node;
      this.tail = node;
    } else {
      // otherwise set the next property on the tail to be the new node
      this.tail.next = node;
      this.tail = node;
    }
    length += 1;
    //update the tail property to be the new node

    //increment length by one
  }
}

// const first = new Node("Hi!");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

const list = new SinglyLinkedList();
list.push("HELLO!");
list.push("goodbye!");
