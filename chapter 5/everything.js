function every(array, condition) {
    for (let element of array) {
        if (!condition(element))
            return false
    }
    return true
}
function every2(array, condition) {
    return  !array.some(el => !condition(el))
}


console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
