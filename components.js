/* Second.id - Komponen bersama (Navbar & Footer)
   Pakai: <div data-component="navbar" data-active="my-items"></div>
          <div data-component="footer"></div>
          <script src="components.js"></script> */
(function () {
  const links = [
    { key: 'home', label: 'Beranda', href: 'index.html' },
    { key: 'my-items', label: 'Barang Saya', href: 'my-items.html' }
  ];
  const navbar = active => `
  <header class="site-header">
    <a class="brand" href="index.html">Second<span>.id</span></a>
    <nav class="main-nav" aria-label="Navigasi utama">
      ${links.map(l => `<a href="${l.href}"${l.key === active ? ' class="active" aria-current="page"' : ''}>${l.label}</a>`).join('')}
    </nav>
    <div class="header-actions">
      <a class="text-link" href="login.html">Masuk</a>
      <a class="button button-dark button-small" href="login.html">Mulai Jual</a>
    </div>
  </header>`;
  const footer = () => `
  <footer class="site-footer"><a class="brand" href="index.html">Second<span>.id</span></a><p>Student-to-Student Secondhand Marketplace</p><small>© 2026 Second.id · Project prototype</small></footer>`;
  document.querySelectorAll('[data-component]').forEach(el => {
    const t = el.dataset.component;
    if (t === 'navbar') el.outerHTML = navbar(el.dataset.active);
    else if (t === 'footer') el.outerHTML = footer();
  });
})();
