/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const sorted = nums.slice().sort((a, b) => a - b)
    for (let i = 0; i < sorted.length - 1; i++) {
        let next = sorted[i + 1];
        if (sorted[i] === next) return next
    }
    return -1
};
