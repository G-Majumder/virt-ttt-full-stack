/*
How do you find out if the two given strings are anagrams?
*/

// Define a type alias for character count object
type charactersCount = {[key : string] : number};
function getCharactersCount(line : string) : charactersCount{
    const chars = line.split('')
    const count : charactersCount = {};
    for(let i=0; i<chars.length; i++){
        if(count[chars[i]]){
            count[chars[i]] +=1;
        }else{
            count[chars[i]] = 1;
        }
    }
    return count;
}

/*//get two anagram strings
const line1 : string = "triangle";
const line2 : string = "integral";
*/
//non-anagram examples
const line1: string = "apple";
const line2: string = "pale";

//checking both string length must be same
if(line1.length == line2.length){
    let flag : boolean = true;
    let count1 = getCharactersCount(line1);
    let count2 = getCharactersCount(line2);
    for(let char in count1){
        if(count1[char] == count2[char]){
            continue;
        }
        else{
            flag = false;
            console.log(`${line1} and ${line2} are not anagram`);
            break;
        }
    }
    if(flag){
        console.log (`${line1} and ${line2} are anagram`);
    }
}
else{
    console.log (`${line1} and ${line2} are not anagram`);
}