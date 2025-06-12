function NumericDigitCounts(line : string) : number{
    let count:number = 0;
    for(let i = 0; i<line.length; i++){
        if(!isNaN(Number(line[i])) && line[i].trim() !== ''){
            count++;
        }
    }
    return count;
}

console.log(NumericDigitCounts("23Hello23q12"))
console.log(NumericDigitCounts("1111111111"))
console.log(NumericDigitCounts("wweddeeee"))