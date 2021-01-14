//----- R E C U R S I O N -----------
//--------------ACUMULATORS----------
function joinElementsV1(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index]

        if (index === array.length - 1) {
            return resultSoFar
        } else {
            return recurse(index + 1, resultSoFar + joinString)
        }
    }

    return recurse(0, '')
}

console.log(joinElementsV1(['s', 'cr', 't cod', ' :) :)'], 'e')) // expected: secret code :):)

// Task: rewrite this function so that it uses a loop rather than recursion

function joinElementsV2(array, joinString) {
    let string = ''
    let i = 0
    while (i < array.length - 1) {
        string += array[i] + joinString
        i++
    }
    return string + array[array.length - 1]
}

console.log(joinElementsV2(['s', 'cr', 't cod', ' :) :)'], 'e'))

//--- recursive and memoization

// Task 1: Without peeking, write your own recursive factorial method

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const factorial = n => {
    console.log('n is:', n)
    if (n <= 1) return 1
    else return n * factorial(n - 1)
}

console.log('5!:', factorial(5)) //120
