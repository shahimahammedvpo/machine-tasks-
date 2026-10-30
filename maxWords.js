// A function takes an array of strings (as sentences) and returns the maximum number of words that appear in a single sentence.
//   ● maxWords(["Welcome To Bridgeon", "Hello World", "Code Your Future With Bridgeon"]) ➞ 5 
//    ● maxWords(["please wait", "continue to fight", "continue to win"]) ➞ 3 
//     ● maxWords(["hello world"]) ➞ 2 

function max(a){
    let c=0
    let res=0
    for(let ch of a){
        let b=ch.split(" ")
        if(b.length>res){
            res=b.length
        }
    }
    return res
}
console.log(max(["please wait", "continue to ggg fight", "uy gyg gii continue to win"]))