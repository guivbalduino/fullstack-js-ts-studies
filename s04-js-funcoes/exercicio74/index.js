(function(idade, peso, altura) {

  const sobrenome = 'Balduino';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Guilherme'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.80);
