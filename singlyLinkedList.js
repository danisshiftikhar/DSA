class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SingleLinkList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
        return this
    }

    //Pop psuedocode
    //if there is no node return undefined
    //loop through the list until you reach the tail
    //set the next property of 2nd to the last node equal to null
    //set the tail to the 2nd to the last node
    //decrement the size 
    //return the value of the node removed
    pop() {
        if (!this.head) return undefined

        let current = this.head;
        let newTail = this.head;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.size--

        if (this.size == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    //Shift PseudoCode
    //return undefined if the head is null
    // set the head property to a temp 
    // set the next property of the head as the head
    // decrement the length by one

    shift() {

        if (!this.head) return undefined
        let temp = this.head;
        this.head = temp.next;
        this.size--
        return temp

    }


    //Unshift PseudoCode
    //function should accept a value
    //create a new node against value
    //set the new node next to the current head of the list
    //set the head of the list to the new node
    //increment the size by one

    unshift(val) {

        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++
            return this
        }

        newNode.next = this.head;
        this.head = newNode

        this.size++
        return this


    }

    //Get psuedo code
    //function should accept the position of the node as number
    //return undefined if the head is null or number is less then zero or greater then or equal to the length of the list
    //loop through the list untill you reach the node
    // return the node

    get(index) {
        if (this.size <= 0) return undefined
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current
    }


    //Insert Psuedocode
    //if the index is less then zero or greater then the length of the list
    // if the index is equal to zero then use the unshift method to insert at start
    // if the index is equal to the length of the list use the push method to insert new node at the end
    // to insert new node at some specific position get the position of the prev node to that index by using get method and passing -1 to it
    // point the prev node next to the newNode 
    // point the new node next to the next of preNode


    insert(index, val) {
        if (index === 0) return !!list.unshift(val)
        if (index === this.size) return !!list.push(val)

        const newNode = new Node(val)
        const prevNode = get(index - 1)
        const tempNext = prevNode.next
        prevNode.next(newNode)
        newNode.next(tempNext)
        this.size++
        return true

    }

    //remove Pseudocode
    //return undefined if the index is less then zero or greater then or equal the the size of the linked list
    //use shift if the index is equal to zero
    //use the pop if the index is equal to this.size-1


    remove(index) {
        if (index < 0 || index > this.size) return undefined
        if (index === 0) return !!this.shift()
        if (index === this.size - 1) return this.pop()
        let prevNode = this.get(index - 1)
        const removed = prevNode.next
        prevNode.next = removed.next

        return removed
    }


    //Reverse PseudoCode

    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null

        for (let i = 0; i < this.size; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
    }

    print(){
        const arr=[]
        let current=this.head
        while(current){

            arr.push(current.val)
            current=current.next

        }
        console.log("print list",arr)
    }
}

const list = new SingleLinkList()
list.push(1)
list.push(2)
list.push(3)
console.log("list before pop and push", list)
const poppedItm = list.pop()
console.log("popped item", poppedItm)
const shiftedItem = list.shift()
console.log("shiftedItem", shiftedItem)

list.unshift(4)
list.push(2)
list.remove(2)
list.reverse()
list.print()



const itemFromGetFunc = list.get(2)
console.log("item thru get", itemFromGetFunc)

console.log("list", list)