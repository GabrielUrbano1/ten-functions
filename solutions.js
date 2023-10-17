"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    return input === true;
}


function isFalse(input) {
    return input === false;
}


function not(input) {
    return !input;
}


function addOne(input) {
    if (typeof input === 'number' || (!isNaN(input) && !isNaN(parseFloat(input)))) {
        return parseFloat(input) + 1;
    } else {
        return NaN;
    }
}


function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else (input % 2 === 1);
    return false
}


function isIdentical(input, input1) {
    return input === input1

}


function isEqual(input, input1) {
    if (input == input1)
        return true
    else {
        return false
    }

}


function or(input, input1) {
    return input || input1

}


function and(input, input1) {
    return input && input1

}


function concat(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1.toString() + input2.toString()
    } else {
        return String(input1) + String(input2)
    }
}

// console.log(concat(true, true))
