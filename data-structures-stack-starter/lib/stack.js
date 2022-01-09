// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
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

class Stack {
  constructor(top=null, length=0) {
    this.top = top;
    this.length = length;
  }

  push(item) {
    let nodeToPush = new Node();
    nodeToPush.value = item;

    if (this.length > 0) {
      nodeToPush.next = this.top;
    } else {
      nodeToPush.next = null;
    }

    this.top = nodeToPush;
    this.length++;

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      let temp = this.top;
      this.top = null;
      this.length--;
      return temp.value;
    } else if (this.length > 1) {
      let temp = this.top;
      this.top = temp.next;
      this.length--;
      return temp.value;
    }
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
