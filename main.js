const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categoryButtons = document.querySelectorAll('.category-chip');
const productCards = [...document.querySelectorAll('.product-card')];
const resultCount = document.getElementById('resultCount');
const emptyMessage = document.getElementById('emptyMessage');
let activeCategory = 'Semua';

function filterProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visible = 0;
  productCards.forEach(card => {
    const matchesCategory = activeCategory === 'Semua' || card.dataset.category === activeCategory;
    const matchesKeyword = card.dataset.name.toLowerCase().includes(keyword);
    const show = matchesCategory && matchesKeyword;
    card.hidden = !show;
    if (show) visible++;
  });
  resultCount.textContent = `${visible} barang`;
  emptyMessage.hidden = visible !== 0;
}

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(item => item.classList.remove('selected'));
    button.classList.add('selected');
    activeCategory = button.dataset.category;
    filterProducts();
  });
});
searchButton.addEventListener('click', filterProducts);
searchInput.addEventListener('input', filterProducts);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') filterProducts();
});
