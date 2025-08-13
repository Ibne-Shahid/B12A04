// Function for Problem-01

function totalFine( fare ) {

    if (typeof fare !== "number" || fare < 1){
        return "Invalid"
    }

    let fine = fare + (fare * 20)/100 + 30;
    return fine
    
}

console.log(totalFine(200));
