/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let digit = digits.length - 1;
  let hasCarry = false
  while(digit > -1) {
      if (digit === digits.length - 1) {
          if (digits[digit] === 9) {
              digits[digit] = 0
              hasCarry = true
              digit--
              continue
          } else {
            digits[digit] = digits[digit] + 1
          }
      }
      if (hasCarry) {
          if (digits[digit] === 9) {
              digits[digit] = 0
          } else {
              digits[digit] = digits[digit] + 1
              hasCarry = false
          }
      }
      digit--
  }
  if (hasCarry && digits[0] === 0) digits.unshift(1)
  else if (hasCarry) digits[0] = digits[0] + 1
  return digits
};