const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const cover = document.querySelector('.cover');
const paper = document.querySelector('.paper');
const letter = document.querySelector('.letter');

btnClose.style.display = 'none'; // Oculta el botón "Cerrar carta" al inicio

btnOpen.addEventListener('click', () => {
  btnOpen.style.display = 'none'; // Oculta el botón "Abrir"
  cover.classList.add('open-cover');
  letter.classList.add('open-letter');

  setTimeout(() => {
    paper.classList.add('open-paper');
    btnClose.style.display = 'block'; // Muestra el botón "Cerrar carta" al final
  }, 500);
});

btnClose.addEventListener('click', () => {
  paper.classList.remove('open-paper');
  setTimeout(() => {
    cover.classList.remove('open-cover');
    letter.classList.remove('open-letter');
    btnClose.style.display = 'none'; // Oculta el botón "Cerrar carta" al volver al estado inicial
    btnOpen.style.display = 'block'; // Muestra el botón "Abrir" de nuevo
  }, 500);
});
