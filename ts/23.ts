function getAverage(nums : number []) : number{
    let total : number = 0;
    for(let i = 0; i< nums.length; i++){
        total += nums[i];
    }
    return total / nums.length;
}
const nums : number [] = [34,23,67,89,34,6]
const average = getAverage(nums);

console.log(`The Average of ${nums} is: ${average.toFixed(2)}`)