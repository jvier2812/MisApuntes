// Write a function, is valid that checks if brackets in a string are balanced (properly closed) based on JavaScript syntax rules.
// valid examples: '{([()])}()' or '()[]'
// invalid examples: '(' or '[(])'

/*
 * Checks for balanced brackets in a string of code.
 * @param {string} code - a string of code.
 * @return {boolean} - true if valid, otherwise false
 */
const brackets = ['(', ')', '[', ']', '{', '}']
const leftPair = ['{', '(', '[']
const rightPair = ['}', ')', ']']
const validPair = {
    '(': ')',
    '[': ']',
    '{': '}'
}

function isValid(string) {
    let bracketStack = []

    for (let char of string.split('')) {
        if (leftPair.includes(char)) bracketStack.push(char)
        else if (rightPair.includes(char)) {
            if (
                bracketStack.length === 0 ||
                !(validPair[bracketStack.pop()] === char)
            )
                return false
        }
    }
    return bracketStack.length === 0
}

let validCodes = ['{([()])}()', '()[]']
let invalidCodes = ['((((]', '[(])']
console.log(isValid(validCodes[0])) // true
console.log(isValid(validCodes[1])) // true
console.log(isValid(invalidCodes[0])) // false
console.log(isValid(invalidCodes[1])) // false

///----course solution
function isBalanced(code) {
    const bracketMatch = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const leftBracket = new Set(['(', '[', '{'])
    const rightBracket = new Set([')', ']', '}'])

    const leftBracketStack = []

    for (let i = 0; i < code.length; i++) {
        let char = code.charAt(i)

        if (leftBracket.has(char)) {
            leftBracketStack.push(char)
        } else if (rightBracket.has(char)) {
            if (!leftBracketStack.length) {
                return false
            } else {
                const lastUnclosedLeft = leftBracketStack.pop()

                if (bracketMatch[lastUnclosedLeft] !== char) {
                    return false
                }
            }
        }
    }
    return leftBracketStack.length === 0
}
