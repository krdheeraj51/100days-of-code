/**
 * Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */


function diffArray(arr1, arr2) {
  let newArr = [];
  let newArr1 = [];
  let resultArr = [];

  newArr = arr1.filter(x => !arr2.includes(x));
  newArr1 = arr2.filter(x => !arr1.includes(x));
  resultArr = [...newArr, ...newArr1];
  console.log(resultArr);
  return resultArr;
}

//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])