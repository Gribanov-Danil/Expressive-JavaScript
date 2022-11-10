function isEven(x){
    if (x < 0)
        return isEven(Math.abs(x));
    else if (x === 0)
        return true
    else if (x === 1)
        return false
    else
        return isEven(x-2);
}


let a = -2;
console.log(isEven(a))