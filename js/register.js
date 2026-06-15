/* ================================================
   register.js — Form validation & submission
   ================================================ */

(function () {
  const form    = document.getElementById('register-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  /* Simple validators */
  const validators = {
    name:    v => v.trim().length >= 2,
    email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    college: v => v.trim().length >= 2,
    phone:   v => /^[6-9]\d{9}$/.test(v.replace(/\s/g,'')),
    year:    v => v !== '',
    domain:  v => v !== '',
  };

  const messages = {
    name:    'Please enter your full name (min 2 characters)',
    email:   'Please enter a valid email address',
    college: 'Please enter your college name',
    phone:   'Please enter a valid 10-digit Indian mobile number',
    year:    'Please select your year of study',
    domain:  'Please select your domain of interest',
  };

  function showError(field, msg) {
    const group = field.closest('.form-group');
    let err = group.querySelector('.form-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'form-error';
      err.style.cssText = 'font-family:"Share Tech Mono",monospace;font-size:0.6rem;letter-spacing:0.12em;color:#ff0090;margin-top:2px;';
      group.appendChild(err);
    }
    err.textContent = msg;
    field.style.borderColor = 'rgba(255,0,144,0.5)';
  }

  function clearError(field) {
    const group = field.closest('.form-group');
    const err = group.querySelector('.form-error');
    if (err) err.textContent = '';
    field.style.borderColor = '';
  }

  /* Live validation on blur */
  Object.keys(validators).forEach(key => {
    const field = form.querySelector(`[name="${key}"]`);
    if (!field) return;
    field.addEventListener('blur', () => {
      if (!validators[key](field.value)) {
        showError(field, messages[key]);
      } else {
        clearError(field);
      }
    });
    field.addEventListener('input', () => clearError(field));
  });

  /* Submit */
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    Object.keys(validators).forEach(key => {
      const field = form.querySelector(`[name="${key}"]`);
      if (!field) return;
      if (!validators[key](field.value)) {
        showError(field, messages[key]);
        valid = false;
      } else {
        clearError(field);
      }
    });

    if (!valid) return;

    /* Simulate submission (replace with real API/FormSpree endpoint) */
    const btn = form.querySelector('.btn--submit');
    btn.textContent = 'Submitting...';
    btn.disabled = true;
    btn.style.opacity = '0.6';

    setTimeout(() => {
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    }, 1200);
  });
})();
