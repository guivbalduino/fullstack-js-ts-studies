import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';

(() => {
  const cpfGerado = document.querySelector('.cpf-gerado');
  const gera = new GeraCPF();
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
