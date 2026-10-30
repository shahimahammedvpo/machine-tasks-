// Write a function that accepts an array of integers and returns the difference between the sum of the squares 
// of even numbers and the sum of the squares of odd numbers in the array. 
// (score 3) Examples :  ● diffSquares([1, 2, 3, 4]) ➞ 10 
// ● diffSquares([5, 6, 7]) ➞ 38 
// ● diffSquares([2, 4, 6]) ➞ 56

function diff(a){
    let even=0
    let odd=0
    let res=0
    
    for(let i=0;i<a.length;i++){
        if(a[i]%2===0){
            even+=a[i]**2
        }
        else{
            odd+=a[i]**2
        }
    }
    
    if(even>odd){
        res=even-odd
    }
    else{
        res=odd-even
    }
    return res
}
console.log(diff([5, 6, 7]))