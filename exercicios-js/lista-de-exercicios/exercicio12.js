const removerPropriedade = (obj, remover) => {
  const copy = Object.assign(obj);
  delete copy[remover];
  return copy;
};

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
