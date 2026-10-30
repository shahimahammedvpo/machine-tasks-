// Create a function that finds the word "bomb" in the given string (not case sensitive).
//  If found, return "Duck!!!", otherwise return "There is no bomb, relax.". (score 2)
//   Examples: ● bomb("There is a bomb.") ➞ "Duck!!!" ● bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!" 
// ● bomb("This goes boom!!!") ➞ "There is no bomb, relax." 

function find(str){
    let res=str.split(" ")
    for(let ch of res){
        if(ch==="bomb"||"Bomb"){
            res= "Duck"
        }
        else{
           res= "There is no bomb, relax."
        }
    }
    return res
}
console.log(find(" i45gy bomb "))