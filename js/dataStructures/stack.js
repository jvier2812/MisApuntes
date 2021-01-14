/** Class representing a Stack. */

class Stack {
    constructor() {
        this._storage = {}
        this._length = 0
    }
    /*
     * Adds a new value at the end of the stack
     * @param {*} value the value to push
     */
    push(value) {
        this._storage[this.length] = value
        this._length++
    }

    /*
     * Removes the value at the end of the stack and returns it
     * @return {*} the last and newest value in the stack
     */
    pop() {
        if (this._length) {
            const lastVal = this._storage[this._length - 1]
            delete this._storage[this._length - 1]
            this._length--
            return lastVal
        }
    }
    /*
     * Returns the value at the end of the stack without removing it
     * @return {*} the last and newest value in the stack
     */
    peek() {
        if (this._length) {
            return this._storage[this._length - 1]
        }
    }
}

const myStack = new Stack()
myStack.push('zero')
myStack.push('one')

// _storage: {0: zero, 1: one}
// _length: 2

myStack.pop()

// {0: 'zero'}, length:1

console.log(myStack)
