// Create a function called countFrequency that takes an array of strings as input and returns an object where the keys
//  are the unique strings from the array and the values are the number of times each string appears.(score 3)
//   Examples  ● ["apple", "banana", "apple", "orange", "banana", "apple"] ➞ { apple: 3, banana: 2, orange: 1 } 
//    ● ["cat", "dog", "cat", "bird", "dog", "dog"] ➞ { cat: 2, dog: 3, bird: 1 }  
//    ● ["pen", "Pen", "pencil", "eraser", "pen", "pencil"] ➞ { pen: 1, Pen: 1, pencil: 2, eraser: 1} 

function count(a){
    let res={}
    for(let ch of a){
        
        if(res[ch]){
          res[ch]++
        }
        else{
            res[ch]=1
        }

       
    }
    return res
}
console.log(count(["apple", "banana", "apple", "orange", "banana", "apple"]))