const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Balduino',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
