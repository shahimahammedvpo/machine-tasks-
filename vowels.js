// Write a function that takes a string as input and returns the number of vowels in the string.(score 2).
//  Examples: ● countVowels(“Hello World”) = 3 
//  ● countVowels(Programming is fun”) = 5
//  ● countVowels(“Rhythm”) = 0

function count(str){
    let vowels="aeiouAEIOU"
    let c=0
    for(let ch of str){
        if(vowels.includes(ch)){
            c++
        }
      
    }
   return c 
}
console.log(count("Programming is fun"))