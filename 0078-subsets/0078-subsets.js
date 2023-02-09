/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    let subset = []
    const dfs = (i) => {
        if (i >= nums.length) {
            result.push(subset.slice())
            return
        }
        // decision to include nums[i]
        subset.push(nums[i])
        dfs(i + 1)
        // decision to NOT include nums[i]
        subset.pop()
        dfs(i + 1)
        
    }
    dfs(0)
    return result
};