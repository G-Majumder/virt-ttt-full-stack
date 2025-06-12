function countCharOccurrences(text, targetChar) {
    var count = 0;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        if (char === targetChar) {
            count++;
        }
    }
    return count;
}
var input = "TypeScript and JavaScript used for same purpose!";
var charToFind = "p";
console.log("'".concat(charToFind, "' appears ").concat(countCharOccurrences(input, charToFind), " times."));
