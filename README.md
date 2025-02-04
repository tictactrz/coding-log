# 30 Day Coding Challenge - Focus on LeetCode/Algorithms


## Day 1 - Saturday, February 1, 2025
1. Planned out the file structure/architecture for Informy
2. Planned out the refined techstack for Informy


## Day 2 - Sunday, February 2, 2025
1. Planned out the database schemas for Informy



## Day 3 - Monday, February 3, 2025
1. Solved leetcode problem [#1 - Two Sum](https://leetcode.com/problems/two-sum/description/)
   ![Two Sum Solution](coding-log/images/1-two-sum.js.png)


2. Read Chapter 2 of Grokking Algorithms: Selection Sort, Arrays, Linked Lists

Wrote this Linked List implementation: 

```
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
```


Main takeaways from my notes on Chapter 2: 

1. Arrays vs Linked Lists - Key Differences:
   - Arrays: Fast access O(1), but slow insertions/deletions O(n)
   - Linked Lists: Slow access O(n), but fast insertions/deletions O(1)

2. When to use each:
   - Arrays: Use when you need quick access and know the size
   - Linked Lists: Use when you need frequent insertions/deletions

3. Practical Implementation:
   - Created Node class for individual elements
   - Built LinkedList class to manage the chain of nodes
   - Learned about pointer manipulation and traversal


## Day 4 - Tuesday, February 4, 2025
1. Solved leetcode problem [#217 - Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)
2. Read Chapter 3 of Grokking Algorithms 
