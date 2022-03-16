/**
 * @param {number []} prices
 * @returns {number}
 */
const bestTimeToBuyAndSellStock = (prices) => {
    let buy = prices[0];
    prices[0] = 0;
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){

        if(buy > prices[i]){
            buy = prices[i];
            prices[i] = 0; //if you sell on that day profit is Zero
        }else{
            maxProfit = Math.max(prices[i] - buy, maxProfit)
        }
    }
    return maxProfit;
}
export default bestTimeToBuyAndSellStock;