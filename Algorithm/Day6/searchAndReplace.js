/**
 * Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example 
if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */

function myReplace(str, before, after) {
    return str.includes(before) ?  str.replace(before,/^[A-Z]/.test(before) ? after[0].toUpperCase()+ after.substring(1) : after[0].toLowerCase()+ after.substring(1)) : str;
  }
  
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("Let us go to the store", "store", "mall")
// myReplace("I think we should look up there", "up", "Down")
// myReplace("This has a spellngi error", "spellngi", "spelling")
// myReplace("His name is Tom", "Tom", "john")
// myReplace("Let us get back to more Coding", "Coding", "algorithms")
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")