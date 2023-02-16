/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]]
  const dfs = (i, subset) => {
      if (i >= nums.length) return
      subset.push(nums[i])
      dfs(i + 1, subset)
      result.push(subset.slice())
      subset.pop()
      dfs(i + 1, subset)
  }
  dfs(0, [])
  return result
};