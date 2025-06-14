var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Checking become compulsory if we didn't know about the type of array
//sort() considered each element as string, so directly it won't work for numeric values
function checkArrayType(nums) {
    return nums.length > 0 && typeof nums[0] === 'number';
}
var nums = [23, 56, 12, 78, 90, 23, 44, 78];
//prints the array
console.log("The given array : ".concat(nums));
if (checkArrayType(nums)) {
    //create a shallow copy so that original array didn't change
    var sortedArray = __spreadArray([], nums, true).sort(function (a, b) { return a - b; });
    //array sorted using array method sort()
    console.log("The sorted array : ".concat(sortedArray));
}
else {
    //create a shallow copy so that original array didn't change
    var sortedArray = __spreadArray([], nums, true).sort();
    //array sorted using array method sort()
    console.log("The sorted array : ".concat(sortedArray));
}
