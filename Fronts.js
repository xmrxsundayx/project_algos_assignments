// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     addFront(value) {
//         var newNode = new Node(value);
//         newNode.next = this.head;
//         this.head = newNode;
//         return this.head;
//     }
// }

// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// Here is the explanation for the code above:
// 1. We are creating a class called SLL (stands for Singly Linked List)
// 2. The constructor function is what is called when we type in "new SLL()" and creates a new instance with a property called "head"
// 3. We add a method to the prototype called "addFront" that is a function that takes in a value as a parameter. 
// 4. Inside the function, we instantiate a new node and set it to a variable called "newNode"
// 5. We set the newNode's next property to the head of the list
// 6. We set the head of the list to the newNode
// 7. Finally, we return the head of the list

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     removeFront() {
//         if (this.head) {
//             this.head = this.head.next;
//         }
//         return this.head;
//     }
// }

// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

// Here is the explanation for the code above:
// 1. If there is no head, then there is nothing to remove, so we just return.
// 2. Otherwise, we set the head to the next node in the list.
// 3. Finally, we return the head of the list.

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     front() {
//         if (this.head) {
//             return this.head.data;
//         }
//         return null;
//     }
// }

// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

// Here is the explanation for the code above:
// 1. Create a constructor method for the SLL class
// 2. Create a head attribute for the SLL class
// 3. Create a front method for the SLL class
// 4. If the SLL has a head, return the data of the head
// 5. Otherwise, return null
