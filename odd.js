//  Write a function that accepts an array of integers and returns a new array where every odd number is replaced with the string "odd" while all even numbers remain unchanged.(score 2). 
//   Examples :  ● [1, 2, 3, 4, 5] ➞ ["odd", 2, "odd", 4, "odd"] 
//    ● [10, 15, 20, 25] ➞ [10, "odd", 20, "odd"] 
//     ● [2, 4, 6, 8] ➞ [2, 4, 6, 8]  

function odd(a){
    let res=""
    let result=[]

    for(let i=0;i<a.length;i++){
        let res=""
        if(a[i]%2!==0){
            res+="odd"
        }
        else{
            res+=a[i]
        }
        result.push(res)
    }
    return result
}
console.log(odd([1, 2, 3, 4, 5]))