//not optimized  => O(n^2)
const isUniqueV1 = arr => {
    let result = true

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`)

        for (let j = 0; j < arr.length; j++) {
            console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`)
            if (i !== j && arr[i] === arr[j]) {
                result = false
            }
        }
    }

    return result
}

//optimized => O(N)
const isUniqueV2 = arr => {
    const breadcrumbs = {}
    let result = true

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~ LOOP ~~~~ i === ${i}`)
        if (breadcrumbs[arr[i]]) {
            result = false
        } else {
            breadcrumbs[arr[i]] = true
        }
    }

    return result
}

//console.log(isUniqueV1([1, 2, 3]) === true) //true
//console.log(isUniqueV2([1, 2, 3]) === true) //true

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function (arr) {
    const breadcrumbs = {}
    const uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!breadcrumbs[arr[i]]) {
            uniqueArr.push(arr[i])
            breadcrumbs[arr[i]] = true
        }
    }
    return uniqueArr.sort((a, b) => a - b)
}

// console.log(uniqSort([2, 4, 2, 2, 3, 2, 2, 2])) // => [2,3,4]

//-----------MEMOIZATION---------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('-------------MEMOIZATION-------------')

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = n => n * 10

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~')
console.log('times10 returns:', times10(9))

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {}

const memoTimes10 = n => {
    if (n in cache) {
        console.log('fetching from cache: ', n)
        return cache[n]
    } else {
        console.log('calculating results')
        let result = times10(n)
        cache[n] = result
        return result
    }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~')
console.log('Task 2 calculated value:', memoTimes10(9)) // calculated
console.log('Task 2 cached value:', memoTimes10(9)) // cached

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosure = () => {
    let cache = {}
    return n => {
        if (n in cache) {
            console.log('fetching from cache: ', n)
            return cache[n]
        } else {
            console.log('calculating results')
            let result = times10(n)
            cache[n] = result
            return result
        }
    }
}
// returned function from memoizedAdd
const memoClosureTimes10 = memoizedClosure()
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~')
console.log('Task 3 calculated value:', memoClosureTimes10(9)) // calculated
console.log('Task 3 cached value:', memoClosureTimes10(9)) // cached

// Task 4: Make your memo function generic and accept the times10 function as a
//callback rather than defining the n * 10 logic inside the if/else or pulling it
// in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as
// well, just like the cache from the previous example.

const memoize = cb => {
    let cache = {}
    return (n, ...args) => {
        if (n in cache) {
            console.log('fetching from cache: ', n)
            return cache[n]
        } else {
            console.log('calculating results')
            let result = cb(n, ...args)
            cache[n] = result
            return result
        }
    }
}
// returned function from memoize
const memoizedTimes10 = memoize(times10)
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~')
console.log('Task 3 calculated value:', memoizedTimes10(9)) // calculated
console.log('Task 3 cached value:', memoizedTimes10(9)) // cached
