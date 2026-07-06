function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa('Guilherme', 'Balduino');
const p2 = new Pessoa('Maria', 'Balduino');

console.log(p1);
console.log(p2);
