/**
 * Chunky Monkey
Write a function that splits an array (first argument) 
into groups the length of size (second argument) and returns them as a two-dimensional array.

https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005
 */

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

