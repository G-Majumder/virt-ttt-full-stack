function getAverage(nums) {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total / nums.length;
}
var nums = [34, 23, 67, 89, 34, 6];
var average = getAverage(nums);
console.log("The Average of ".concat(nums, " is: ").concat(average.toFixed(2)));
