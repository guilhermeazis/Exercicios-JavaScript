const soma = (array) => array.reduce((acumulador, atual) => acumulador + atual, 0);
const media = (array) => soma(array) / array.length;

const receberMelhorEstudante = (array) => {
  const estudantesComMedia = Object.entries(array).map(estudante => {
    const chave = 0
    const valor = 1
    return {nome: estudante[chave], media: media(estudante[valor])}
  });
  const estudantesOrdenados = estudantesComMedia.sort((a, b) => b.media - a.media)
  const melhorEstudante = estudantesOrdenados[0]
  return melhorEstudante
};

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.8, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
