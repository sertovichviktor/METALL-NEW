document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('cartRoot');

  function render(){
    const cart = Cart.get();
    const entries = Object.entries(cart);
    if (!entries.length){
      root.innerHTML = `<div class="cart-empty">
        <h2>Корзина пуста</h2>
        <p>Перейдите в каталог, чтобы добавить товары.</p>
        <a href="catalog.html" class="btn btn-blue" style="margin-top:24px">Перейти в каталог →</a>
      </div>`;
      return;
    }
    let rows = '', positions = 0;
    entries.forEach(([id, q]) => {
      const p = PRODUCTS.find(x => x.id == id);
      if (!p) return;
      positions++;
      rows += `<div class="cart-item" data-id="${p.id}">
        <a class="ci-img" href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a>
        <div>
          <a class="ci-name" href="product.html?id=${p.id}">${p.name}</a>
          <p class="ci-spec">${p.spec}</p>
          <p class="ci-price">${priceFmt(p.price)} / ${p.unit}</p>
          <button class="ci-remove" data-remove>Удалить</button>
        </div>
        <div class="ci-controls">
          <div class="qty">
            <button type="button" data-q="-1">−</button>
            <input value="${q}" inputmode="numeric">
            <button type="button" data-q="1">+</button>
          </div>
          <b style="white-space:nowrap">${priceFmt(p.price * q)}</b>
        </div>
      </div>`;
    });

    root.innerHTML = `<div class="cart-layout">
      <div class="cart-items">${rows}</div>
      <div class="cart-summary">
        <h3>Итого</h3>
        <div class="sum-row"><span>Позиций</span><span>${positions}</span></div>
        <div class="sum-row"><span>Товаров</span><span>${Cart.count()} шт</span></div>
        <div class="sum-row total"><span>Итого</span><span>${priceFmt(Cart.total())}</span></div>
        <form id="checkoutForm" style="margin-top:18px">
          <div class="field"><input type="text" name="name" placeholder="Ваше имя / компания" required></div>
          <div class="field"><input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required></div>
          <button type="submit" class="btn btn-blue" style="width:100%;justify-content:center">Оформить заказ</button>
          <p class="form-note">Это демо-заказ: заявка не отправляется на сервер. Подключите Formspree или Telegram-бота для реальной отправки (см. README).</p>
        </form>
        <div class="form-success" id="orderSuccess">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" stroke="#2f7bff" stroke-width="3"/><path d="M15 27l8 8 14-16" stroke="#2f7bff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <b>Заказ оформлен!</b>
          <p>Менеджер свяжется с вами для подтверждения.</p>
          <button class="btn btn-ghost" id="clearAfterOrder" style="margin-top:18px">Вернуться в каталог</button>
        </div>
      </div>
    </div>`;

    root.querySelectorAll('.cart-item').forEach(item => {
      const id = +item.dataset.id;
      const input = item.querySelector('input');
      item.querySelectorAll('[data-q]').forEach(b => b.addEventListener('click', () => {
        const v = Math.max(0, (parseInt(input.value) || 0) + (+b.dataset.q));
        Cart.setQty(id, v); render();
      }));
      input.addEventListener('change', () => {
        Cart.setQty(id, Math.max(0, parseInt(input.value) || 0)); render();
      });
      item.querySelector('[data-remove]').addEventListener('click', () => { Cart.remove(id); render(); });
    });

    root.querySelector('#checkoutForm').addEventListener('submit', e => {
      e.preventDefault();
      root.querySelector('#checkoutForm').style.display = 'none';
      root.querySelector('#orderSuccess').style.display = 'block';
      Cart.clear();
    });
    const backBtn = root.querySelector('#clearAfterOrder');
    if (backBtn) backBtn.addEventListener('click', () => location.href = 'catalog.html');
  }
  render();
});
