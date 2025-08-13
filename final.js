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

