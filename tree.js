class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val)

        if (this.root === null) {
            this.root = newNode
            return this
        }

        let current = this.root;

        while (true) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                }
            }
            else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            }
        }


    }

    find(val) {
        if (this.root === null) return undefined;
        if (this.root.val === val) return true

        let current = this.root
        while (true) {
            if (current.val == val) {
                return true
            }
            else if (val < current.val) {
                if (current.left === null) {
                    return false
                }
                else {
                    current = current.left
                }
            }
            else {
                if (current.right === null) {

                    return false
                }
                else {
                    current = current.right
                }
            }
        }
    }

    BFS() {

        let node = this.root,
            data = [],
            queue = []
        queue.push(node)

        while(queue.length){
            node=queue.shift()
            data.push(node.val)
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }
        return data
    }

    DFSPreOrder(){
        var data=[]

        function traverse(node) {
            data.push(node.val )
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    DFSPostOrder(){
        var data=[]

        function traverse(node) {
            if(node.left)traverse(node.left)
            if(node.right)traverse(node.right)
            data.push(node.val )
        }
        traverse(this.root)
        return data
    }

    DFSInOrder(){
        var data=[]

        function traverse(node) {
            if(node.left)traverse(node.left)
            data.push(node.val )
            if(node.right)traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}

const tree = new BST()
tree.insert(10)
tree.insert(3)
tree.insert(11)
tree.insert(5)
console.log("tree", tree)
let found = tree.find(16)
console.log("found", found)


// tree traversal
const bfs=tree.BFS()
console.log("bfs",bfs)

const dfsPreorder=tree.DFSPreOrder()
console.log("dfsPreOrder",dfsPreorder)

const dfsPostOrder=tree.DFSPostOrder()
console.log("dfsPostOrder",dfsPostOrder)

const dfsInOrder=tree.DFSInOrder()
console.log("dfsInOrder",dfsInOrder)