document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const msg = document.getElementById('message')?.value.trim() || '';

    if (!name || !email || !msg) {
      e.preventDefault();
      alert('Please fill in all fields.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      e.preventDefault();
      alert('Please enter a valid email.');
    }
  });
});
