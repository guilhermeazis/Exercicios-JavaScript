const menorNumero = (array) => array.reduce((prev, current) => prev < current ? prev : current);

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))