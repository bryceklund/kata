/*
This kata is designed to test your ability to extend the functionality of built-in classes. 
In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
*/

const a = [1, 2, 3]

// square
Array.prototype.square = function() {
    const squared = []
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number') {
            squared.push(this[i] ** 2)
        } else {
            squared.push(this[i])
        }
    }
    return squared
}

a.square()

// cube
Array.prototype.cube = function() {
    const cubed = []
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number') {
            cubed.push(this[i] ** 3)
        } else {
            cubed.push(this[i])
        }
    }
    return cubed
}

a.cube()

// average
Array.prototype.average = function() {
    let sum = 0
    let counter = 0
    if (!this.length) {
        return NaN
    }
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number') {
            sum += this[i]
            counter++
        }
    }
    return sum / counter
}

a.average()

// sum
Array.prototype.sum = function() {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number') {
            sum += this[i]
        }
    }
    return sum
}

a.sum()

// even
Array.prototype.even = function() {
    const evens = []
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number' && this[i] % 2 === 0) {
            evens.push(this[i])
        }
    }
    return evens
}

a.even()

// odd
Array.prototype.odd = function() {
    const odds = []
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] == 'number' && this[i] % 2 !== 0) {
            odds.push(this[i])
        }
    }
    return odds
}

a.odd()