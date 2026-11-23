const tabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');
const registerLink = document.getElementById('registerLink');
const forgotLink = document.getElementById('forgotLink');
let loginMode = 'user';

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    loginMode = tab.dataset.mode;
    message.textContent = loginMode === 'admin'
      ? 'Mode admin dipilih. Masukkan akun admin untuk simulasi.'
      : 'Mode pengguna dipilih.';
  });
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!email || !password) return;
  message.textContent = `Form ${loginMode === 'admin' ? 'admin' : 'pengguna'} berhasil divalidasi di browser. Login sungguhan akan dibuat setelah backend dan database tersedia.`;
});

registerLink.addEventListener('click', event => {
  event.preventDefault();
  alert('Halaman registrasi akan dibuat pada tahap berikutnya.');
});
forgotLink.addEventListener('click', event => {
  event.preventDefault();
  alert('Fitur lupa kata sandi belum diaktifkan pada prototype frontend.');
});
