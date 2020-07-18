// WAF to that will accept array of integers and number called n. 
// The function should calculate maximum sum of n consecutive elements in the array
// Time Complexity - Sum

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if(num > arr.length) return null;
    for(let i=0; i< num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let i=num ; i< arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 4));