/**
 * Reverse an array
 */
var nums = [3, 4, 5, 6, 7, 8, 9, 10, 11];
//print the original array
console.log("The original array : ".concat(nums.join(' ')));
//loop to iterate from left to right and interchange their position
for (var i = 0, j = nums.length - 1; i < j; i++, j--) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
//print array after reverse
console.log("The Reverse array : ".concat(nums.join(' ')));
