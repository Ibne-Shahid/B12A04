// Function for Problem-02

function  onlyCharacter( str ){

    if (typeof str !== "string"){
        return "Invalid"
    }

    let removeSpaces = str.split(' ')
    let onlyCharacter = removeSpaces.join('').toUpperCase()
    
    return onlyCharacter
    

}

console.log(onlyCharacter(true));


// Another way to solve this

function  onlyCharacter2( str ) {

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