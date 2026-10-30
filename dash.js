//  Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
//   Examples :  ● dashed("Edabit") ➞ "-E-d-a-b-i-t"
//    ● dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m" 
//    ● dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!" 

function dash(str){
    let vowels="aeiouAEIOU"
    let a=""
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
                a+="-"+str[i]+"-"
        }
        else{
            a+=str[i]
        }     
    }
    return a
    
}
console.log(dash("Carpe Diem"))