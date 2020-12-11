import WOW from 'wow.js';

import './modules/sliders/whats-happening';
import './modules/sliders/points';
import Modal from './modules/Modal';

new WOW().init();

Modal.setOpenCallback('modal', () => {
  const modal = document.querySelector('#modal');
  const output = modal.querySelector('.modal-counter');
  const dateFrom = new Date();
  const dateTo = new Date(2020, 11, 16, 9, 0, 0);

  const result = dateTo - dateFrom + 1000;

  let minutes = Math.floor((result / 1000 / 60) % 60);
  const hours = Math.floor(result / 1000 / 60 / 60);
  if (minutes < 10) minutes = '0' + minutes;

  output.innerHTML = `${hours} ч. ${minutes} мин.`;
});
