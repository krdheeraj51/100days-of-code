/**
 * Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive 
integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.


 */

function factorialize(num) {
    let result = 1;
    if (num >= 0) {
      if (num === 0) result = 1;
      else {
        for (let i = 1; i <= num; i++) {
          result=result * i;
        }
      }
      num = result;
      return num;
    }
  }
  
  factorialize(5);