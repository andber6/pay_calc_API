class ListNode {
    constructor(data) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    // this method returns the number of nodes present in the linked list
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    //this method returns the last node of the linked list
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }

    // this method returns the first node of the linked list
    getFirst() {
        return this.head;
    }
}

module.exports = { ListNode, LinkedList }