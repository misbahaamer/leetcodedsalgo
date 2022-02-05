/*
array of prices where prices[i] is the price of stock on ith day. maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the futire to sell that stock. return max profit you can achieve from this transactin. if no profit return 0
[7,1,5,3,6,4]
*/

//O(T^2), O(1)
function MaxProfit(params) {
  //keep track of profit
  let buyPrice = params[0];
  let profit = 0;
  //go through the array and see if there is profit
  //if there is no profit , continue else track profit
  //check if there is profit
  //check if my current purchase price is greater than old price replace my starting price
  //check if new starting price gives more profit than current tracked profit
  for (let i = 0; i < params.length - 1; i++) {
    let tempProfit = params[i + 1] - params[i];
    if (tempProfit > 0) {
      if (params[i] < buyPrice) {
        buyPrice = params[i];
      }
      if (params[i + 1] - buyPrice > profit) {
        profit = params[i + 1] - buyPrice;
      }
    }
  }
  return profit;
}
