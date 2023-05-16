const buscarPalavrasSemelhantes = (world, array) => array.filter(a => a.includes(world))

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'professional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))