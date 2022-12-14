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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    
    let result = {1: root.val}
    let queue = [root]
    root.level = 1;
    
    while (queue.length) {
        let curr = queue.shift()
        
        result[curr.level] = curr.val
        
        if (curr.left) {
            curr.left.level = curr.level + 1
            queue.push(curr.left)
        }
        if (curr.right) {
            curr.right.level = curr.level + 1
            queue.push(curr.right)
        }
    }
    
    return Object.values(result);
};