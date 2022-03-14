import  maxSubArray  from "./maxSubArray.js";
import containsDuplicate from './containsDuplicate.js'
// const maxSubArray = (arr) => {
//     let currSum =  0;
//     let maxSum = 0
//     for(let i = 1; i < arr.length - 4; i++){
//        currSum =  currSum - arr[i - 1];
//        currSum = currSum + arr[i + 3];
//         maxSum = Math.max(currSum, maxSum);
//     }
//     return maxSum;
// }
let arr = [1,2,3,1]
console.log(containsDuplicate(arr))