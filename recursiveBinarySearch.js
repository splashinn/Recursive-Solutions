// recursiveBinarySearch.js
// (C) 2014 splashinn

function binarySearchIterative(arr, ele) {
    var beginning = 0, end = arr.length,
        target;
    while (true) {
        target = Math.floor((beginning + end) / 2);
        if ((target === end || target === beginning) && arr[target] !== ele) {
            return -1;
        }
        if (arr[target] > ele) {
            end = target;
        } else if (arr[target] < ele) {
            beginning = target;
        } else {
            return target;
        }
    }
}
