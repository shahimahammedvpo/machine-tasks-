// Create a function that accepts a string and replaces every space in the string with a hyphen (-).
// (score 2) Examples :  ● replaceSpaces("I love JS") ➞ "I-love-JS"   
// ● replaceSpaces("Hello World") ➞ "Hello-World"  
//  ● replaceSpaces("JavaScript is fun") ➞ "JavaScript-is-fun" 

function replace(str){
    let c=""
   for(let ch of str){
    if(ch===" "){
      c+="-"  
    }
    else{
        c+=ch
    }
   }
   return c
}
console.log(replace("fg yfg dy"))