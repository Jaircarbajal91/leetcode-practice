/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = []
    let curr = head
    let result = new ListNode()
    let copy = result
    while(curr) {
        arr.push(curr)
        curr = curr.next
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.length - i === n) continue
        let node = new ListNode(arr[i].val)
        copy.next = node
        copy = copy.next
    }
    return result.next
};