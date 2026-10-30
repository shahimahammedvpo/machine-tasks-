// Create a function that accepts an object where keys are item names and values are the number of times they were sold. 
// The function should return the name of the item that was sold the least.(score 2) Examples : 
//  ● leastSoldItem( {shoes: 120, shirts: 90, pants: 150, hats: 75} ) ➞ “hats” 
//  ● leastSoldItem( { phones: 300, laptops: 450, tablets: 250, watches: 100} ) ➞ “watches” 
//  ● leastSoldItem( {pens: 500, pencils: 499, erasers: 300}) ➞ “erasers

function leastSold(ob){
    let res=Infinity
    let least=""
    for(let key in ob){
        if(ob[key]<res){
            res=ob[key]
           least=key
        }
    }
    return least
}
console.log(leastSold( { phones: 300, laptops: 450, tablets: 250, watches: 100} ))