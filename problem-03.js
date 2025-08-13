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
