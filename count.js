// Write a function that accepts a string and returns an object where keys are words and values are their counts.
// Examples: ● wordFrequency("apple banana apple")); ➞ { apple: 2, banana: 1 } 
// ● wordFrequency("the cat and the dog")); ➞  { the: 2, cat: 1, and: 1, dog: 1 } 
// ● wordFrequency("Hello hello world")); ➞ { hello: 2, world: 1 } 

function accept(str){
    let s=str.split(" ")
    let res={}
    for(let ch of s){
        if(res[ch]){
            res[ch]++
        }
        else{
            res[ch]=1
        }
    }
    return res
}
console.log(accept("apple banana apple"))