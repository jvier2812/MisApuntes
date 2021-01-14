// DIVIDE AND CONQUER SECTION

//Divide and Conquer
//0. Recognize base case
//1. Divide: Break problem down during each call
//2. Conquer: Do work on each subset
//3. Combine: Solutions

const list = [2, 6, 7, 90, 103]

// TASK: Implement linear search.

function linearSearch(list, item) {
    let index = -1
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            index = i
            break
        }
    }
    return index
}

console.log('linearSearch:', linearSearch(list, 90)) // 3

// TASK: Implement binary search

function binarySearch(list, item, ...args) {
    let start = args[0] ? args[0] : 0
    let end = args[1] ? args[1] : list.length - 1
    console.log('args', args)
    console.log('send', start, end)
    let mid = Math.floor((start + end) / 2)
    if (start > end) return -1
    if (item === list[mid]) return mid
    if (item < list[mid]) {
        console.log('go to the left')
        return binarySearch(list, item, start, mid - 1)
    } else {
        console.log('go to the right')
        return binarySearch(list, item, mid + 1, end)
    }
}
console.log('binarySearch:', binarySearch(list, 90)) // 3
