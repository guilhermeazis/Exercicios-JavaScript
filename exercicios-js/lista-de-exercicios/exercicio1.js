const cumprimentar = (name) => {
    const saudacao = 'Olá, '
    const result =  saudacao.concat(name)
    return `${result}!`
}

console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))