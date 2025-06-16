/*
How do you find the middle element of a linked list?
*/

//Creating a node
class ListNode{
    public data : number;
    public next : ListNode | null;

    constructor(data : number){
        this.data = data;
        this.next = null;
    }
};

//Creating a List of Nodes
class LinkedList{
    //Head of the LinkedList
    private head : ListNode | null = null;

    //Adding a node to the list
    public insertNode(data : number){
        const newNode = new ListNode(data);
        //if list is empty
        if(this.head == null){
            this.head = newNode;
        }else{
            let currentNode = this.head;
            while(currentNode.next !== null){
                   currentNode = currentNode.next; 
            }
            currentNode.next = newNode;
        }
    }
    //length of the list
    public Lenght(): number{
        let count : number = 0;
        let currentNode = this.head;
        while(currentNode!==null){
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    public getMiddleNode(){
        if(this.head !== null){
            //getting the count of list nodes
            const noOfNodes : number= this.Lenght();
            let middleNode : number = 0;
            if(noOfNodes % 2 == 0){
                middleNode = noOfNodes/2;
            }else{
                middleNode = (noOfNodes + 1) / 2;
            }
            let currentNode = this.head;
            let count : number = 0;
            while(currentNode.next !== null){
                count++;
                if(count == middleNode){
                    console.log(`The middle element is : ${currentNode.data}`);
                    break;
                }else{
                    currentNode = currentNode.next;
                }
            }
        }
    }

    //display list
    public displayList(){
        if(this.head == null){
            console.log("List is empty");
        }else{
            let currentNode = this.head;
            while(currentNode !== null){
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    }
}

//creating an empty list
const list = new LinkedList();

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
