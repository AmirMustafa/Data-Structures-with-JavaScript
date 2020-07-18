// WA function called sumZero which accepts sorted array of integers. This 
// function should find first pair where sum is 0

function sumZero(arr) {
    for(let i=0; i < arr.length; i++){
        for(let j=i+1; j< arr.length; j++){
            if(arr[i]+ arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]);

// Time Complexity - O(N^2), Space Complexity - O(1)