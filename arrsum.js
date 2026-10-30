// Create a function that takes an array of numbers and returns a new array where each element is the 
// sum of all previous elements including itself. (score 3) 
// Examples :  ● cumulativeSum([1, 2, 3, 4]) ➞ [1, 3, 6, 10] 
// ● cumulativeSum([5, 10, 15]) ➞ [5, 15, 30] 
// ● cumulativeSum([2, -1, 3]) ➞ [2, 1, 4] 

function sum(a){
    let ar=[]
    let sum=0
    for(let i=0;i<a.length;i++){
        sum+=a[i]
        ar.push(sum)
    }
    return ar
}
console.log(sum([2, -1, 3]))