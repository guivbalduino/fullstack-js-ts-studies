const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nota1 = Number(document.querySelector('#nota1').value);
  const nota2 = Number(document.querySelector('#nota2').value);
  const nota3 = Number(document.querySelector('#nota3').value);

  if (!nota1 || !nota2 || !nota3) {
    setResultado('Preencha todas as notas corretamente.', false);
    return;
  }

  if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
    setResultado('As notas devem ser entre 0 e 10.', false);
    return;
  }

  const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);
  const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

  const msg = `Média: ${media} - ${situacao}`;

  setResultado(msg, situacao === 'Aprovado');
});

function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isAprovado) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isAprovado) {
    p.classList.add('aprovado');
  } else {
    p.classList.add('reprovado');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
