// Create a function that squares every digit of a number. ( score 2 )
//  Examples :  ● squareDigits(9119) ➞ 811181 
//  ● squareDigits(2483) ➞ 416649
//   ● squareDigits(3212) ➞ 9414 

function square(n){
    let res=""
   for(let a of String(n)){
    res+= a**2
   }
   return res
}
console.log(square(9119))