var reverse = function(x) {
    let y = "";
    let digit;
    let negative = false;
    
    if(x < 0){
        x = Math.abs(x);
        negative = true;
    }
    
    let length = x.toString().length;
    
    while(length > 0){
        digit = x % 10;
        console.log("d",digit);
        
        y = y+digit;
        x =x / 10;
        console.log("X:",x);
        
        length--;
    }
    console.log("y:",y);
    let res = parseInt(y);
    
    if(res > Math.pow(2, 31)) {
        res = 0;
    }

    if(negative){
        res = -res;
    }
    
    return res;
};
console.log(reverse(54321));
