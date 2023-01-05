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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    
    let l = diameterOfBinaryTree(root.left)
    let r = diameterOfBinaryTree(root.right)
    
    return Math.max(Math.max(l, r), left + right)
};

const maxDepth = (root) => {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}