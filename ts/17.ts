/**
 * How do you calculate the number of vowels and consonants in a string?
 */

// Define a type alias for character count object
type charactersCount = {[key : string] : number};

const line : string = "Abra ka Dabra";
const vowels_conso_counts : charactersCount = {
    "vowel" : 0,
    "consonants" : 0
};
//converting string to lowercase
const lowercaseline = line.toLowerCase();
for(let i=0; i<line.length; i++){
    const ascii_code : number = lowercaseline.charCodeAt(i);
    if(ascii_code >=97 && ascii_code <= 122){
        switch(lowercaseline[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            vowels_conso_counts["vowel"] +=1;
            break;
            default:
            vowels_conso_counts["consonants"] +=1;
        }
    }
}

console.log(vowels_conso_counts);