// Given an array of product objects (each with `name`, `price`, and `quantity`), write a function `calculateTotal(cart)` that:
// - Loops through the cart using `for...of`
// - Multiplies price × quantity for each item
// - Adds a 10% discount if the total exceeds $100
// - Returns the final total

// const cart = [
//   { name: "Shoes", price: 40, quantity: 4 },
//   { name: "Jacket", price: 60, quantity: 1 },
//   { name: "Cap", price: 15, quantity: 10 }
// ]
// let res
// for(let sum of cart){
//     res=sum.price*sum.quantity
//     if(res>100){
//         res-=res*(10/100)
//     }
//     console.log(res)
// }     
// ********************************

// Write a `for` loop from 1 to 30 that:
// - Logs `"Fizz"` if divisible by 3
// - Logs `"Buzz"` if divisible by 5
// - Logs `"FizzBuzz"` if divisible by both
// - Logs `"Prime"` instead of the number if the number is a prime number that isn't divisible by 3 or 5
// - Otherwise logs the number itself

for(let i=1;i<=30;i++){
    if(i%3===0 && i%5===0){
        console.log(i+" FizzBuzz")
    }
    else if(i%3===0){
        console.log(i," Fizz")
    }
    else if(i%5===0){
        console.log(i," Buzz")
    }
    else if(i===1){
        console.log(i) 
    }

    else if(i===2){
        console.log(i," prime") 
    }
    else if(i%3!==0 && i%5!==0 && i%2!==0){
        console.log(i," prime") 
    }
    else{
        console.log(i)
    }
    
}

