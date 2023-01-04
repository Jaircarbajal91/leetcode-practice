/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        const operator = tokens[i]
        if (operator === '+') {
            const num2 = +stack.pop()
            const num1 = +stack.pop()
            stack.push(num1 + num2)
        } else if (operator === '-') {
            const num2 = +stack.pop()
            const num1 = +stack.pop()
            stack.push(num1 - num2)
        } else if (operator === '/') {
            const num2 = +stack.pop()
            const num1 = +stack.pop()
            stack.push(Math.trunc(num1 / num2))
        } else if (operator === '*') {
            const num2 = +stack.pop()
            const num1 = +stack.pop()
            stack.push(num2 * num1)
        } else {
            stack.push(operator)
        }
    }
    return stack[0]
};