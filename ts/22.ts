function getSum(num1 : number, num2 : number) : number{
    return num1 + num2;
}

//implicit type
let num1 = 10;
let num2 = 20;

console.log(`${num1} + ${num2} = ${getSum(num1, num2)}`);