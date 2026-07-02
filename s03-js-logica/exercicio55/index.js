const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Balduino',
  idade: 30
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
