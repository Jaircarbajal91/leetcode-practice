/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function(preorder, inorder) {
    const isBaseCase = !preorder.length || !inorder.length;
    if (isBaseCase) return null;

    return dfs(preorder, inorder);
}

var dfs = (preorder, inorder) => {
    const { leftInorder, mid, rightInorder } = getPointers(preorder, inorder);
    const root = new TreeNode(inorder[mid]);

    root.left = buildTree(preorder, leftInorder);
    root.right = buildTree(preorder, rightInorder);

    return root;
}

const getPointers = (preorder, inorder) => {
    const next = preorder.shift();
    const mid = inorder.indexOf(next);
    const leftInorder = inorder.slice(0, mid);
    const rightInorder = inorder.slice(mid + 1);

    return { leftInorder, mid, rightInorder };
}

