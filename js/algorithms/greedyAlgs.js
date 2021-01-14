/*
                            

You are the banker in Monopoly with your family
who has lost many of the game pieces so you only
have bills in these denominations: 

                $5 $10 $25

You need only pay out your family in the least 
number of bills possible so you don't run out before
the game is over. Write a function that calculates 
the least number of bills required for any given dollar 
amount that is divisible by 5. */

// Write a function, makeChange, that returns an integer
//that represents the least number of coins that add up to
// an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)

let coins = [25, 10, 5]

const makeChange = amount => {
    if (amount % 5 !== 0 || amount < 5) return -1

    let min = 0

    coins.forEach(coin => {
        let factor = Math.floor(amount / coin)
        amount -= coin * factor
        min += factor
    })
    return min
}
console.log('amount: 40, #coins:', makeChange(40)) // 3
console.log('amount: 35, #coins:', makeChange(35)) // 2

const makeChangeV2 = (coins, amount) => {
    coins.sort((a, b) => b - a)
    let coinTotal = 0
    let i = 0
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i]
            coinTotal++
        } else {
            i++
        }
    }
    return coinTotal
}

makeChangeV2([1, 6, 10], 12)
