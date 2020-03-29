class Queue {
    constructor() {
        this.Head = -1;
        this.arr = [];
        this.Rare = -1;
        // Rare and Head = -1 cause there is no queue at first

    }

    enqueue(value) {
        // if (this.isFull())
        //     return;

        // else
         if (this.isEmpty()) {

            this.Head = this.Rare = 0;

        }
        else {

            this.Rare++;

            this.arr[this.Rare] = value;
            console.log(this.arr[this.Rare]);
        }
    }

    dequeue() {

        if (this.isEmpty()) {
            return "No thing ro dequeue";
        }
        else if (this.Head === this.Rare) {
            this.Head = this.Rare = -1;

        }
        else {
            this.Head++;

        }

    }
    isEmpty() {
        if (this.Rare === -1 && this.Head == -1) {
            // console.log("EMPTY QUEUE");
            return true;
        }
        else 
        return false;
    }
//// if there is a size and we would check if it's full to not came with error when we enqueue but we use dynamic array here so :);

    // isFull() {
    //     if (this.Rare === this.arr.length - 1) {
    //         console.log("Full Queue");
    //         return true;
    //     }
    //     return false;

    // }

print(){
    while (this.Rare<this.arr.length-1) {
        console.log(this.arr[this.Rare]);
        
    }
}


}
let q = new Queue();
q.enqueue(5);
q.enqueue(3);
q.enqueue(1);

q.dequeue();
q.print();
