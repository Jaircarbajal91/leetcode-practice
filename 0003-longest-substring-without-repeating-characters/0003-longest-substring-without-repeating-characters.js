/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let l = 0
    let max = 0
    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        while(set.has(letter)) {
            set.delete(s[l])
            l++
        }
        set.add(letter)
        max = Math.max(max, set.size)
    }
    return max
}
