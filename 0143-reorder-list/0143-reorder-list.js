/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const [first, second] = findMid(head)
    let reversed = reverse(second)
    console.log(first, second)
    let merged = merge(first, reversed)
    return merged
};

const findMid = (head) => {
    let [slow, fast] = [head, head]
    let dummy = new ListNode()
    let firstHalf = dummy
    while(fast && fast.next) {
        dummy.next = slow
        slow = slow.next
        fast = fast.next.next
        dummy = dummy.next
    }
    dummy.next = null
    return [firstHalf.next, slow]
}

const reverse = (head) => {
    let curr = head
    let prev = null
    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}

const merge = (list1, list2) => {
    let dummy = new ListNode()
    let result = dummy
    while(list1 && list2) {
        dummy.next = list1
        list1 = list1.next
        dummy = dummy.next
        dummy.next = list2
        list2 = list2.next
        dummy = dummy.next
    }
    dummy.next = list1 || list2
    return result.next
}