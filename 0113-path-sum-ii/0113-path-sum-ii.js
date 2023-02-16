/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = []
    const dfs = (root, path, pathSum) => {
        if (!root) return
        if (!root.left && !root.right && (pathSum + root.val) === targetSum) {
            res.push([...path, root.val])
            return
        }
        
        path.push(root.val)
        pathSum += root.val
        dfs(root.left, path, pathSum)
        dfs(root.right, path, pathSum)
        path.pop()
        pathSum -= root.val
    }
    dfs(root, [], 0)
    
    return res
};