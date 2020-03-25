function selection(array) {
    for (let j = 0; j < array.length; j++) {
        let min = array[j];
        let minindex = j;
        for (let i = j+1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
                minindex = i;
                // console.log("min",array[minindex]);
        console.log("BEFORE SWAP ",array );

            }
        }
    if(minindex!=j){
            let temp=array[j];
            array[j]=array[minindex];
            array[minindex]=temp;
            // console.log("Array",array);
    }
    }
    return array;
}
console.log(selection([45, 222, 1, 199, 44, 66]))
