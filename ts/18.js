/**
 * How do you total all of the matching integer elements in an array?
 */
function getSum(nums) {
    var total = 0;
    var checkedNumbers = [];
    for (var i = 0; i < nums.length; i++) {
        if (!(checkedNumbers.includes(nums[i]))) {
            var count = 0;
            for (var j = 0; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
            if (count > 1) {
                total += nums[i] * count;
                checkedNumbers.push(nums[i]);
            }
        }
    }
    return total;
}
var nums = [4, 5, 5, 7, 8, 4, 4, 4, 4, 10, 5];
var total = getSum(nums);
console.log("The sum of all repeated numbers are ".concat(total));
