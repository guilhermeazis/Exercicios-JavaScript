const contarPalavras = (palavras) => {
  const qtdPalavras = palavras.split(" ");
  return qtdPalavras.length;
};

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));
