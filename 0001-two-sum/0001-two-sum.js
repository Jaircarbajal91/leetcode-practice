/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let table = {};
    for (let i = 0; i < nums.length; i++) {
        if (table[target - nums[i]] !== undefined) {
            return [table[target - nums[i]], i];
        } else {
            table[nums[i]] = i;
    }
  }
};