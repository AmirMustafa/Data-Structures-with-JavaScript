// WAF to count unique numbers in the integers

function countUniqueValue(arr){
    if(arr.length === 0) return 0;
    var i=0;
    for(j=1; j< arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

// let a = countUniqueValue([-3, -1, -1, -1, 0, 1, 2]);    // 5
let a = countUniqueValue([]);    // 5
console.log(a);