function getNonRepeatedCharacters(line) {
    var chars = line.split('');
    // defining a object type 
    var charactersCount = {};
    //loop through the complete string and store occurences of each of them
    for (var i = 0; i < chars.length; i++) {
        if ((chars[i] in charactersCount)) {
            charactersCount[chars[i]] += 1;
        }
        else {
            charactersCount[chars[i]] = 1;
        }
    }
    console.log(charactersCount);
    //prints only characters with 1 count
    for (var char in charactersCount) {
        if (charactersCount[char] == 1) {
            console.log(char);
        }
        else {
            continue;
        }
    }
}
getNonRepeatedCharacters("Hello folks! We are in the world of TypeScirpt");
