//  Write a function that returns the match order (e.g., "2nd match") in which the highest number of goals was scored. (Score 3 ) 
//  Examples : 
//  match({ team: "Real Madrid", goals: [2, 3, 1, 0, 1] })  Output:  Match 2 
//   match({ team: "Barcelona", goals: [3, 4, 0, 5, 1] })  Output : Match 4  

function match(obj){
   let max=0
   let res=0
        for(let i=0;i<obj.goals.length;i++){
            if(obj.goals[i]>max){
                max=obj.goals[i]
                res=i+1
            }
        }
        return `match ${res}`

    }
    console.log(match({ team: "Barcelona", goals: [3, 4, 0, 5, 8] }))
