// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.(Score 2)
//  Examples calculator(2, "+", 2)  ➞  4
//   calculator(2, "*", 2)  ➞  4
//    calculator(4, "/", 2)  ➞  2 

function calc(n1,op,n2){
    
    if(op=="+"){
        return n1+n2
    }
    else if(op=="-"){
        return n1-n2
    }
    else if(op=="/"){
        return n1/n2
    }
    else{
        return n1*n2
    }
}
console.log(calc(5,"-",8))