/* Admin Dashboard Second.id
   Semua data adalah data dummy. Perubahan hanya tersimpan di memori
   (hilang saat halaman di-refresh) sesuai catatan tugas: simulasi frontend. */

/* ====== DATA DUMMY ====== */
let products = [
  { id: 'PRD-001', name: 'Laptop Lenovo ThinkPad', category: 'Elektronik', price: 3500000, seller: 'Rani Putri', condition: 'Baik', location: 'Jakarta Selatan', date: '2026-11-18', status: 'pending', desc: 'ThinkPad T480, RAM 16GB, SSD 256GB. Baterai masih awet, bonus tas laptop.', reason: '' },
  { id: 'PRD-002', name: 'Paket Buku Pemrograman', category: 'Buku', price: 85000, seller: 'Dimas Pratama', condition: 'Sangat baik', location: 'Depok', date: '2026-11-19', status: 'pending', desc: '3 buku: Clean Code, JavaScript Dasar, dan Basis Data. Tidak ada coretan.', reason: '' },
  { id: 'PRD-003', name: 'Jaket Almamater Size L', category: 'Fashion', price: 150000, seller: 'Salsa Nabila', condition: 'Baik', location: 'Bekasi', date: '2026-11-20', status: 'pending', desc: 'Jaket almamater angkatan 2023, dipakai beberapa kali.', reason: '' },
  { id: 'PRD-004', name: 'Scientific Calculator', category: 'Perlengkapan Kuliah', price: 95000, seller: 'Fajar Nugroho', condition: 'Normal', location: 'Jakarta Timur', date: '2026-11-10', status: 'listed', desc: 'Casio fx-991EX, berfungsi normal.', reason: '' },
  { id: 'PRD-005', name: 'Headphone Wireless', category: 'Elektronik', price: 175000, seller: 'Rani Putri', condition: 'Baik', location: 'Tangerang', date: '2026-11-08', status: 'listed', desc: 'Headphone bluetooth, baterai tahan 20 jam.', reason: '' },
  { id: 'PRD-006', name: 'Tas Ransel Kuliah', category: 'Fashion', price: 120000, seller: 'Salsa Nabila', condition: 'Baik', location: 'Bekasi', date: '2026-11-05', status: 'listed', desc: 'Ransel muat laptop 15 inci, resleting normal.', reason: '' },
  { id: 'PRD-007', name: 'Desk Lamp Minimalis', category: 'Lainnya', price: 60000, seller: 'Dimas Pratama', condition: 'Sangat baik', location: 'Depok', date: '2026-11-02', status: 'listed', desc: 'Lampu meja LED 3 level cahaya.', reason: '' },
  { id: 'PRD-008', name: 'Monitor 24 inci', category: 'Elektronik', price: 900000, seller: 'Fajar Nugroho', condition: 'Baik', location: 'Jakarta Timur', date: '2026-11-01', status: 'listed', desc: 'Monitor IPS 24 inci, tanpa dead pixel.', reason: '' }
];

let users = [
  { id: 'USR-001', name: 'Aldi Firmansyah', email: 'aldi.f@student.ac.id', role: 'Mahasiswa Aktif', nim: '2410512011', univ: 'UPN Veteran Jakarta', prodi: 'D3 Sistem Informasi', year: '2024', docName: 'ktm_aldi.jpg', verif: 'pending', date: '2026-11-19', reason: '' },
  { id: 'USR-002', name: 'Bunga Maharani', email: 'bunga.m@alumni.ac.id', role: 'Alumni', nim: '2110512044', univ: 'Universitas Indonesia', prodi: 'S1 Ilmu Komputer', year: '2025', docName: 'surat_alumni_bunga.pdf', verif: 'pending', date: '2026-11-20', reason: '' },
  { id: 'USR-003', name: 'Rani Putri', email: 'rani.p@student.ac.id', role: 'Mahasiswa Aktif', nim: '2310512022', univ: 'UPN Veteran Jakarta', prodi: 'D3 Sistem Informasi', year: '2023', docName: 'ktm_rani.png', verif: 'verified', date: '2026-10-02', reason: '' },
  { id: 'USR-004', name: 'Dimas Pratama', email: 'dimas.p@student.ac.id', role: 'Mahasiswa Aktif', nim: '2310512031', univ: 'Universitas Gunadarma', prodi: 'S1 Informatika', year: '2023', docName: 'ktm_dimas.jpg', verif: 'verified', date: '2026-10-05', reason: '' },
  { id: 'USR-005', name: 'Salsa Nabila', email: 'salsa.n@alumni.ac.id', role: 'Alumni', nim: '1910512008', univ: 'Universitas Bina Nusantara', prodi: 'S1 Sistem Informasi', year: '2023', docName: 'ijazah_salsa.pdf', verif: 'verified', date: '2026-10-09', reason: '' },
  { id: 'USR-006', name: 'Fajar Nugroho', email: 'fajar.n@student.ac.id', role: 'Mahasiswa Aktif', nim: '2210512015', univ: 'UPN Veteran Jakarta', prodi: 'S1 Informatika', year: '2022', docName: 'ktm_fajar.jpg', verif: 'verified', date: '2026-10-12', reason: '' },
  { id: 'USR-007', name: 'Cahya Wibowo', email: 'cahya.w@mail.com', role: 'Mahasiswa Aktif', nim: '2410512099', univ: 'Universitas X', prodi: 'D3 Manajemen', year: '2024', docName: 'foto_buram.jpg', verif: 'rejected', date: '2026-11-03', reason: 'Dokumen bukti tidak terbaca.' }
];

let categories = ['Elektronik', 'Buku', 'Perlengkapan Kuliah', 'Fashion', 'Lainnya'];

let reports = [
  { id: 'RPT-001', type: 'Barang', targetId: 'PRD-006', target: 'Tas Ransel Kuliah', reporter: 'Aldi Firmansyah', reason: 'Foto produk tidak sesuai', detail: 'Foto yang dipasang terlihat diambil dari internet, bukan barang asli penjual.', status: 'Baru', action: '' },
  { id: 'RPT-002', type: 'Pengguna', targetId: 'USR-006', target: 'Fajar Nugroho', reporter: 'Rani Putri', reason: 'Penjual tidak responsif', detail: 'Sudah menghubungi lewat WhatsApp selama seminggu tetapi tidak dibalas.', status: 'Baru', action: '' },
  { id: 'RPT-003', type: 'Barang', targetId: 'PRD-008', target: 'Monitor 24 inci', reporter: 'Dimas Pratama', reason: 'Harga tidak wajar', detail: 'Harga jauh di atas harga pasaran barang bekas sejenis.', status: 'Ditangani', action: 'Laporan diabaikan (tidak melanggar aturan).' }
];

let activity = [
  { text: 'Produk "Monitor 24 inci" disetujui', time: '1 hari lalu' },
  { text: 'Akun Salsa Nabila diverifikasi', time: '2 hari lalu' },
  { text: 'Akun Cahya Wibowo ditolak', time: '3 hari lalu' },
  { text: 'Laporan RPT-003 ditangani', time: '4 hari lalu' }
];

/* ====== HELPER ====== */
const $ = id => document.getElementById(id);
const rupiah = n => 'Rp' + Number(n).toLocaleString('id-ID');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const findProduct = id => products.find(p => p.id === id);
const findUser = id => users.find(u => u.id === id);
const findReport = id => reports.find(r => r.id === id);
const verifLabel = { pending: ['Menunggu', 'warn'], verified: ['Terverifikasi', 'ok'], rejected: ['Ditolak', 'bad'], suspended: ['Dinonaktifkan', 'bad'] };
const viewTitles = {
  'overview': 'Overview', 'pending-products': 'Pending Products', 'pending-users': 'Pending Users',
  'listed-products': 'Listed Products', 'users': 'User Management', 'categories': 'Category Management', 'reports': 'Reports'
};
let currentView = 'overview';
let toastTimer;

function toast(msg) {
  const t = $('toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 2600);
}
function addActivity(text) { activity.unshift({ text, time: 'Baru saja' }); activity = activity.slice(0, 6); }

/* ====== MODAL ====== */
function openModal({ title, body, actions = [] }) {
  $('modalTitle').textContent = title;
  $('modalBody').innerHTML = body;
  $('modalFoot').innerHTML = '';
  actions.forEach(a => {
    const b = document.createElement('button');
    b.className = 'row-btn' + (a.primary ? ' primary' : '');
    b.textContent = a.label;
    b.addEventListener('click', () => { if (a.onClick) { if (a.onClick() === false) return; } closeModal(); });
    $('modalFoot').appendChild(b);
  });
  $('modal').hidden = false;
  const first = $('modalBody').querySelector('input,textarea,select');
  if (first) first.focus();
}
function closeModal() { $('modal').hidden = true; }
$('modalClose').addEventListener('click', closeModal);
$('modal').addEventListener('click', e => { if (e.target === $('modal')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function confirmBox(title, message, onYes, yesLabel = 'Ya, lanjutkan') {
  openModal({ title, body: `<p>${message}</p>`, actions: [{ label: 'Batal' }, { label: yesLabel, primary: true, onClick: onYes }] });
}
function reasonBox(title, label, onSubmit) {
  openModal({
    title,
    body: `<label class="field">${label}<textarea id="reasonInput" rows="4" placeholder="Tulis alasan..."></textarea><span class="field-error" id="reasonError"></span></label>`,
    actions: [{ label: 'Batal' }, {
      label: 'Kirim', primary: true,
      onClick: () => {
        const v = $('reasonInput').value.trim();
        if (v.length < 5) { $('reasonError').textContent = 'Alasan wajib diisi (minimal 5 karakter).'; return false; }
        onSubmit(v);
      }
    }]
  });
}

/* ====== RENDER ====== */
function renderBadges() {
  $('badgePendingProducts').textContent = products.filter(p => p.status === 'pending').length;
  $('badgePendingUsers').textContent = users.filter(u => u.verif === 'pending').length;
  $('badgeReports').textContent = reports.filter(r => r.status === 'Baru').length;
}

function renderOverview() {
  const pp = products.filter(p => p.status === 'pending');
  const pu = users.filter(u => u.verif === 'pending');
  const stats = [
    ['Produk menunggu moderasi', pp.length], ['Akun menunggu verifikasi', pu.length],
    ['Produk tayang', products.filter(p => p.status === 'listed').length], ['Laporan baru', reports.filter(r => r.status === 'Baru').length]
  ];
  $('statGrid').innerHTML = stats.map(s => `<div class="stat-card"><p>${s[0]}</p><strong>${s[1]}</strong></div>`).join('');
  $('overviewProducts').innerHTML = pp.length ? pp.slice(0, 3).map(p => `<div class="mini-row"><div>${esc(p.name)}<small>${esc(p.seller)} · ${rupiah(p.price)}</small></div><button class="row-btn" data-action="detail-product" data-id="${p.id}">Detail</button></div>`).join('') : '<p class="empty">Tidak ada produk pending.</p>';
  $('overviewUsers').innerHTML = pu.length ? pu.slice(0, 3).map(u => `<div class="mini-row"><div>${esc(u.name)}<small>${esc(u.role)} · ${esc(u.univ)}</small></div><button class="row-btn" data-action="detail-user" data-id="${u.id}">Detail</button></div>`).join('') : '<p class="empty">Tidak ada akun pending.</p>';
  $('activityList').innerHTML = activity.map(a => `<li><span>${esc(a.text)}</span><time>${esc(a.time)}</time></li>`).join('');
}

function renderPendingProducts() {
  const list = products.filter(p => p.status === 'pending');
  $('tbodyPendingProducts').innerHTML = list.map(p => `<tr>
    <td><strong>${esc(p.name)}</strong><span class="cell-sub">${p.id}</span></td><td>${esc(p.category)}</td><td>${rupiah(p.price)}</td><td>${esc(p.seller)}</td><td>${p.date}</td>
    <td class="right"><button class="row-btn" data-action="detail-product" data-id="${p.id}">Detail</button><button class="row-btn primary" data-action="approve-product" data-id="${p.id}">Setujui</button><button class="row-btn danger" data-action="reject-product" data-id="${p.id}">Tolak</button></td></tr>`).join('');
  $('emptyPendingProducts').hidden = list.length > 0;
}

function renderPendingUsers() {
  const list = users.filter(u => u.verif === 'pending');
  $('tbodyPendingUsers').innerHTML = list.map(u => `<tr>
    <td><strong>${esc(u.name)}</strong><span class="cell-sub">${esc(u.email)}</span></td><td>${esc(u.role)}</td><td>${esc(u.nim)}</td><td>${esc(u.univ)}</td><td>${u.date}</td>
    <td class="right"><button class="row-btn" data-action="detail-user" data-id="${u.id}">Lihat dokumen</button><button class="row-btn primary" data-action="approve-user" data-id="${u.id}">Setujui</button><button class="row-btn danger" data-action="reject-user" data-id="${u.id}">Tolak</button></td></tr>`).join('');
  $('emptyPendingUsers').hidden = list.length > 0;
}

function renderListed() {
  const kw = $('listedSearch').value.trim().toLowerCase();
  const list = products.filter(p => p.status === 'listed' && (p.name.toLowerCase().includes(kw) || p.seller.toLowerCase().includes(kw)));
  $('tbodyListed').innerHTML = list.map(p => `<tr>
    <td><strong>${esc(p.name)}</strong><span class="cell-sub">${p.id}</span></td><td>${esc(p.category)}</td><td>${rupiah(p.price)}</td><td>${esc(p.seller)}</td><td><span class="status ok">Listed</span></td>
    <td class="right"><button class="row-btn" data-action="detail-product" data-id="${p.id}">Detail</button><button class="row-btn danger" data-action="delete-product" data-id="${p.id}">Hapus</button></td></tr>`).join('');
  $('emptyListed').hidden = list.length > 0;
}

function renderUsers() {
  const kw = $('userSearch').value.trim().toLowerCase();
  const f = $('userFilter').value;
  const list = users.filter(u => (f === 'Semua' || u.verif === f) &&
    (u.name.toLowerCase().includes(kw) || u.email.toLowerCase().includes(kw) || u.nim.includes(kw)));
  $('tbodyUsers').innerHTML = list.map(u => {
    const [label, cls] = verifLabel[u.verif];
    const toggle = u.verif === 'suspended'
      ? `<button class="row-btn" data-action="activate-user" data-id="${u.id}">Aktifkan</button>`
      : u.verif === 'verified' ? `<button class="row-btn danger" data-action="suspend-user" data-id="${u.id}">Nonaktifkan</button>` : '';
    return `<tr><td><strong>${esc(u.name)}</strong><span class="cell-sub">${esc(u.nim)} · ${esc(u.univ)}</span></td><td>${esc(u.email)}</td><td>${esc(u.role)}</td>
      <td><span class="status ${cls}">${label}</span></td><td class="right"><button class="row-btn" data-action="detail-user" data-id="${u.id}">Detail</button>${toggle}</td></tr>`;
  }).join('');
  $('emptyUsers').hidden = list.length > 0;
}

function renderCategories() {
  $('tbodyCategories').innerHTML = categories.map((c, i) => {
    const n = products.filter(p => p.category === c && p.status === 'listed').length;
    return `<tr><td><strong>${esc(c)}</strong></td><td>${n} produk</td>
      <td class="right"><button class="row-btn" data-action="edit-category" data-index="${i}">Ubah</button><button class="row-btn danger" data-action="delete-category" data-index="${i}">Hapus</button></td></tr>`;
  }).join('');
}

function renderReports() {
  const f = $('reportFilter').value;
  const list = reports.filter(r => f === 'Semua' || r.status === f);
  $('tbodyReports').innerHTML = list.map(r => `<tr>
    <td>${r.id}</td><td>${r.type}</td><td><strong>${esc(r.target)}</strong><span class="cell-sub">${esc(r.reason)}</span></td><td>${esc(r.reporter)}</td>
    <td><span class="status ${r.status === 'Baru' ? 'warn' : 'ok'}">${r.status}</span></td>
    <td class="right"><button class="row-btn" data-action="detail-report" data-id="${r.id}">Detail</button>${r.status === 'Baru' ? `<button class="row-btn primary" data-action="handle-report" data-id="${r.id}">Tangani</button>` : ''}</td></tr>`).join('');
  $('emptyReports').hidden = list.length > 0;
}

function renderAll() {
  renderBadges(); renderOverview(); renderPendingProducts(); renderPendingUsers();
  renderListed(); renderUsers(); renderCategories(); renderReports();
}

/* ====== NAVIGASI ====== */
function showView(name) {
  if (!viewTitles[name]) name = 'overview';
  currentView = name;
  document.querySelectorAll('.view').forEach(v => (v.hidden = v.id !== 'view-' + name));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === name));
  $('viewTitle').textContent = viewTitles[name];
  if (location.hash !== '#' + name) history.replaceState(null, '', '#' + name);
}
$('sidebarNav').addEventListener('click', e => { const b = e.target.closest('[data-view]'); if (b) showView(b.dataset.view); });
document.addEventListener('click', e => { const g = e.target.closest('[data-goto]'); if (g) showView(g.dataset.goto); });
window.addEventListener('hashchange', () => showView(location.hash.slice(1)));

/* ====== DETAIL ====== */
function productDetail(p) {
  const st = { pending: 'Pending', listed: 'Listed', rejected: 'Rejected', deleted: 'Deleted' }[p.status];
  return `<dl class="detail-list"><dt>ID</dt><dd>${p.id}</dd><dt>Nama</dt><dd>${esc(p.name)}</dd><dt>Kategori</dt><dd>${esc(p.category)}</dd><dt>Harga</dt><dd>${rupiah(p.price)}</dd>
  <dt>Kondisi</dt><dd>${esc(p.condition)}</dd><dt>Lokasi</dt><dd>${esc(p.location)}</dd><dt>Penjual</dt><dd>${esc(p.seller)}</dd><dt>Diunggah</dt><dd>${p.date}</dd><dt>Status</dt><dd>${st}</dd>
  <dt>Deskripsi</dt><dd>${esc(p.desc)}</dd>${p.reason ? `<dt>Alasan ditolak</dt><dd>${esc(p.reason)}</dd>` : ''}</dl>`;
}
function userDetail(u) {
  return `<dl class="detail-list"><dt>Nama</dt><dd>${esc(u.name)}</dd><dt>Email</dt><dd>${esc(u.email)}</dd><dt>Status</dt><dd>${esc(u.role)}</dd><dt>NIM</dt><dd>${esc(u.nim)}</dd>
  <dt>Universitas</dt><dd>${esc(u.univ)}</dd><dt>Program studi</dt><dd>${esc(u.prodi)}</dd><dt>Tahun masuk/lulus</dt><dd>${esc(u.year)}</dd><dt>Verifikasi</dt><dd>${verifLabel[u.verif][0]}</dd>
  ${u.reason ? `<dt>Alasan ditolak</dt><dd>${esc(u.reason)}</dd>` : ''}</dl>
  <div class="doc-preview">Dokumen bukti: <strong>${esc(u.docName)}</strong><br>(pratinjau dokumen simulasi)</div>`;
}

/* ====== AKSI ====== */
const actions = {
  'detail-product'(id) {
    const p = findProduct(id); const acts = [{ label: 'Tutup' }];
    if (p.status === 'pending') {
      acts.push({ label: 'Tolak', onClick: () => { setTimeout(() => actions['reject-product'](id), 0); } });
      acts.push({ label: 'Setujui', primary: true, onClick: () => actions['approve-product'](id, true) });
    }
    openModal({ title: 'Detail produk', body: productDetail(p), actions: acts });
  },
  'approve-product'(id, direct) {
    const p = findProduct(id); p.status = 'listed'; p.reason = '';
    addActivity(`Produk "${p.name}" disetujui`); renderAll(); toast('Produk disetujui dan ditayangkan (simulasi).');
    if (direct) return true;
  },
  'reject-product'(id) {
    const p = findProduct(id);
    reasonBox('Tolak produk', `Alasan penolakan untuk "${esc(p.name)}"`, reason => {
      p.status = 'rejected'; p.reason = reason; addActivity(`Produk "${p.name}" ditolak`); renderAll(); toast('Produk ditolak. Alasan dikirim ke penjual (simulasi).');
    });
  },
  'delete-product'(id) {
    const p = findProduct(id);
    confirmBox('Hapus produk', `Yakin ingin menghapus "${esc(p.name)}" dari daftar tayang?`, () => {
      p.status = 'deleted'; addActivity(`Produk "${p.name}" dihapus`); renderAll(); toast('Produk dihapus (simulasi).');
    }, 'Hapus');
  },
  'detail-user'(id) {
    const u = findUser(id); const acts = [{ label: 'Tutup' }];
    if (u.verif === 'pending') {
      acts.push({ label: 'Tolak', onClick: () => { setTimeout(() => actions['reject-user'](id), 0); } });
      acts.push({ label: 'Setujui', primary: true, onClick: () => actions['approve-user'](id, true) });
    }
    openModal({ title: 'Detail pengguna', body: userDetail(u), actions: acts });
  },
  'approve-user'(id, direct) {
    const u = findUser(id); u.verif = 'verified'; u.reason = '';
    addActivity(`Akun ${u.name} diverifikasi`); renderAll(); toast('Akun disetujui (simulasi).');
    if (direct) return true;
  },
  'reject-user'(id) {
    const u = findUser(id);
    reasonBox('Tolak akun', `Alasan penolakan untuk ${esc(u.name)}`, reason => {
      u.verif = 'rejected'; u.reason = reason; addActivity(`Akun ${u.name} ditolak`); renderAll(); toast('Akun ditolak. Alasan dikirim ke pendaftar (simulasi).');
    });
  },
  'suspend-user'(id) {
    const u = findUser(id);
    confirmBox('Nonaktifkan akun', `Nonaktifkan akun ${esc(u.name)}? (simulasi, tidak mengubah akun asli)`, () => {
      u.verif = 'suspended'; addActivity(`Akun ${u.name} dinonaktifkan`); renderAll(); toast('Akun dinonaktifkan (simulasi).');
    }, 'Nonaktifkan');
  },
  'activate-user'(id) { const u = findUser(id); u.verif = 'verified'; addActivity(`Akun ${u.name} diaktifkan kembali`); renderAll(); toast('Akun diaktifkan kembali (simulasi).'); },

  'add-category'() { categoryForm('Tambah kategori', '', name => {
    categories.push(name); addActivity(`Kategori "${name}" ditambahkan`); renderAll(); toast('Kategori ditambahkan.'); }); },
  'edit-category'(i) {
    const old = categories[i];
    categoryForm('Ubah kategori', old, name => {
      categories[i] = name; products.forEach(p => { if (p.category === old) p.category = name; });
      addActivity(`Kategori "${old}" diubah menjadi "${name}"`); renderAll(); toast('Kategori diubah.'); }, i);
  },
  'delete-category'(i) {
    const name = categories[i]; const n = products.filter(p => p.category === name && p.status === 'listed').length;
    confirmBox('Hapus kategori', `Yakin menghapus kategori "${esc(name)}"?${n ? ` Ada ${n} produk tayang di kategori ini.` : ''}`, () => {
      categories.splice(i, 1); addActivity(`Kategori "${name}" dihapus`); renderAll(); toast('Kategori dihapus.');
    }, 'Hapus');
  },

  'detail-report'(id) {
    const r = findReport(id); const acts = [{ label: 'Tutup' }];
    if (r.status === 'Baru') acts.push({ label: 'Tangani', primary: true, onClick: () => { setTimeout(() => actions['handle-report'](id), 0); } });
    openModal({ title: 'Detail laporan', body: `<dl class="detail-list"><dt>ID</dt><dd>${r.id}</dd><dt>Jenis</dt><dd>${r.type}</dd><dt>Target</dt><dd>${esc(r.target)} (${r.targetId})</dd><dt>Pelapor</dt><dd>${esc(r.reporter)}</dd><dt>Alasan</dt><dd>${esc(r.reason)}</dd><dt>Keterangan</dt><dd>${esc(r.detail)}</dd><dt>Status</dt><dd>${r.status}</dd>${r.action ? `<dt>Tindakan</dt><dd>${esc(r.action)}</dd>` : ''}</dl>`, actions: acts });
  },
  'handle-report'(id) {
    const r = findReport(id);
    const opts = r.type === 'Barang'
      ? ['Abaikan laporan', 'Hapus barang', 'Peringatkan penjual'] : ['Abaikan laporan', 'Nonaktifkan pengguna', 'Peringatkan pengguna'];
    openModal({
      title: 'Tangani laporan',
      body: `<p>Laporan ${r.id}: <strong>${esc(r.target)}</strong> (${esc(r.reason)})</p><label class="field">Tindakan<select id="reportAction">${opts.map(o => `<option>${o}</option>`).join('')}</select></label>`,
      actions: [{ label: 'Batal' }, { label: 'Simpan tindakan', primary: true, onClick: () => {
        const act = $('reportAction').value;
        r.status = 'Ditangani'; r.action = act + ' (simulasi).';
        if (act === 'Hapus barang') { const p = findProduct(r.targetId); if (p) p.status = 'deleted'; }
        if (act === 'Nonaktifkan pengguna') { const u = findUser(r.targetId); if (u) u.verif = 'suspended'; }
        addActivity(`Laporan ${r.id} ditangani: ${act}`); renderAll(); toast('Laporan ditangani (simulasi).');
      } }]
    });
  }
};

function categoryForm(title, value, onSave, editIndex = -1) {
  openModal({
    title,
    body: `<label class="field">Nama kategori<input id="catInput" type="text" value="${esc(value)}" maxlength="30" placeholder="Contoh: Alat Musik"><span class="field-error" id="catError"></span></label>`,
    actions: [{ label: 'Batal' }, { label: 'Simpan', primary: true, onClick: () => {
      const v = $('catInput').value.trim();
      if (!v) { $('catError').textContent = 'Nama kategori tidak boleh kosong.'; return false; }
      if (categories.some((c, i) => i !== editIndex && c.toLowerCase() === v.toLowerCase())) { $('catError').textContent = 'Kategori sudah ada.'; return false; }
      onSave(v);
    } }]
  });
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const fn = actions[el.dataset.action];
  if (fn) fn(el.dataset.id !== undefined ? el.dataset.id : Number(el.dataset.index));
});
['listedSearch', 'userSearch'].forEach(id => $(id).addEventListener('input', () => { renderListed(); renderUsers(); }));
$('userFilter').addEventListener('change', renderUsers);
$('reportFilter').addEventListener('change', renderReports);

/* ====== INIT ====== */
renderAll();
showView(location.hash.slice(1) || 'overview');
