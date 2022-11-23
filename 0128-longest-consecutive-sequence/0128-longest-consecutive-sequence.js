/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 1) return 0
    let sorted = nums.sort((a, b) => a - b)
    let result = 0;
    let count = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        let next = sorted[i + 1]
        let curr = sorted[i];
        if (curr + 1 === next) {
          count++
          result = Math.max(count, result)
        } else if (curr === next) {
            continue;
        } else {
          count = 0  
        } 
    }
    return result + 1; 
};