document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const closeModal = document.querySelector('.close');
  const body = document.body;

  const closeModalFunction = () => {
    modal.style.display = 'none';
  };
  closeModal.addEventListener('click', closeModalFunction);
  window.addEventListener('click', (event) => { if (event.target === modal) { closeModalFunction(); } });
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeModalFunction(); } });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api-docs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
          modalMessage.innerHTML = '<h3 class="modal-success">Thank you for your interest in cooperation!</h3><p class="modal-info">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>';
        form.reset();
      } else {
        modalMessage.textContent = 'There was an error with your request. Please try again.';
      }
      modal.style.display = 'block';
    } catch (error) {
      modalMessage.textContent = 'An error occurred. Please try again.';
      modal.style.display = 'block';
    }
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
