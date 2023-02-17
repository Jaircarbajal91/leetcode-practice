/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    
    candidates.sort((a, b) => a - b)
    const dfs = (i, path, pathSum) => {
        if (pathSum > target) return
        if (pathSum === target) {
            result.push(path.slice())
            return
        }
        for (let j = i; j < candidates.length; j++) {
            if (j !== i && candidates[j] === candidates[j - 1]) continue
            dfs(j + 1, [...path, candidates[j]], pathSum + candidates[j])
        }
        
    }
    dfs(0, [], 0)
    return result;
};