(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBth: document.querySelector('[data-menu-close]'),
    modalBtns: document.querySelectorAll('.modal-nav-link'),
    modal: document.querySelector('[data-modal]'),
    body: document.body,
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBth.addEventListener('click', toggleModal);

  refs.modalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    if (refs.modal.classList.contains('is-open')) {
      refs.body.style.overflow = 'hidden';
    } else {
      refs.body.style.overflow = '';
    }
  }
})();


// SWITCH
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle'); 
  const themeElements = document.querySelectorAll('[data-theme]'); 

  const currentTheme = localStorage.getItem('theme') || 'light';
  
  themeElements.forEach(element => {
    element.setAttribute('data-theme', currentTheme);
  });

  themeToggle.checked = currentTheme === 'dark';
  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    themeElements.forEach(element => {
      element.setAttribute('data-theme', newTheme);
    });

    localStorage.setItem('theme', newTheme);
  });
});

