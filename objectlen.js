// Create a function that accepts an object and returns the sum of the lengths of all string values.(score 3) 
// Examples :  ● totalStringLength({ name: "John", city: "Paris" }) ➞ 9 
// ● totalStringLength({ a: "hi", b: "world" }) ➞ 7
//  ● totalStringLength({ Success : "false", status: "404" }) ➞ 8 

function length(ob){
    let res=0
    for(let ch in ob){
        res+=ob[ch].length
    }
    return res
}
console.log(length({ Success : "false", status: "404" }))