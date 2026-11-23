// register.js — logika halaman Registrasi (Achiles)
const form = document.getElementById('registerForm');
const successBox = document.getElementById('successBox');
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXT = ['pdf', 'jpg', 'jpeg', 'png'];
const currentYear = new Date().getFullYear();

const $ = id => document.getElementById(id);
const statusValue = () => form.elements.status.value;

/* ---------- Ubah form berdasarkan status ---------- */
function applyStatus() {
  const alumni = statusValue() === 'alumni';
  $('nimLabel').textContent = alumni ? 'NIM saat kuliah' : 'NIM';
  $('tahunLabel').textContent = alumni ? 'Tahun lulus' : 'Tahun masuk';
  $('tahun').placeholder = alumni ? 'Contoh: 2024' : 'Contoh: 2022';
  $('docLabel').innerHTML = (alumni ? 'Dokumen bukti (ijazah / surat alumni)' : 'Dokumen bukti (KTM)') +
    ' <span class="hint">· PDF, JPG, atau PNG, maks. 5 MB</span>';
  clearError('f-tahun');
  clearError('f-doc');
}
document.querySelectorAll('input[name=status]').forEach(r => r.addEventListener('change', applyStatus));

/* ---------- Helper error ---------- */
function setError(fieldId, msg) {
  const f = $(fieldId);
  f.classList.add('invalid');
  f.querySelector('.error-text').textContent = msg;
}
function clearError(fieldId) {
  const f = $(fieldId);
  f.classList.remove('invalid');
  f.querySelector('.error-text').textContent = '';
}

/* ---------- Validasi ---------- */
function validateFile(file) {
  if (!file) return 'Dokumen bukti wajib diunggah.';
  const ext = file.name.split('.').pop().toLowerCase();
  if (!ALLOWED_EXT.includes(ext)) return 'Format file harus PDF, JPG, atau PNG.';
  if (file.size > MAX_SIZE) return 'Ukuran file maksimal 5 MB.';
  return '';
}

function validate() {
  let ok = true;
  const fail = (id, msg) => { setError(id, msg); ok = false; };
  ['f-nama','f-nim','f-tahun','f-univ','f-prodi','f-email','f-password','f-confirm','f-doc','f-agree'].forEach(clearError);

  const nama = $('nama').value.trim();
  if (!nama) fail('f-nama', 'Nama lengkap wajib diisi.');
  else if (nama.length < 3) fail('f-nama', 'Nama minimal 3 karakter.');

  const nim = $('nim').value.trim();
  if (!nim) fail('f-nim', 'NIM wajib diisi.');
  else if (!/^[0-9A-Za-z]{5,20}$/.test(nim)) fail('f-nim', 'NIM 5–20 karakter, hanya huruf dan angka.');

  const tahun = Number($('tahun').value);
  const label = statusValue() === 'alumni' ? 'Tahun lulus' : 'Tahun masuk';
  if (!$('tahun').value) fail('f-tahun', label + ' wajib diisi.');
  else if (tahun < 1990 || tahun > currentYear)
    fail('f-tahun', `${label} harus antara 1990 dan ${currentYear}.`);

  if (!$('univ').value.trim()) fail('f-univ', 'Universitas wajib diisi.');
  if (!$('prodi').value.trim()) fail('f-prodi', 'Program studi wajib diisi.');

  const email = $('email').value.trim();
  if (!email) fail('f-email', 'Email wajib diisi.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) fail('f-email', 'Format email tidak valid.');

  const pw = $('password').value;
  if (!pw) fail('f-password', 'Password wajib diisi.');
  else if (pw.length < 8) fail('f-password', 'Password minimal 8 karakter.');
  else if (!/[A-Za-z]/.test(pw) || !/\d/.test(pw)) fail('f-password', 'Password harus mengandung huruf dan angka.');

  const cf = $('confirm').value;
  if (!cf) fail('f-confirm', 'Konfirmasi password wajib diisi.');
  else if (cf !== pw) fail('f-confirm', 'Konfirmasi password tidak sama.');

  const fileErr = validateFile($('doc').files[0]);
  if (fileErr) fail('f-doc', fileErr);

  if (!$('agree').checked) fail('f-agree', 'Kamu harus menyetujui syarat dan kebijakan privasi.');

  return ok;
}

/* ---------- Tampil/sembunyi password ---------- */
document.querySelectorAll('.pw-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = $(btn.dataset.target);
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.textContent = show ? 'Sembunyi' : 'Tampil';
  });
});

/* ---------- Nama dokumen yang dipilih ---------- */
$('doc').addEventListener('change', () => {
  const file = $('doc').files[0];
  const label = $('fileName');
  clearError('f-doc');
  if (!file) { label.textContent = 'Belum ada file dipilih'; label.classList.remove('chosen'); return; }
  const err = validateFile(file);
  label.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
  label.classList.add('chosen');
  if (err) { $('doc').value = ''; label.textContent = 'Belum ada file dipilih'; label.classList.remove('chosen'); setError('f-doc', err); }
});

/* hapus error saat pengguna mengetik ulang */
form.querySelectorAll('input').forEach(el => {
  el.addEventListener('input', () => { const f = el.closest('.field'); if (f) clearError(f.id); });
});

/* ---------- Submit (simulasi) ---------- */
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) {
    const first = form.querySelector('.field.invalid');
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const file = $('doc').files[0];
  const user = {
    status: statusValue(),
    nama: $('nama').value.trim(),
    nim: $('nim').value.trim(),
    tahun: $('tahun').value,
    univ: $('univ').value.trim(),
    prodi: $('prodi').value.trim(),
    email: $('email').value.trim(),
    whatsapp: '',
    docName: file.name,
    docSize: file.size,
    verification: 'pending'   // menunggu verifikasi admin
  };
  try { localStorage.setItem('secondid_user', JSON.stringify(user)); } catch (_) {}
  form.hidden = true;
  successBox.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
