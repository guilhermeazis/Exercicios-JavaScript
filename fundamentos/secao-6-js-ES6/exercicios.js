/* const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
    }
  };
  
  const sum = (value1, value2) => {
    // o `try` vai executar a função verifyNumber e retornar a soma, caso os parâmetros sejam números
    try { 
      verifyIsNumber(value1, value2);
      return value1 + value2;
    // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada por meio da propriedade `.message` nativa do objeto Error.
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3')); */

  /* const estoqueLoja = (produtos) => {
    try {
      const comprarProdutos = [];
      comprarProdutos = "Olá, Tryber!";
      for (let index = 0; index < produtos.length; index += 1) {
        if (produtos[index] === "xablau") {
          throw new Error("O que seria um xablau?");
        }
        comprarProdutos.push(produtos[index]);
      }
      return comprarProdutos;
    } catch (error) {
      return error.message;
    }
  };
  console.log(estoqueLoja(["camiseta", "boné", "tênis", "cinto", "xablau"])); */

  const getDayName = (number) => {
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
  };
  
  const printDayname = (dayNumber) => {
    console.log(getDayName(dayNumber));
  };
  
  const getDayName = (number) => {
  if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
  const dayNumber = number - 1;
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return days[dayNumber];
};

const printDayname = (dayNumber) => {
  try {
    console.log(getDayName(dayNumber));
  } catch {
    console.log(error);
  }
};
// spell-checker:enable

  
  