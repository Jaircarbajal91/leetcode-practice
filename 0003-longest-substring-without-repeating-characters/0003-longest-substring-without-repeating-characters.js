/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    let [l, r] = [0, 0];
    let longest = s[l].length;
    while (l <= r && r < s.length) {
        let [left, right] = [s[l], s[r]];
        let currentString = ''
        while(!currentString.includes(right) && right) {
            currentString += right
            r++
            right = s[r]
        }
        longest = Math.max(currentString.length, longest);
        l++
        r = l
    }
    return longest
}