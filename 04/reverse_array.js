function reverseArray(array) {
    var reversed = [];
    var counter = 0;
    for (var i = array.length - 1; i >= 0; i--) {
        reversed[counter] = array[i];
        counter++;
    }
    return reversed;
}

function reverseArrayInPlace(array) {
    var temp = "";
    for (var left = 0, right = array.length - 1; left < right; left++, right--) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);