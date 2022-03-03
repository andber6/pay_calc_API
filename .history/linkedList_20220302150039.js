class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        head ? this.head = head : this.head = null;
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
    insertAfter(prev_node , new_data) {
 
    /* 1. Check if the given Node is null */
    if (prev_node == null)
    {
        // document.write("The given previous node cannot be null");
        console.log("The given previous node cannot be null");
        return;
    }
 
    /* 2. Allocate the Node &
    3. Put in the data*/
    var new_node = new Node(new_data);
 
    /* 4. Make next of new Node as next of prev_node */
    new_node.next = prev_node.next;
 
    /* 5. make next of prev_node as new_node */
    prev_node.next = new_node;
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