class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}


class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0
    }

    enqueue(val){
        const newNode=new Node(val)
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
            this.length++
            return this
        };
        const node=this.last;
        this.last=newNode
        node.next=newNode
        this.length++
        return this
    }
    
    dequeue(){
        const first=this.first;
        if(!first)return undefined;
        if(first===this.last){
            this.first=null;
            this.last=null;
            this.length--
            return true
        }
        this.first=this.first.next;
        first.next=null
        this.length--
        return true
    }
}


const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log("queue before",queue)
queue.dequeue()
queue.dequeue()
console.log("queue",queue)


