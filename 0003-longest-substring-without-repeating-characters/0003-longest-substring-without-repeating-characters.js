/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let set = new Set()
    let pointer = 0
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        while (set.has(letter)) {
            set.delete(s[pointer])
            pointer++
        }
        set.add(letter)
        max = Math.max(max, set.size)
    }
    return max
};