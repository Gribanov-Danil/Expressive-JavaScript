function loop(startIteration, condition, iteratorStep, action) {
    if (condition(startIteration)) {
        action(startIteration)
        loop(iteratorStep(startIteration), condition, iteratorStep, action)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);


let arr = [1, 2, 3, 2, 3, 4, 5, 6]
loop(0, n => n < arr.length, n => n + 1, n => console.log(arr[n]))