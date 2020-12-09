document.addEventListener('DOMContentLoaded', () => {
  const $flickers = document.querySelectorAll('.mb-flicker');

  $flickers.length &&
    $flickers.forEach(($flicker) => {
      const flicker = flick();
      setInterval(() => flicker($flicker), 500);
    });

  function flick() {
    let isFlicking = false;

    return ($el) => {
      isFlicking ? ($el.style.display = '') : ($el.style.display = 'none');
      isFlicking = !isFlicking;
    };
  }
});
