/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let duplicate = -1
    for (let num of nums) {
        let cur = Math.abs(num)
        if (nums[cur] < 0) {
            duplicate = cur
            break
        }
        nums[cur] = -nums[cur]
    }
    nums = nums.map(num => Math.abs(num)) 
    return duplicate
};
