// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

// function ns(num){
//     let split=[]
//     if(num%2==0){
//         split=[num/2,num/2]
//     }
//     else {
//         split=[(num-1)/2,((num-1)/2)+1]
//     }
//     return split
// }
// console.log(ns(11))

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(a) {
    let b=[]
    for(let i=0;i<a.length;i++){
	 a[i].sort((a,b)=> a-b)
     b=a[i][a[i].length-1]
     console.log(b)
    }
    
	
}
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])