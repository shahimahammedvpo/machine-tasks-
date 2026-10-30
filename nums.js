//  Given an array of numbers, return the maximum between the number of positive integers and the number of negative integers.
//   (Score 2) Examples nums([-3, -2, -1, 0, 0, 1, 2]) ➞ 3 
//   Note:- There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
//    nums([-1, -1, 1, 2]) ➞ 2 
//    nums([1, 2, 3, 5]) ➞ 4 

function nums(a){
    let p=0
    let n=0
    let res=0
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            p++
        }
        else if(a[i]<0){
            n++
        }
    }
    if(p>n){
        return p
    }
    else{
        return n
    }
}
console.log(nums([1, 2, 3, 5,-1,-9,-6,-7,-6]))