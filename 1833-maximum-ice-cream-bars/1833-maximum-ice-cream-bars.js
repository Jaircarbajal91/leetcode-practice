/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let sortedCoins = costs.sort((a, b) => a - b)
    let count = 0
    for (let coin of sortedCoins) {
        if (coin <= coins) {
            count++
            coins -= coin
        }
        if (coins === 0) break
    }
    return count
};