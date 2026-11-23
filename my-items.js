const STATUS = {
  pending: 'Pending', listed: 'Listed', rejected: 'Rejected', sold: 'Sold', deleted: 'Deleted'
};
const STATUS_NOTE = {
  pending: 'Menunggu moderasi admin.',
  listed: 'Barang sudah tampil di katalog.',
  sold: 'Barang sudah terjual.',
  deleted: 'Barang telah dihapus.'
};

let items = [
  { id: 1, name: 'Laptop Lenovo ThinkPad', price: 3500000, category: 'Elektronik', status: 'listed', note: '' },
  { id: 2, name: 'Paket Buku Pemrograman', price: 85000, category: 'Buku', status: 'pending', note: '' },
  { id: 3, name: 'Scientific Calculator', price: 95000, category: 'Perlengkapan Kuliah', status: 'rejected', note: 'Foto barang buram dan tidak menampilkan kondisi asli. Unggah foto yang lebih jelas.' },
  { id: 4, name: 'Headphone Wireless', price: 175000, category: 'Elektronik', status: 'sold', note: '' },
  { id: 5, name: 'Tas Ransel Kuliah', price: 120000, category: 'Fashion', status: 'listed', note: '' },
  { id: 6, name: 'Desk Lamp Minimalis', price: 60000, category: 'Lainnya', status: 'deleted', note: '' }
];
let filter = 'all', editingId = null, confirmAction = null;

const $ = id => document.getElementById(id);
const rupiah = n => 'Rp' + Number(n).toLocaleString('id-ID');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function toast(msg) {
  const t = $('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}

function actionsFor(it) {
  const b = [];
  if (['pending', 'listed', 'rejected'].includes(it.status))
    b.push(`<button class="button button-outline button-small" data-act="edit" data-id="${it.id}">${it.status === 'rejected' ? 'Edit & ajukan ulang' : 'Edit'}</button>`);
  if (it.status === 'listed')
    b.push(`<button class="button button-dark button-small" data-act="sold" data-id="${it.id}">Tandai terjual</button>`);
  if (it.status === 'rejected')
    b.push(`<button class="button button-outline button-small" data-act="reason" data-id="${it.id}">Lihat alasan</button>`);
  if (['pending', 'listed', 'rejected'].includes(it.status))
    b.push(`<button class="button button-danger button-small" data-act="delete" data-id="${it.id}">Hapus</button>`);
  return b.join('');
}

function render() {
  // Ringkasan
  const counts = { all: items.length };
  Object.keys(STATUS).forEach(s => counts[s] = items.filter(i => i.status === s).length);
  $('summary').innerHTML = [['all', 'Total barang'], ...Object.entries(STATUS)]
    .map(([k, l]) => `<button class="sum-card${filter === k ? ' selected' : ''}" data-status="${k}"><strong>${counts[k]}</strong><span>${l}</span></button>`).join('');
  document.querySelectorAll('#filters .category-chip').forEach(c => c.classList.toggle('selected', c.dataset.status === filter));

  const shown = items.filter(i => filter === 'all' || i.status === filter);
  $('countText').textContent = `${shown.length} barang`;
  $('emptyMsg').hidden = shown.length > 0;
  $('itemList').innerHTML = shown.map(it => {
    const note = it.status === 'rejected'
      ? `<div class="admin-note note-rejected" id="note-${it.id}" hidden><b>Alasan penolakan:</b> ${esc(it.note)}</div>`
      : `<div class="admin-note"><b>Catatan admin:</b> ${esc(it.note || STATUS_NOTE[it.status])}</div>`;
    return `<article class="item-row${it.status === 'deleted' ? ' is-deleted' : ''}">
      <div class="item-photo">FOTO<br>${esc(it.category.toUpperCase())}</div>
      <div class="item-main">
        <span class="badge badge-${it.status}">${STATUS[it.status]}</span>
        <h3>${esc(it.name)}</h3>
        <p class="item-meta">${esc(it.category)}</p>
        <p class="item-price">${rupiah(it.price)}</p>
      </div>
      <div class="item-actions">${actionsFor(it)}</div>
      ${note}
    </article>`;
  }).join('');
}

function openConfirm(title, text, fn) {
  $('cTitle').textContent = title; $('cText').textContent = text;
  confirmAction = fn; $('confirmDialog').showModal();
}

function openEdit(it) {
  editingId = it.id;
  $('fName').value = it.name; $('fPrice').value = it.price; $('fCategory').value = it.category;
  const re = it.status === 'rejected';
  $('saveBtn').textContent = re ? 'Simpan & ajukan ulang' : 'Simpan';
  $('editHint').textContent = re
    ? 'Perbaiki sesuai catatan admin. Barang akan diajukan ulang untuk moderasi.'
    : 'Perubahan akan disimpan.';
  $('editDialog').showModal();
}

// Event: filter (ringkasan & chip)
document.addEventListener('click', e => {
  const f = e.target.closest('[data-status]');
  if (f) { filter = f.dataset.status; render(); return; }
  if (e.target.closest('[data-close]')) { e.target.closest('dialog').close(); return; }

  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const it = items.find(i => i.id === +btn.dataset.id);
  switch (btn.dataset.act) {
    case 'edit': openEdit(it); break;
    case 'reason': { const n = $('note-' + it.id); n.hidden = !n.hidden; btn.textContent = n.hidden ? 'Lihat alasan' : 'Sembunyikan alasan'; break; }
    case 'sold':
      openConfirm('Tandai sebagai terjual?', `"${it.name}" tidak akan tampil lagi di katalog.`,
        () => { it.status = 'sold'; render(); toast('Barang ditandai terjual.'); });
      break;
    case 'delete':
      openConfirm('Hapus barang?', `"${it.name}" akan dihapus dari katalog.`,
        () => { it.status = 'deleted'; render(); toast('Barang dihapus.'); });
      break;
  }
});

$('cOk').addEventListener('click', () => { $('confirmDialog').close(); if (confirmAction) confirmAction(); confirmAction = null; });

// Simpan edit (rejected -> simulasi pengajuan ulang jadi pending)
$('editForm').addEventListener('submit', () => {
  const it = items.find(i => i.id === editingId);
  it.name = $('fName').value.trim(); it.price = +$('fPrice').value; it.category = $('fCategory').value;
  if (it.status === 'rejected') { it.status = 'pending'; it.note = ''; toast('Barang diajukan ulang, menunggu moderasi.'); }
  else toast('Perubahan disimpan.');
  render();
});

render();
