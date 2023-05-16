const contarCaracteres = (caracter, string) => {
    const array = []
    const letras = string.split('')
    letras.forEach(l => {
        if (l === caracter) {
            array.push(l)
        }
    });
    return array.length
}

console.log(contarCaracteres('r', 'A sorte favorece os audazes'))
console.log(contarCaracteres('c', 'Conhece-te a ti mesmo'))