/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    candidates.sort((a, b) => a - b)
    const dfs = (idx, path, pathSum) => {
        if (pathSum > target) return
        if (pathSum === target) {
            result.push(path.slice())
            return
        }
        
        for (let i = idx; i < candidates.length; i++) {
            if (i !== idx && candidates[i] === candidates[i - 1]) continue
            dfs(i + 1, [...path, candidates[i]], pathSum + candidates[i])
        }
    }
    dfs(0, [], 0)
    return result
};