/**
 * How do you calculate the number of vowels and consonants in a string?
 */
var line = "Abra ka Dabra";
var vowels_conso_counts = {
    "vowel": 0,
    "consonants": 0
};
//converting string to lowercase
var lowercaseline = line.toLowerCase();
for (var i = 0; i < line.length; i++) {
    var ascii_code = lowercaseline.charCodeAt(i);
    if (ascii_code >= 97 && ascii_code <= 122) {
        switch (lowercaseline[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels_conso_counts["vowel"] += 1;
                break;
            default:
                vowels_conso_counts["consonants"] += 1;
        }
    }
}
console.log(vowels_conso_counts);
