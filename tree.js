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
}

const tree = new BST()
tree.insert(10)
tree.insert(3)
tree.insert(11)
tree.insert(5)


console.log("tree", tree)

let found = tree.find(16)

console.log("found", found)