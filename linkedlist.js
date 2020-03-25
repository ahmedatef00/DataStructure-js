class Node {

    constructor(data, next = null) { //because last node refrences to null and this is our first node 
        this.data = data;
        this.next = next;

    }

}

class Linkedlist {

    constructor() {
        this.head = null; //list is empty if there is no first node 
        //size list
        this.size = 0;

    }
    //insert fnode
    //insert head 
    insertFirst(data) {
        //this.head to the next value pushed them over
        //this.head is next because this.head hya el object el gdeed elly bydaf kol mra a5r object bydaf el next btaa3o hwa el null 

        // this.head = new Node(data, this.head);
        let newNode = new Node(data);
        newNode.next = this.head;

        this.head = newNode;

        this.size++;
    }
    insertLast(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;

            }
            current.next = newNode;
        }
        this.size++;
    }
    //last node
    //at index
    add(data, index) {
        let newNode = new Node(data);

        if (index > 0 && index > this.size) {
            return "unbounded";
        }
        if (index === 0) {
            this.insertFirst(data);
            return;
        } else {
            let current = this.head;
            let counter = 0;
            while (counter < index - 1) {
                current = current.next;
                newNode.next = current.next;
                current.next = newNode;
                counter++;
            }


        }
        this.size++;

    }
    //get  data at index 
    getdataatindex(index) {
        let c = 0;
        let current = this.head;
        while (current) {
            if (c === index) {
                console.log(current.data);

            }
            c++;
            current = current.next;
        }


        return null;
    }
    //remove at index 
    remove(index) {

        let c = 0;
        let current = this.head;
        if (index > 0 && index > this.size) {
            return "unbounded";
        }
        if (index === 0) {
            this.head = current.next;
            // current.next=this.head

            while (c < index - 1) {
                current = current.next;
                c++;
            }
            let j = current.next;
            current.next = j.next;


            this.size--;
        }
        //clear list 
        //print list data 
    }
    print() {

        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }

    }

    clearlist() {
        this.head = null;
        this.size = 0;
    }
}
const l1 = new Linkedlist();
l1.insertFirst(100);
l1.insertFirst(200);
l1.add(130, 2);
l1.print();
console.log('after remove:::::');
l1.remove(0);
l1.print();
l1.clearlist();
console.log('after clear:::::');
l1.print();