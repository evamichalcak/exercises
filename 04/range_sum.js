function range(start, end, step) {
    var rangeArr = [];
    if (start <= end) {
        step = step || 1;
        for (var i = start; i <= end; i += step) {
            rangeArr.push(i);
        }
    } else {
       step = step || -1;
        for (var i = start; i >= end; i += step) {
            rangeArr.push(i);
        }
    }
    return rangeArr;
}

function sum(values) {
    var summed = 0;
    for (var i = 0; i < values.length; i++) {
         summed += values[i];
    }
    return summed;
}


console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2));