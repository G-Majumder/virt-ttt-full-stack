/*
How do you find out if the two given strings are anagrams?
*/
function getCharactersCount(line) {
    var chars = line.split('');
    var count = {};
    for (var i = 0; i < chars.length; i++) {
        if (count[chars[i]]) {
            count[chars[i]] += 1;
        }
        else {
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
var line1 = "apple";
var line2 = "pale";
//checking both string length must be same
if (line1.length == line2.length) {
    var flag = true;
    var count1 = getCharactersCount(line1);
    var count2 = getCharactersCount(line2);
    for (var char in count1) {
        if (count1[char] == count2[char]) {
            continue;
        }
        else {
            flag = false;
            console.log("".concat(line1, " and ").concat(line2, " are not anagram"));
            break;
        }
    }
    if (flag) {
        console.log("".concat(line1, " and ").concat(line2, " are anagram"));
    }
}
else {
    console.log("".concat(line1, " and ").concat(line2, " are not anagram"));
}
