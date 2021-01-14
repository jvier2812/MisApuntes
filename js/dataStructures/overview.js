//---- STACKS ANDS QUEUES ----
// Stack: stores items in a LIFO order
// Queue: stores items in a FIFO order
const stack = [1, 2, 3, 4]
console.log('the stack:', stack)
stack.push(5)
console.log('stack.push(5):', stack) // [1,2,3,4,5]
stack.pop()
console.log('stack.pop():', stack) // [1,2,3,4]

const queue = [1, 2, 3, 4]
console.log('the queue:', queue)
queue.push(5)
console.log('queue.enqueue(5):', queue) // [1,2,3,4,5]
queue.shift()
console.log('queue.dequeue():', queue) // [1,2,3,4]

//---LINKED LIST
//pros: fast ops, flexible size
//cons: costly lookups

//---ARRAYS
//pros: fast lokups, fast appends
//cons: slowe insert, slow deletes
