/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const calculateArea = function(L1, L2){
    let area = L1 * L2
    return area
 }

console.log(calculateArea(5,7))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(a,b) {
    let sum = a + b
    if (a === b) 
    {return (a + b) * 3
     } else (a < b)
{return (a+b)}
}
console.log(crazySum(10,10))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(n1){
    let absNumber = n1 - 19
    if (n1 > 19)
    {return (absNumber) * 3
    }

}
console.log(crazyDiff(23))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/ 

const boundary = function(n){
    if ((n > = 20 && n < =100 )|| n === 400)
    {return true 
    }
}
console.log(boundary(50))

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(str) {
    let splitString = str.split('')
    let reverseArray = splitString.reverse()
    let joinArr = reverseArray.join('')
    return joinArr
}
console.log(reverseString('Strive'))
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/ 

const cutString = function(string){
    return string.slice(1,5)
}
console.log(cutString('Aizada'))



/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
