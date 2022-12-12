function reverseArray(inputArr) {
    let reverseArr = []
    for (let element of inputArr) {
        reverseArr.unshift(element)
    }
    return reverseArr
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let helpVariable = arr[i];
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = helpVariable
    }
    return arr
}


let arr = [1, 2, 3, "foo", true]
console.log(reverseArray(arr))
console.log(reverseArrayInPlace(arr))