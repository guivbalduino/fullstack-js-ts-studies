import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('#qtd');
const chkMaiusculas = document.querySelector('#maiusculas');
const chkMinusculas = document.querySelector('#minusculas');
const chkNumeros = document.querySelector('#numeros');
const chkSimbolos = document.querySelector('#simbolos');
const btnGerar = document.querySelector('.form-senha button');

export default () => {
  btnGerar.addEventListener('click', (e) => {
    e.preventDefault();
    senhaGerada.innerHTML = geraSenha(
      qtdCaracteres.value,
      chkMaiusculas.checked,
      chkMinusculas.checked,
      chkNumeros.checked,
      chkSimbolos.checked,
    );
  });
};
