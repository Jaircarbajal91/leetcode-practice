/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    for (let num of nums) {
        if (num in map) map[num]++
        else map[num] = 1
    }
    let entries = Object.entries(map)
    let result = entries
        .sort((a, b) => a[1] - b[1])
        .slice(entries.length - k)
        .reduce((resultArr, arr) => {
            resultArr.push(Number(arr[0]))
            return resultArr
        }, [])
    return result
};