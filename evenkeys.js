// Create a function that accepts an object and returns an array of keys whose values are even numbers.(score 3) 
// Examples :  ● evenKeys({ a: 2, b: 5, c: 8 }) ➞ ["a", "c"] 
// ● evenKeys({ x: 11, y: 13 }) ➞ [] 
// ● evenKeys({ j: 12, k: 13 , z:100 }) ➞ [“j”, “z”] 

function key(ob){
    let c=[]
for(let a in ob){
    if(ob[a]%2===0)
    c.push(a)
    }
    return c
}


console.log(key({ a: 2, b: 5, c: 8 }))