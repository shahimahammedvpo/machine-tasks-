// . Given a string, write a function to return a string containing only the unique characters 
// (characters that appear exactly once) from the input string in the order they first appear. (Score 3)
//  Examples: uniqueChars("javascript") ➞ "jvscript"  
//   // 'a' appears twice, so it is excluded  
//    uniqueChars("thequickbrownfoxjumpsoverthelazydog") ➞ "thequickbrownfxjmpsvlazydg"  
//     uniqueChars("hello world") ➞ "he wrd"   // 'l' appears multiple times so excluded 

function repeat(str){
    
    let res=""
    for(let i=0;i<str.length;i++){
        let c=0
        for(let j=0;j<str.length;j++){
            if(str[i]===str[j]){
                c++
            }
        }
        if(c===1){
            res+=str[i]
        }
        
    }
    return res
}
console.log(repeat("javascript"))