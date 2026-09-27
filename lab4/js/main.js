document.querySelectorAll('.faq__q').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = document.getElementById(question.getAttribute('aria-controls'));
    const expanded = question.getAttribute('aria-expanded') === 'true';
    question.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
  });
});

const form = document.getElementById('trial-form');

if (form) {
  const email = document.getElementById('trial-email');
  const error = document.getElementById('trial-error');
  const status = document.getElementById('trial-status');

  email.addEventListener('invalid', () => {
    email.setAttribute('aria-invalid', 'true');
    error.textContent = 'Enter a valid work email, for example name@example.com.';
    status.textContent = '';
  });

  email.addEventListener('input', () => {
    email.removeAttribute('aria-invalid');
    error.textContent = '';
    status.textContent = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    error.textContent = '';
    status.textContent = 'Demo completed. No data was sent and no account was created.';
  });
}
