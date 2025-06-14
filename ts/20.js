//find the maximum element in an array
function getMax(items) {
    var max = items[0];
    for (var i = 1; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i];
        }
    }
    return max;
}
var items = [23, 67, 12, 90, 54, 89, 43, 11, 55];
console.log("The maximum number of ".concat(items, " is ").concat(getMax(items)));
