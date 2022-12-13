function arrayToList(arr) {
    let list = {"value": null, "rest": null};
    let currentArr = arr;
    if (currentArr.length > 0) {
        list = {
            value: currentArr[0],
            rest: arrayToList(remove(currentArr, 0))
        }
    }
    else return null;
    return list
}

function listToArray(list) {
    let arr = [];
    if (list.rest) {
        arr.push(list.value);
        arr.push(...listToArray(list.rest))
    }
    else {
        arr.push(list.value)
    }
    return arr;
}

function prepend(listValue, list) {
    return {value: listValue, rest: list}
}

function remove(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index+1))
}

function nth (list, index, i = 0) {
    if (list.value) {
        if (i === index) {
            return list.value
        }
        else {
            return nth(list.rest, index, ++i)
        }
    }
}



arr = [1, 2, 3];
console.log(arrayToList(arr));
let newList = arrayToList(arr);
console.log(listToArray(newList));
console.log(prepend(4, newList));
newList = prepend(4, newList)
console.log(nth(newList, 3))
