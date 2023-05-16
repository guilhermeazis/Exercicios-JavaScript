const filtarPorQuantidade = (array, digitos) => array.filter(a => String(a).length == digitos)

console.log(filtarPorQuantidade([38, 2, 365, 10, 125, 11], 2))
console.log(filtarPorQuantidade([5, 9, 1, 125, 11], 1))