function range(start, end, step =1 ) {
    let resultArr = [];
    if (start < end) {
        for (let i = start; i <= end; i+= step) {
            resultArr.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i+= step) {
            resultArr.push(i);
        }
    }

    return resultArr
}

function sum (arr) {
    let resultSum = 0;
    for (let element of arr){
        resultSum += element;
    }
    return resultSum
}

// tests
start = 5;
end = 2;
step = -1;
arr = range(start,end, step)
console.log(arr)
console.log(sum(arr))