/**
 * Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-numbers-in-a-range/16083 
* 
 */

function sumAll(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

sumAll([5, 10]);

