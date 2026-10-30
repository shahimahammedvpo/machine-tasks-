// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111

// function bit(n1,n2){
//      let a=n1.toString(2)
//      let b= n2.toString(2)
//      return a+","+b
// }
// function bitand(n1,n2){
//      let a=n1.toString(2)
//      let b= n2.toString(2)
// }
// console.log(bitand(4,8))4

// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

// function shiftToLeft(x, y) {
//      return x*(2**y)
	
// }
// console.log(shiftToLeft(5, 2))

// match
// function matchHouses(step) {
//      return step*6-(step-1)
	
// }
// console.log(matchHouses(87))

// sum
// function addUp(num) {
// 	return (num*(num+1))/2
// }
// console.log(addUp(600))

// eve
function timeForMilkAndCookies(date) {
	if(date===(11,24)){
          return true
     }
     else{
          return false
     }
     return date
}
console.log(timeForMilkAndCookies(new Date( 11, 24)))