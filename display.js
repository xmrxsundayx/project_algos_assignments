// Display
// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

// class SLL {
//     constructor() {
//         this.head = null;
//     }
//     display() {
//         var runner = this.head;
//         var str = "";
//         while (runner) {
//             str += runner.data + " ";
//             runner = runner.next;
//         }
//         return str;
//     }
// }

// Examples:

// SLL1 = new SLL()
// SLL1.addFront(76) => Node { data: 76, next: null }
// SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
// SLL1.display() => "2, 76"
// SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
// SLL1.display() => "11.41, 2, 76"

// Here is the explanation for the code above:
// 1. The first line of code is declaring a class named SLL, and the second line is declaring a constructor method for the class, which takes no parameters.
// 2. Inside the constructor method, we are setting the value of the head property to null, which is what we want when the list is empty.
// 3. The third line of code is declaring a method called display, which takes no parameters, and the fourth line is declaring a variable called runner and setting it equal to the value of the head property.
// 4. The fifth line is declaring a variable called str and setting it equal to an empty string.
// 5. The sixth line is a while loop that will run as long as runner is not null. The seventh line of code is adding the data property of the node that runner is pointing to to the string str, and the eighth line is setting runner equal to the node that runner is pointing to.
// 6. The ninth line is returning the string str, which will contain the data values of all the nodes in the list. 