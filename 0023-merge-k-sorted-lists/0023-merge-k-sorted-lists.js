/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeSortedLists = (list1, list2) => {
    let dummy = new ListNode()
    let result = dummy
    while(list1 && list2) {
        if (list1.val < list2.val) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }
    dummy.next = list1 || list2
    return result.next
}

var mergeKLists = function(lists) {
    if (!lists.length) return null
    while(lists.length > 1) {
        let list1 = lists.pop()
        let list2 = lists.pop()
        lists.push(mergeSortedLists(list1, list2))
    }
    return lists[0]
};


