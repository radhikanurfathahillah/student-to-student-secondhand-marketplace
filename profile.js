// profile.js — logika halaman Profil (Achiles)
// Data diambil dari localStorage (hasil registrasi); jika kosong dipakai data dummy.
const KEY = 'secondid_user';
const DUMMY = {
  status: 'mahasiswa', nama: 'Radhika Nur Fathahillah', nim: '2210511001', tahun: '2022',
  univ: 'Universitas Pembangunan Nasional Veteran Jakarta', prodi: 'Sistem Informasi',
  email: 'radhika@student.ac.id', whatsapp: '081234567890',
  docName: 'ktm-radhika.jpg', docSize: 842000, verification: 'verified'
};
const $ = id => document.getElementById(id);
const MAX_SIZE = 5 * 1024 * 1024;
const EXT = ['pdf', 'jpg', 'jpeg', 'png'];

let user;
try { user = JSON.parse(localStorage.getItem(KEY)); } catch (_) {}
if (!user) user = { ...DUMMY };
function save() { try { localStorage.setItem(KEY, JSON.stringify(user)); } catch (_) {} }

function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove('show'), 3200);
}
function setError(id, msg) { const f = $(id); f.classList.add('invalid'); f.querySelector('.error-text').textContent = msg; }
function clearErrors(form) { form.querySelectorAll('.field').forEach(f => { f.classList.remove('invalid'); f.querySelector('.error-text').textContent = ''; }); }
const initials = n => n.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

/* ---------- Render ---------- */
const VERIF = {
  pending:  { text: 'Menunggu verifikasi', cls: 'badge-pending', notice: ['notice-wait', 'Akun sedang diverifikasi', 'Admin sedang memeriksa dokumen buktimu. Sebelum disetujui, kamu belum bisa menghubungi penjual lewat platform.'] },
  verified: { text: 'Terverifikasi', cls: 'badge-verified', notice: ['notice-ok', 'Akun terverifikasi', 'Statusmu sudah dikonfirmasi admin. Mahasiswa aktif terverifikasi dapat menghubungi penjual.'] },
  rejected: { text: 'Verifikasi ditolak', cls: 'badge-rejected', notice: ['notice-bad', 'Verifikasi ditolak', 'Dokumen belum dapat diterima. Unggah ulang dokumen yang jelas lewat “Ajukan Perubahan Status”.'] }
};
function render() {
  const alumni = user.status === 'alumni';
  const v = VERIF[user.verification] || VERIF.pending;
  $('pName').textContent = user.nama;
  $('avatar').textContent = initials(user.nama);
  if (user.avatar) $('avatar').innerHTML = `<img src="${user.avatar}" alt="">`;
  $('pStatus').textContent = alumni ? 'Alumni' : 'Mahasiswa aktif';
  $('pVerif').textContent = v.text; $('pVerif').className = 'badge ' + v.cls;
  $('pNim').textContent = user.nim;
  $('pTahunLabel').textContent = alumni ? 'Tahun lulus' : 'Tahun masuk';
  $('pTahun').textContent = user.tahun;
  $('pUniv').textContent = user.univ;
  $('pProdi').textContent = user.prodi;
  $('pEmail').textContent = user.email;
  $('pWa').textContent = user.whatsapp || 'Belum diisi';
  $('docName').textContent = user.docName || '—';
  $('docMeta').textContent = (alumni ? 'Ijazah / surat alumni' : 'KTM') + (user.docSize ? ` · ${(user.docSize / 1024 / 1024).toFixed(2)} MB` : '');
  $('docBadge').textContent = v.text; $('docBadge').className = 'badge ' + v.cls;
  const [cls, title, text] = v.notice;
  $('verifNotice').innerHTML = `<div class="notice ${cls}" role="status"><strong>${title}</strong>${text}</div>`;
  $('demoStatus').value = user.verification;
  // opsi pengajuan status
  $('sNew').innerHTML = alumni
    ? '<option value="">Pilih status baru</option><option value="mahasiswa">Mahasiswa aktif (kuliah lagi)</option>'
    : '<option value="">Pilih status baru</option><option value="alumni">Alumni (sudah lulus)</option>';
}

/* ---------- Edit profil ---------- */
$('editBtn').addEventListener('click', () => {
  $('eNama').value = user.nama; $('eUniv').value = user.univ; $('eProdi').value = user.prodi;
  $('eEmail').value = user.email; $('eWa').value = user.whatsapp || '';
  $('viewCard').hidden = true; $('editCard').hidden = false;
});
$('cancelEdit').addEventListener('click', () => { $('editCard').hidden = true; $('viewCard').hidden = false; clearErrors($('editForm')); });

$('editForm').addEventListener('submit', e => {
  e.preventDefault(); clearErrors(e.target);
  let ok = true; const bad = (id, m) => { setError(id, m); ok = false; };
  const nama = $('eNama').value.trim(), email = $('eEmail').value.trim(), wa = $('eWa').value.trim().replace(/[\s-]/g, '');
  if (nama.length < 3) bad('e-nama', 'Nama minimal 3 karakter.');
  if (!$('eUniv').value.trim()) bad('e-univ', 'Universitas wajib diisi.');
  if (!$('eProdi').value.trim()) bad('e-prodi', 'Program studi wajib diisi.');
  if (!email) bad('e-email', 'Email wajib diisi.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) bad('e-email', 'Format email tidak valid.');
  if (!wa) bad('e-wa', 'Nomor WhatsApp wajib diisi untuk penjual.');
  else if (!/^(08|628|\+628)\d{7,11}$/.test(wa)) bad('e-wa', 'Format nomor tidak valid. Contoh: 081234567890.');
  if (!ok) return;
  Object.assign(user, { nama, univ: $('eUniv').value.trim(), prodi: $('eProdi').value.trim(), email, whatsapp: wa });
  save(); render();
  $('editCard').hidden = true; $('viewCard').hidden = false;
  toast('Profil berhasil diperbarui.');
});

/* ---------- Foto profil ---------- */
$('avatarInput').addEventListener('change', e => {
  const f = e.target.files[0]; if (!f) return;
  const ext = f.name.split('.').pop().toLowerCase();
  if (!['jpg', 'jpeg', 'png'].includes(ext)) return toast('Foto harus berformat JPG atau PNG.');
  if (f.size > MAX_SIZE) return toast('Ukuran foto maksimal 5 MB.');
  const r = new FileReader();
  r.onload = () => { $('avatar').innerHTML = `<img src="${r.result}" alt="">`; toast('Foto profil diperbarui (simulasi).'); };
  r.readAsDataURL(f);
});

/* ---------- Panel ubah password / pengajuan status ---------- */
function openPanel(id) { ['pwForm', 'statusForm'].forEach(p => $(p).hidden = p !== id); $(id).scrollIntoView({ behavior: 'smooth', block: 'center' }); }
$('pwOpen').addEventListener('click', () => openPanel('pwForm'));
$('statusOpen').addEventListener('click', () => openPanel('statusForm'));
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => { const f = $(b.dataset.close); f.hidden = true; f.reset(); clearErrors(f); $('sFileName').textContent = 'Belum ada file dipilih'; }));

document.querySelectorAll('.pw-toggle').forEach(btn => btn.addEventListener('click', () => {
  const i = $(btn.dataset.target), show = i.type === 'password';
  i.type = show ? 'text' : 'password'; btn.textContent = show ? 'Sembunyi' : 'Tampil';
}));

$('pwForm').addEventListener('submit', e => {
  e.preventDefault(); clearErrors(e.target);
  let ok = true; const bad = (id, m) => { setError(id, m); ok = false; };
  const o = $('pOld').value, n = $('pNew').value, c = $('pConf').value;
  if (!o) bad('p-old', 'Password lama wajib diisi.');
  if (!n) bad('p-new', 'Password baru wajib diisi.');
  else if (n.length < 8 || !/[A-Za-z]/.test(n) || !/\d/.test(n)) bad('p-new', 'Minimal 8 karakter, kombinasi huruf dan angka.');
  else if (n === o) bad('p-new', 'Password baru tidak boleh sama dengan yang lama.');
  if (!c) bad('p-conf', 'Konfirmasi password wajib diisi.');
  else if (c !== n) bad('p-conf', 'Konfirmasi password tidak sama.');
  if (!ok) return;
  e.target.reset(); e.target.hidden = true;
  toast('Password berhasil diubah (simulasi).');
});

$('sDoc').addEventListener('change', () => {
  const f = $('sDoc').files[0], l = $('sFileName');
  $('s-doc').classList.remove('invalid');
  l.textContent = f ? f.name : 'Belum ada file dipilih'; l.classList.toggle('chosen', !!f);
});
$('statusForm').addEventListener('submit', e => {
  e.preventDefault(); clearErrors(e.target);
  let ok = true; const bad = (id, m) => { setError(id, m); ok = false; };
  if (!$('sNew').value) bad('s-new', 'Pilih status baru.');
  if ($('sReason').value.trim().length < 5) bad('s-reason', 'Tuliskan alasan (minimal 5 karakter).');
  const f = $('sDoc').files[0];
  if (!f) bad('s-doc', 'Dokumen pendukung wajib diunggah.');
  else if (!EXT.includes(f.name.split('.').pop().toLowerCase())) bad('s-doc', 'Format harus PDF, JPG, atau PNG.');
  else if (f.size > MAX_SIZE) bad('s-doc', 'Ukuran file maksimal 5 MB.');
  if (!ok) return;
  user.verification = 'pending'; save(); render();
  e.target.reset(); e.target.hidden = true; $('sFileName').textContent = 'Belum ada file dipilih';
  toast('Pengajuan terkirim. Status akun kembali menunggu verifikasi admin.');
});

/* ---------- Simulasi status verifikasi (demo untuk presentasi) ---------- */
$('demoStatus').addEventListener('change', e => { user.verification = e.target.value; save(); render(); });

render();
