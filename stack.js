class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (this.length <= 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++
            return this
        }
        let node = this.first
        this.first = newNode;
        newNode.next = node
        this.length++
        return this
    }

    pop() {
        if (this.length <= 0) return undefined;
        let node = this.first
        if (this.first === this.last) {
            this.first = null
            this.length--
            return node
        }
        this.first = node.next;
        this.length--
        return node
    }
}


const stack = new Stack()
stack.push(0)
stack.push(2)
stack.push(4)
console.log("stack insertion", stack)

stack.pop()
stack.pop()


console.log("stack after popping", stack)