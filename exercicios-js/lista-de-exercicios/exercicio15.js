const receberSomenteOsParesDeIndicesPares = (array) => array.filter((a, i) => a % 2 === 0 && i % 2 === 0);

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));
