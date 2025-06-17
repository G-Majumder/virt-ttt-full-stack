/**
 * How do you total all of the matching integer elements in an array?
 */
function getSum(nums : number []) : number{
    let total : number = 0;
    const checkedNumbers : number [] = [];
    for(let i = 0; i<nums.length; i++){
        if(!(checkedNumbers.includes(nums[i]))){
            let count = 0;
            for(let j = 0; j<nums.length; j++){
                if(nums[i] == nums[j]){
                    count++;
                }
            }
            if(count > 1){
                total += nums[i] * count;
                checkedNumbers.push(nums[i]);
            }
        }
    }
    return total;
}

const nums : number [] = [4,5,5,7,8,4,4,4,4,10,5];
let total = getSum(nums);
console.log(`The sum of all repeated numbers are ${total}`);