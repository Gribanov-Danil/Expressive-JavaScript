function deepEqual(object1, object2) {
    let object1Length = Object.keys(object1).length;
    let object2Length = Object.keys(object2).length;
    if (object1Length === 0 && object2Length === 0 && object1!==object2)
        return false
    else {
        if (object1Length !== object2Length)
            return false
        else {
            let object1Keys = Object.keys(object1);
            let object2Keys = Object.keys(object2);
            for (let i = 0; i < object1Length; i++) {
                if (object1Keys[i] !== object2Keys[i] || object1[object1Keys[i]] !== object2[object2Keys[i]])
                    return false
            }
        }
    }
    return true
}

let obj = {
    field1: 5,
    field2: '2',
}
let smallObj = {
    field1: 5
}

let obj2 = {
    field1: 5,
    field3: '2',
}
let obj3 = {
    field1: 5,
    field2: '2',
}

let object1 = 1;
let object2 = 1;
let object3 = 2;
console.log(deepEqual(object1, object2));
console.log(deepEqual(object1, object3));
console.log(deepEqual(obj, smallObj));
console.log(deepEqual(obj, obj2));
console.log(deepEqual(obj, obj3));



