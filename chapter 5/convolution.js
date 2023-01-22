
let convolution = (arr) => arr.reduce((a, b) => a.concat(b), [])
let test = [[1,2,3], [2,3], [4,5,6]]

console.log(convolution(test))
