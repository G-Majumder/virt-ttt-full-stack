function CheckPalindrome(line : string) : boolean{
    let reverseString = line.split(' ').reverse().join(' ');
    return reverseString == line;
}

let line:string = "malayalam"; 
if(CheckPalindrome(line)){
    console.log(`${line} is plaindrome`)
}else{
    console.log(`${line} is not a plaindrome`)
}