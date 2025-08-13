// Function for Problem-01

function totalFine( fare ) {

    if (typeof fare !== "number" || fare < 1){
        return "Invalid"
    }

    let fine = fare + (fare * 20)/100 + 30;
    return fine
    
}


// Function for Problem-02

function  onlyCharacter( str ) {

    if (typeof str !== "string"){
        return "Invalid"
    }

    let characters = "";

    for (let i=0; i<str.length; i++){
        if (str[i] !== " ") {
            characters = characters + str[i]
        }
    }

    let uppercaseCharacters = characters.toUpperCase()
    
    return uppercaseCharacters
    
          
}


// Function for Problem-03

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
