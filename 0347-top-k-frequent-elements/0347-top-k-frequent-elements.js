/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let storage = {}
   for (let num of nums) {
       if (num in storage) storage[num]++
       else storage[num] = 1
   }
    let max = Object.entries(storage).sort((a,b) => b[1] - a[1])
    max.length = k
    return max.reduce((result, num) => {
        result.push(Number(num[0]))
        return result
    }, [])
};