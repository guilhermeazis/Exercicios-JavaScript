const funcaoDaSorte = (escolhido) => {
    const aleatoryNumber = Math.floor(Math.random() * 10 + 1)
    return escolhido === aleatoryNumber ? `Parabéns! O número sorteado foi o ${aleatoryNumber}` : `Que pena! O número sorteado foi o ${aleatoryNumber}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))