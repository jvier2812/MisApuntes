let wr = (msg = '--------') => console.log(msg)

/* Factorial exercise solution */
const factorial = n => {
    if (n < 2) return 1
    return n * factorial(n - 1)
}

const bubbleSort = nums => {
    for (let i = 1; i <= nums.length; i++) {
        let swaps = false
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                swaps = true
            }
        }

        if (!swaps) break
    }

    return nums
}

const insertionSort = nums => {
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                let spliced = nums.splice(i, 1)
                nums.splice(j, 0, spliced[0])
            }
        }
    }
    return nums
}

const quickSort = nums => {
    if (nums.length <= 1) return nums

    let leftArr = []
    let rigthArr = []
    const pivot = nums[nums.length - 1]

    let i = 0

    while (i < nums.length - 1) {
        if (nums[i] < pivot) leftArr.push(nums[i])
        else rigthArr.push(nums[i])

        i++
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rigthArr)]
}

let theUnsortedArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

theUnsortedArray = theUnsortedArray /* 
    .concat(theUnsortedArray.map((el) => el * 2))
    .concat(theUnsortedArray.map((el) => el - 34))
    .concat(theUnsortedArray.map((el) => el + 4))
    .concat(theUnsortedArray.map((el) => el - 3))
    .concat(theUnsortedArray.map((el) => el + 100))
theUnsortedArray = theUnsortedArray
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
theUnsortedArray = theUnsortedArray
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
theUnsortedArray = theUnsortedArray
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
theUnsortedArray = theUnsortedArray
    .concat(theUnsortedArray)
    .concat(theUnsortedArray)
    .concat(theUnsortedArray) */

console.log('number of elements: ', theUnsortedArray.length)
//console.log('the unsorted array is :', theUnsortedArray)

console.time('bubbleSort')
let bubbleSorted = bubbleSort([...theUnsortedArray])
console.timeEnd('bubbleSort')
console.log('bubbleSorted: ', bubbleSorted)

//console.log('the unsorted array is :', theUnsortedArray)
console.time('insertionSort')
let insertionSorted = insertionSort([...theUnsortedArray])
console.timeEnd('insertionSort')
//console.log('intertionSorted: ', insertionSorted)

//console.log('the unsorted array is :', theUnsortedArray)
console.time('quickSort')
let quickSorted = quickSort([...theUnsortedArray])
console.timeEnd('quickSort')
//wconsole.log('quickSorted: ', quickSorted)
