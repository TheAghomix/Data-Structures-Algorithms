/**
 * @param {number [] } arr
 * @returns {number}
 */

 const maxSubArray = (arr) => {
    let maxSum = getInitialSum(arr, 0 ,4)
  
    let currSum = 0;

    for(let i = 1; i < arr.length - 4; i++){
        currSum = maxSum
        currSum = currSum - arr[i -1];
        currSum = currSum  + arr[i + 3];
        maxSum = Math.max(currSum, maxSum)
    }
   

    return maxSum;
}

const getInitialSum = (arr, start , end) => {
    let sum = 0;
    for ( let i = start; i < end; i++) {
        sum += arr[i];
    }
    return sum;
}
export default maxSubArray