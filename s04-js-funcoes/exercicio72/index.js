function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Balduino';
  console.log(nome, sobrenome);
}

const funcao = retornaFuncao('Guilherme');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao('Balduino'),
  funcao2('Oliveira'));
