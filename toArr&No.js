// Write two functions: toArray(), which converts a number to an array of its digits.
//  toNumber(), which converts an array of digits back to its number.(Score 2) 
//  Examples:  ● toArray(235) ➞ [2, 3, 5] 
//  ● toNumber([2, 3, 5]) ➞ 235 
//   ● toArray(0) ➞ [0] 
//    ● toNumber([0]) ➞ 0 

function toArray(n){
    let a=[]
    let b=String(n)
    let res=""
    for(let i=0;i<b.length;i++){
        res=Number(b[i])
        a.push(res)  
    }
    return a
}
console.log(toArray(235))

function toNumber(arr){
    let no=""
    for(let i=0;i<arr.length;i++){
        no+=arr[i]
    }
return no
}
console.log(toNumber([2,3,5]))