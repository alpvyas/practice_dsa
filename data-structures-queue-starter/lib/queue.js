// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(front=null, back=null, length=0) {
    this.front = front;
    this.back = back;
    this.length = length;
  }

  enqueue(item) {
    let nextItem = new Node();
    nextItem.value = item;
    nextItem.next = null;

    if (this.length === 0) {
      this.front = nextItem;
      this.back = nextItem;
    } else {
      this.back.next = nextItem;
      this.back = nextItem;
    }
    this.length++;

    return this.length;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let nodeToRemove = this.front;
      this.front = null;
      this.back = null;
      this.length--;
      return nodeToRemove.value;
    } else if (this.length > 1){
      let nodeToRemove = this.front;
      this.front = nodeToRemove.next;
      this.length--;
      return nodeToRemove.value;
    }

  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;