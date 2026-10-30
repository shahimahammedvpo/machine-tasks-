// Write a function that accepts a number and checks whether the number is a palindrome or not. (score 2) 
// A number is called a palindrome if it reads the same backward as forward. Examples :  
// ● isPalindromeNumber(121) ➞ true  
//  ● isPalindromeNumber(123) ➞ false   
//  ● isPalindromeNumber(1331) ➞ true 

function check(n){
    let rev=""
    let res=""
    let b=n
   
    while(b>0){
        rev=b%10
        res+=rev
        b=Math.floor(b/10)
        
    }
    if(n==res){
        return true
    }
    else{
        return false
    }
    
   
}
console.log(check(121))