/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let seen = new Array(nums.length).fill(false)
    return findPermutations(nums, seen, result, [])
};

const findPermutations = (nums, seen, result, path) => {
    if (path.length === nums.length) {
        result.push(Array.from(path))
        return 
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (seen[i]) continue
        seen[i] = true
        path.push(nums[i])
        findPermutations(nums, seen, result, path)
        seen[i] = false
        path.pop()
    }
    return result;
}