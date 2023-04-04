const data = require('./database');

/* Exercício 1 */
//const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return data.books.find((book) => book.author.birthYear === 1947 ).author.name;
};

//console.log(authorBornIn1947());

/* Exercício 2 */
//const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = data.books[0].name;
  data.books.forEach(({ name }) => {
    if (name.length < nameBook.length){
        nameBook = name;
    }
  });
  return nameBook;
}

//console.log(smallerName());

/* Exercício 3 */
/* const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  }; */

const getNamedBook = () => {
  return data.books.find((book) => book.name.length === 26);
}

//console.log(getNamedBook());

/* Exercício 4 */
//const expectedResult = false;
function everyoneWasBornOnSecXX() {
  return data.books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >= 1901)
}

//console.log(everyoneWasBornOnSecXX());
/* Exercício 5 */
//const expectedResult = true;
const someBookWasReleaseOnThe80s = () => {
    return data.books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
}

//console.log(someBookWasReleaseOnThe80s());

/* Exercício 6 */
const expectedResult = false;
const authorUnique = () => {
    return data.books.every((book) => 
        data.books.some((someBook) => 
            (book.author.birthYear === someBook.author.birthYear)
            && (book.author.name !== someBook.author.name)));
}

console.log(authorUnique());