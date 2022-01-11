/**
 * Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
 */

function findLongestWordLength(str) {
  let strArray = [];
  strArray = str.split(' ');
  var longestWord = "";
  strArray.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");