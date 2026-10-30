// Write a function that takes a sentence and reverses every word individually, while keeping the word order the same. (score 2) 
// Examples :  ● reverseWords("I love JS")  ➞  "I evol SJ"
//  ● reverseWords("Hello World")  ➞  "olleH dlroW" 
//  ● reverseWords("JavaScript is fun")  ➞  "tpircSavaJ si nuf" 

function rev(str){
    let res=[]
    
    let a=str.split(" ")
    for(let ch of a){
        let reverse=""
        for(let i=ch.length-1; i>=0;i-- ){
        reverse+=ch[i]
    }
    res.push(reverse)
    }
    
    return res.join(" ")
}
console.log(rev("Hello World"))