//  Check if a string title is a title string or not. A title string is one which has all the words in the string 
//  start with a upper case letter. Examples 
//  checkTitle("A Mind Boggling Achievement") ➞ true 
//  checkTitle("A Simple Java Script Program!") ➞ true
//   checkTitle("Water is transparent") ➞ false 

function check(str){
    let a=str.split(" ")
    for(let ch of a){
        if(ch[0]!==ch[0].toUpperCase()){
            return false
        }
        
    }
   return true 
}
console.log(check("Water Is Transparent"))