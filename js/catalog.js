document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productsGrid');
  const catBox = document.getElementById('catFilters');
  const search = document.getElementById('search');
  const params = new URLSearchParams(location.search);
  const preCat = params.get('cat');

  // фильтры-категории
  CATEGORIES.forEach(c => {
    const label = document.createElement('label');
    label.className = 'check';
    const checked = (!preCat || preCat === c.id) ? 'checked' : '';
    label.innerHTML = `<input type="checkbox" value="${c.id}" ${checked}> ${c.name}`;
    catBox.appendChild(label);
  });
  search.value = params.get('q') || '';

  function render(){
    const active = [...catBox.querySelectorAll('input:checked')].map(i => i.value);
    const q = search.value.trim().toLowerCase();
    const list = PRODUCTS.filter(p =>
      (active.length === 0 || active.includes(p.cat)) &&
      (!q || (p.name + ' ' + p.spec).toLowerCase().includes(q))
    );
    if (!list.length){
      grid.innerHTML = '<div class="empty">Ничего не найдено. Попробуйте изменить фильтры или поисковый запрос.</div>';
      return;
    }
    grid.innerHTML = list.map(p => `
      <div class="product-card">
        <a class="p-img" href="product.html?id=${p.id}">
          <img class="${p.photo ? 'photo' : ''}" src="${p.img}" alt="${p.name}">
        </a>
        <div class="p-body">
          <span class="p-cat">${CATEGORIES.find(c => c.id === p.cat).name}</span>
          <a class="p-name" href="product.html?id=${p.id}">${p.name}</a>
          <p class="p-spec">${p.spec}</p>
          <div class="p-foot">
            <span class="p-price">${priceFmt(p.price)} <small>/ ${p.unit}</small></span>
            <button class="btn btn-blue" data-add="${p.id}" style="padding:10px 16px">В корзину</button>
          </div>
        </div>
      </div>`).join('');
  }

  catBox.addEventListener('change', render);
  search.addEventListener('input', render);
  document.getElementById('resetFilters').addEventListener('click', () => {
    catBox.querySelectorAll('input').forEach(i => i.checked = true);
    search.value = '';
    render();
  });
  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (btn){
      Cart.add(+btn.dataset.add, 1);
      showToast('Товар добавлен в корзину');
    }
  });
  render();
});
