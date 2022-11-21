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
    if (!root) return 0;

    let lheight = maxHeight(root.left)
    let rheight = maxHeight(root.right)
    
    let ldiameter = diameterOfBinaryTree(root.left)
    let rdiameter = diameterOfBinaryTree(root.right)
    
    return Math.max(lheight + rheight, Math.max(ldiameter, rdiameter))
    
};

let maxHeight = (root) => {
    if (!root) return 0
    return 1 + Math.max(maxHeight(root.left), maxHeight(root.right))
}