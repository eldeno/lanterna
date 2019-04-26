// Variáveis Globais
let medidor = 100;

// DOM Elements
const btnLigaDesliga = document.querySelector('.btn-liga-desliga');
const btnTrocarBateria = document.querySelector('.btn-trocar-bateria');
const luzTop = document.querySelector('.luz-top');
const luzMiddle = document.querySelector('.luz-middle');
const luzBottom = document.querySelector('.luz-bottom');
const medidorUI = document.querySelector('.medidor');
const batteryDisplay = document.querySelector('#battery-display');

medidorUI.innerHTML = medidor + ' %';

const init = () => {
  ligarLanterna();
  trocarBateria();
  setInterval(bateriaDescarregando, 1000);
  setInterval(checarBateria, 50);
}

const ligarLanterna = () => {
  btnLigaDesliga.addEventListener('click', () => {
    btnLigaDesliga.classList.toggle('ligado');
    if(btnLigaDesliga.classList.contains('ligado') && medidor > 0) {
      luzTop.style.opacity = 1;
      luzMiddle.style.opacity = 1;
      luzBottom.style.opacity = 1;
    } else if (btnLigaDesliga.classList.contains('ligado') && medidor === 0) {
      batteryDisplay.style.color = 'red';
    } else {
      luzTop.style.opacity = 0;
      luzMiddle.style.opacity = 0;
      luzBottom.style.opacity = 0;
      batteryDisplay.style.color = '#fff';
    }
  });  
}

const checarBateria = () => {
  if (medidor === 0) {
    luzTop.style.opacity = 0;
    luzMiddle.style.opacity = 0;
    luzBottom.style.opacity = 0;
    if (btnLigaDesliga.classList.contains('ligado')) {
      batteryDisplay.style.color= 'red';
    }
  } else {
    batteryDisplay.style.color= 'white';
  }
}

const bateriaDescarregando = () => {
  if(btnLigaDesliga.classList.contains('ligado') && medidor > 0) {
    medidor--;
  } 
  medidorUI.innerHTML = medidor  + ' %';
}

const trocarBateria = () => {
  btnTrocarBateria.addEventListener('click', () => {
    if(medidor === 0) {
      medidor = 100;
    }
    medidorUI.innerHTML = medidor  + ' %';
    luzTop.style.opacity = 1;
    luzMiddle.style.opacity = 1;
    luzBottom.style.opacity = 1;
  });  
}

init();