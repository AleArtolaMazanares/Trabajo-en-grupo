const lista = [1, 2, 3, 4];

const sumar = (acc, value) => acc + value;

const resultado = lista.reduce(sumar);
console.log(resultado);
