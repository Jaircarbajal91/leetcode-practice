/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let storage = {};
    let result = []
    for (let num of nums) {
        if (num in storage) {
            storage[num]++;
        } else {
            storage[num] = 1;
        }
    }
    let sortedObj = Object.keys(storage).sort((a, b) => storage[b] - storage[a])
    for (let i = 0; i < k; i++) {
        result.push(sortedObj[i])
    }
    return result;
};