/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    const dfs = (i, path, pathSum) => {
        if (pathSum === target) {
            result.push(path.slice())
            return
        }
        if (pathSum > target) return
        if (i > candidates.length - 1) return
        
        path.push(candidates[i])
        pathSum += candidates[i]
        dfs(i, path, pathSum)
        
        path.pop()
        pathSum -= candidates[i]
        dfs(i + 1, path, pathSum)
        return
    }
    dfs(0, [], 0)
    return result
}; 