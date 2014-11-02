function prepend(value, list) {
    var element = {};
    element.value = value;
    element.rest = list;
    return element;
}

function nth(list, position) {    
    for (var i = 0; ((i <= position) && (list !== null)); i++) {
        var element = list;
        list = list.rest;
    }
    return element.value;
}

function nthRecursive(list, position) {  
    if (position == 0) {
        return list.value;
    }
    else if (list.rest == null) {
        return undefined;
    } else {
        return nthRecursive(list.rest, position - 1);
    }
}

function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    return list;
}

function listToArray(list) {
    var array = [];
    var counter = 0;
    while (list !== null) {
        array[counter] = list.value; 
        list = list.rest;
        counter++;
    }
    return array;
}

//console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// ? 20