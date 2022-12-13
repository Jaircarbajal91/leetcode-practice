/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let reversedList = null;
    while(curr) {
        let temp = curr.next
        curr.next = reversedList
        reversedList = curr
        curr = temp
    }
    return reversedList
};