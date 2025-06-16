/*
How do you find the middle element of a linked list?
*/
//Creating a node
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
;
//Creating a List of Nodes
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        //Head of the LinkedList
        this.head = null;
    }
    //Adding a node to the list
    LinkedList.prototype.insertNode = function (data) {
        var newNode = new ListNode(data);
        //if list is empty
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    };
    //length of the list
    LinkedList.prototype.Lenght = function () {
        var count = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    };
    LinkedList.prototype.getMiddleNode = function () {
        if (this.head !== null) {
            //getting the count of list nodes
            var noOfNodes = this.Lenght();
            var middleNode = 0;
            if (noOfNodes % 2 == 0) {
                middleNode = noOfNodes / 2;
            }
            else {
                middleNode = (noOfNodes + 1) / 2;
            }
            var currentNode = this.head;
            var count = 0;
            while (currentNode.next !== null) {
                count++;
                if (count == middleNode) {
                    console.log("The middle element is : ".concat(currentNode.data));
                    break;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
    };
    //display list
    LinkedList.prototype.displayList = function () {
        if (this.head == null) {
            console.log("List is empty");
        }
        else {
            var currentNode = this.head;
            while (currentNode !== null) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    };
    return LinkedList;
}());
//creating an empty list
var list = new LinkedList();
//Adding node
list.insertNode(10);
list.insertNode(20);
list.insertNode(30);
list.insertNode(40);
list.insertNode(50);
//display the list
list.displayList();
//getting the middle node of the list
list.getMiddleNode();
