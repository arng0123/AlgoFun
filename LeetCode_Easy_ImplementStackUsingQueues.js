/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.q1 = [ ]
    this.q2= [ ]
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
    while(this.q2.length > 0){
        let num = q2.shift()
        q1.push(num)
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let shift = this.q1.pop()
    return shift
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[this.q1.length-1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (this.q1.length === 0 && this.q2.length === 0)
};
