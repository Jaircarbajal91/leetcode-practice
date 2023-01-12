/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums, cur) {
    function store(nums, cur) {
        if (cur === nums[cur]) return cur
    
        let next = nums[cur]
        nums[cur] = cur    
        return store(nums, next)
    }
    return store(nums, 0)
};
