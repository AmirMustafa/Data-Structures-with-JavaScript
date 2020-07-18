// WA function called sumZero which accepts sorted array of integers. This 
// function should find first pair where sum is 0

function sumZero(arr) {
    let left = 0;
    let right = arr.length;
    let sum = arr[left] + arr[right];
    
    while(left < right){
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]);

// Time Complexity - O(N), Space Complexity - O(1)