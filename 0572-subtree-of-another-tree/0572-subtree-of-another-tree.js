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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let queue = [root];
    while (queue.length) {
        let curr = queue.shift()
        if ((curr.val === subRoot.val) && sameTree(curr, subRoot)) return true
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }
    return false
};

const sameTree = (p, q) => {
    if (!q && !p) return true
    if (!q || !p) return false
    if (q.val !== p.val) return false
    if (!sameTree(p.left, q.left)) return false
    if (!sameTree(p.right, q.right)) return false
    return true
}