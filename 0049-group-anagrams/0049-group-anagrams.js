/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let result = {}
   for (let str of strs) {
       let key = str.split('').sort().join('')
       if (key in result) result[key].push(str)
       else result[key] = [str]
   }
   return Object.values(result)
};