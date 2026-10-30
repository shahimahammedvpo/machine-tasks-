// Write a function that accepts a string and moves all the uppercase (capital) letters to the end of the string, 
// while preserving the order of both uppercase and lowercase letters.(score 3).
//   Examples :  ● moveCapital("hElloWOrld") ➞ "hrlldoEWO"  
//   ● moveCapital("JavaScript") ➞ "avaJScript"  
//   ● moveCapital("PyTHon") ➞ "yonPTH" 

function move(str){
   
    let res=""
    let high=""
    for(let i=0;i<str.length;i++){
        if(str[i]>="a" && str[i]<="z"){
            res+=str[i]
        }
        else{
            high+=str[i]
        }
        
    }
    return res+high
}
console.log(move("PyTHon"))