/*
How do you find the non-matching characters in a string?
*/
function getNonRepeatedCharacters(line : string) : void{
    const chars = line.split('')
    // defining a object type 
    let charactersCount : { [key : string] : number} = {}; 
    //loop through the complete string and store occurences of each of them
    for (let i = 0; i< chars.length; i++){
        if ((chars[i] in charactersCount)){
            charactersCount[chars[i]] += 1;
        }else{
            charactersCount[chars[i]] = 1;
        }
    }
    console.log(charactersCount);

    //prints only characters with 1 count
    for(const char in charactersCount){
        if(charactersCount[char] == 1){
            console.log(char);
        }
        else{
            continue;
        }
    }
}


getNonRepeatedCharacters("Hello folks! We are in the world of TypeScirpt");