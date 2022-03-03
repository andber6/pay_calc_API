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

    // adds an element at the end of list
    add(new_data) {
        // creates a new node
        // var node = new ListNode(element)

        var new_node = new ListNode(new_data);
 
        /* 3. Make next of new Node as head */
        new_node.next = head;
 
        /* 4. Move the head to point to new Node */
        head = new_node;
        // to store current node
        // var current;

        // // if list is empty add the element and make it head
        // if (this.head == null){
        //     this.head = node
        // } else {
        //     current = this.head;
        //     // iterate to the end of list
        //     while(current.next) {
        //         current = current.next;
        //     }
        //     // add node
        //     current.next = node;
        // }
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