/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let [l, r] = [0, 1];
    while (r < prices.length) {
        let left = prices[l]
        let right = prices[r]
        let profit = right - left
        result = Math.max(result, profit)
        if (right < left) l = r
        r++
    }
    return result;
};