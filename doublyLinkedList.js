class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) {
            return null
        }
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.tail = poppedNode.prev
        this.tail.next = null
        this.length--
        return poppedNode
    }

    unshift(val) {
        if (this.length === 0) return undefined;
        const newNode = new Node(val)
        const node = this.head
        node.prev = newNode
        this.head = newNode
        this.head.next = node
        this.head.prev = null
        this.length++
        return this
    }

    shift() {
        if (this.length === 0) return undefined;
        const shiftedNode = this.head

        this.head = shiftedNode.next;
        this.head.prev = null
        shiftedNode.next = null
        this.length--
        return shiftedNode

    }

    get(index) {
        if (index < 0 || index >= this.length || this.length === 0) {
            return undefined
        }
        let count, current;

        if (index < this.length / 2) {
            count = 0
            current = this.head;

            while (index !== count) {
                current = current.next
                count++
            }

        } else {
            count = this.length - 1
            current = this.tail;
            while (index != count) {
                current = current.prev
                count--
            }
        }

        return current
    }

    set(val, index) {
        const foundNode = this.get(index)
        if (foundNode = null) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return undefined
        if (this.length === 0 || index === 0) return !!this.unshift(val)

        if (index === this.length) return !!this.push(val)

        const newNode = new Node(val)
        const node = this.get(index)
        const prev = node.prev
        newNode.prev = prev
        newNode.next = node
        node.prev = newNode
        prev.next = newNode
        this.length++
        return true

    }

    remove(index) {
        if (this.length === 0 || index < 0) return undefined;
        if (index === 0) return !!this.shift()
        if (index === this.length) return !!this.pop()

        const nodeToDelete = this.get(index)

        const beforeNode = nodeToDelete.prev
        const afterNode = nodeToDelete.next

        beforeNode.next = afterNode
        afterNode.prev = beforeNode

        nodeToDelete.next=null
        nodeToDelete.prev=null

        this.length--

        return nodeToDelete

    }

    // print() {
    //     let counter = 0
    //     while (counter < this.length) {

    //     }
    // }
}



const list = new doublyLinkedList()
list.push(2)
list.push(4)
list.push(6)
list.push(8)
console.log("list before", list)
const poppedNode = list.pop()
console.log("popped node", poppedNode)
const shiftedNode = list.shift()
console.log("shifted node", shiftedNode)
list.unshift(0)

console.log("list after", list)


