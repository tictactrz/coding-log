class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    append(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(data);

    };

    prepend(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let prependNode = new Node(data);
        prependNode.next = this.head;
        this.head = prependNode;

    };

    delete(value) {
        if (this.head && this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;

        while (currentNode && currentNode.next) {
            if (currentNode.next.data === value) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }

        console.log(`Value ${value} not found in the list.`);
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let currentNode = this.head;
        while (currentNode) {

            console.log(currentNode.data);
            currentNode = currentNode.next;
        };


    };
}

let list = new LinkedList();

list.append(20);
list.append(30);
list.prepend(10);
list.delete(20);
list.print();
