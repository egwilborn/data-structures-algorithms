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
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      // otherwise set the next property on the tail to be the new node
      this.tail.next = node;
      //update the tail property to be the new node
      this.tail = node;
    }
    //increment length by one
    this.length++;
    return this;
  }
}

// const first = new Node("Hi!");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

const list = new SinglyLinkedList();
console.log(list.push("HELLO!"));
console.log(list.push("goodbye!"));
