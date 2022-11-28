/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = ''
  let left = 0
  let right = 0
  while(left <= right && right < s.length) {
      let currentString = ''
      while(!currentString.includes(s[right]) && s[right]) {
          currentString += s[right]
          if (currentString.length > longest.length) longest = currentString
          right++
      }
      left++
      right = left
  }
  return longest.length
};