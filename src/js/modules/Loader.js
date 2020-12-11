document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  document.querySelector('.loader').remove();
  document.body.style.overflow = '';
});
