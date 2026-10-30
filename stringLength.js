// Create a function that accepts an object and returns the sum of the lengths of all string values.(score 3)
//  Examples :  ● totalStringLength({ name: "John", city: "Paris" }) ➞ 9 
//  ● totalStringLength({ a: "hi", b: "world" }) ➞ 7
//   ● totalStringLength({ Success : "false", status: "404" }) ➞ 8 

function strln(a){
    let len=0
    for(let ch in a){
        if(typeof a[ch]==="string"){
        len+=a[ch].length
        }
    }
    return len
}
console.log(strln({ a: 12, b: "world" }))