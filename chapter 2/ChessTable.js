let size = 8;
for(let i = 0; i < size; i++){
    let currentString = "";
    for(let j = 0; j < size; j++){
        currentString += ((j + i) % 2 == 0)? " ": "#";
    }
    console.log(currentString);
}