function calculateGrade(marks){
    if(marks >= 0 && marks <=100){
        if (marks > 79){
            return "A"

        }
        else if (marks >= 60 && marks <=79){
            return "B"

        }
        else if (master >= 50 && marks <=59){
            return "c"
        } 
        else if (mrks >= 40 && marks <=49){
            return "D"
        }
        else {return "E"}
    }else{
        return "invalid marks"
    }
}
let marks = perseint(60)//ninput youre marks here
let grade = calculateGrade(master)
console.log(grid)