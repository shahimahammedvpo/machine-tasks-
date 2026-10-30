// Create a function that takes an array of numbers and returns the second smallest number. (score 2)
//  Examples :  ● secondSmallest([10, 40, 30, 20, 50]) ➞ 20
//   ● secondSmallest([25, 143, 89, 13, 105]) ➞ 25
//    ● secondSmallest([54, 23, 11, 17, 10]) ➞ 11 

function second(a){
    let lar=0
    let slar=0
    for(let i=0;i<a.length;i++){
        if(lar<a[i]){
            slar=lar
         lar= a[i]
        }
        else if(lar>slar && slar<a[i]){
            slar=a[i]
        }
    }
    return slar

}
console.log(second([10, 400, 300, 20, 50]))