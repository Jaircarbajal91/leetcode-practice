
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length < 1) {
        this.stack.push({val: val, min: val})
    } else {
        this.stack.push({val: val, min: Math.min(val, this.stack[this.stack.length - 1].min)})    
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.length = this.stack.length - 1
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */