/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (arr) => {
    const arrData = {};
    arr.sort((a,b) => {return b - a})
   
    
    for(let i = 0; i < arr.length; i++){
        if(arrData[arr[i]] === undefined) {
            arrData[arr[i]] = i;
            console.table(arrData)
        }else{
            return true;
        }
        
        
    }
    return false
    
}
export default containsDuplicate;