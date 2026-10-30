// Write a function that takes an array of two numbers and determines 
// if the sum of the digits in each number are equal to each other.
//  ( score 3 ) 
//  Examples: ● isEqual([105, 42]) ➞ true ○ # 1 + 0 + 5 = 6 ○ # 4 + 2 = 6 
//  ● isEqual([21, 35]) ➞ false
//   ● isEqual([0, 0]) ➞ true

function sod(a){
    function sum(n){
         let sum=0
    
   while(n>0){
    sum+=n%10
    n=Math.floor(n/10)
     
   }
   return sum
    }
    return sum(a[0])=== sum(a[1])
   
   
}
console.log(sod([25,115]))