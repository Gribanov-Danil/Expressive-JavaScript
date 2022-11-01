// let triangleSide = Number(prompt("Введите сторону треугольника"));
let triangleSide = 7;
for (let i = 0; i < triangleSide; i++){
    let currentString = "#";
    for (let j = 0; j < i; j++){
        currentString += "#";
    }
    console.log(currentString);
}