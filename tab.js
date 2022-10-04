let active;

document.querySelectorAll('nav > a')
  .forEach((link) => {
    link.addEventListener('click', (e) => {
      if (active) {
        active.classList.remove('active');
      }

      active = e.currentTarget;
      active.classList.add('active');
    });
  });