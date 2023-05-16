const calcularMedia = (array) => array.reduce((acc, value) => acc + value) / array.length;

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
