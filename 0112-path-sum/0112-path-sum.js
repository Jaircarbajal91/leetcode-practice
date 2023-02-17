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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let hasSum = false
    const dfs = (root, path, sum) => {
        if (!root) return
        if (!root.left && !root.right && sum + root.val === targetSum) {
            hasSum = true
        }
        path.push(root.val)
        sum += root.val
        dfs(root.left, path, sum)
        dfs(root.right, path, sum)
        path.pop()
        sum -= root.val
    }
    dfs(root, [], 0)
    return hasSum
};