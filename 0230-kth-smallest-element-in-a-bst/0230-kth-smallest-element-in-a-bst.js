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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    function dfs(node, smallestVals) {
        if (!node) return smallestVals
        if (node.left) {
            smallestVals.push(node.left.val)
            dfs(node.left, smallestVals)
        }
        if (node.right) {
            smallestVals.push(node.right.val)
            dfs(node.right, smallestVals)
        }
        return smallestVals
    }
    return dfs(root, [root.val]).sort((a, b) => a - b)[k - 1]
};
