function CheckPalindrome(line) {
    var reverseString = line.split(' ').reverse().join(' ');
    return reverseString == line;
}
var line = "malayalam";
if (CheckPalindrome(line)) {
    console.log("".concat(line, " is plaindrome"));
}
else {
    console.log("".concat(line, " is not a plaindrome"));
}
