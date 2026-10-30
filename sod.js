//  Write a function that takes an integer as input and returns the sum of its digits. (score 2).
//   Examples :  ● sum(121) ➞ 4 
//   ● sum(987) ➞ 24
//    ● sum(505) ➞ 10

function sum(n){
    let rev=0
    let s=0
    while(n>0){
        rev=n%10
        s+=rev
        n=Math.floor(n/10)
    }
    return s
}
console.log(sum(123335))