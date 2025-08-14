function totalFine( fare ) {

    if (typeof fare !== "number" || fare < 1){
        return "Invalid"
    }

    let fine = fare + (fare * 20)/100 + 30;
    return fine
    
}



function  onlyCharacter( str ){

    if (typeof str !== "string"){
        return "Invalid"
    }

    let removeSpaces = str.split(' ')
    let onlyCharacter = removeSpaces.join('').toUpperCase()
    
    return onlyCharacter
    

}



function bestTeam(player1, player2) {

    if (typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid"
    }

    let firstTeamUnfairs = player1.foul + player1.cardY + player1.cardR;
    let secondTeamUnfairs = player2.foul + player2.cardY + player2.cardR;
    
    if (firstTeamUnfairs < secondTeamUnfairs){
        return player1.name
        
    } else if (secondTeamUnfairs < firstTeamUnfairs){
        return player2.name
        
    } else {
        return "Tie"
    }
        

}



function  isSame(arr1 , arr2 ) {

    if (Array.isArray(arr1) !== true || Array.isArray(arr2)!== true){
        return "Invalid"
    };

    if (arr1.length !== arr2.length){

        return false

    };

    for (let i=0; i<arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false
        }
    }

    return true

}



function resultReport(marks) {

    if (Array.isArray(marks) !== true) {
        return "Invalid"
    } 

    let total = 0;
    let passedSubs = 0;
    let failedSubs = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i]

        if (marks[i] >= 40) {
            passedSubs = passedSubs + 1
        } else {
            failedSubs = failedSubs + 1
        }

    }

    let average = 0;

    average = marks.length>0 ? Math.round(total/marks.length): 0;

    return {
        finalScore: average,
        pass: passedSubs,
        fail: failedSubs
    }

    
}