/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let result = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while(stack.length && stack[stack.length - 1][0] < temperatures[i]) {
            let [stackTemp, stackIndex] = stack.pop()
            result[stackIndex] = i - stackIndex
        }
        stack.push([temperatures[i], i])
    }
    return result
};