

class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }

    push(value) {
        this.top++;

        this.arr[this.top] = value;

    }
    pop() {
        if (this.isEmpty()) {
            return "there no thing there";
        }
        this.top--;
        // this.arr[this.top]=undefined;
    }

    top() {
        if (isEmpty) {
            console.log("EMPTY");

            return -1;//undefind wrong answer 
        }
    }
    isEmpty() {
        if (this.arr.length === 0) {
            console.log("EMPTY");

            return true;
        }
        else return false;
    }
    print() {
        var top = this.top;

        while (top >= 0) {
            console.log(this.arr[top]);
            top--;
        }
    }
    reverse() {
       let  j=this.arr.length;
       for (let i = 0;  i<(this. arr.length/2); i++) {
           j--;
           //Reverse by Swapping 
          let tmp=this.arr[i];
           this.arr[i]=this.arr[j];
           this.arr[j]=tmp;
       console.log(this.arr[j]);

       }
       
    }
    clear() {
        this.arr.length = 0;
    }







}
let S = new Stack();

S.push(3);
S.push(1);
S.push(2);
S.push(0);
S.pop(0);
console.log(S.arr);
console.log("Print :");

S.print();

console.log("REVerse :");

S.reverse();

console.log("Print :");

S.print();