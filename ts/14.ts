function countCharOccurrences(text: string, targetChar: string): number {
  let count = 0;
  for (let char of text) {
    if (char === targetChar) {
      count++;
    }
  }
  return count;
}


const input = "TypeScript and JavaScript used for same purpose!";
const charToFind = "p";

console.log(`'${charToFind}' appears ${countCharOccurrences(input, charToFind)} times.`);
