// Общая логика: корзина, меню, модалка
const Cart = {
  key: 'mi_cart',
  get(){ try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch(e){ return {}; } },
  set(cart){ localStorage.setItem(this.key, JSON.stringify(cart)); updateCartBadge(); },
  add(id, qty = 1){ const c = this.get(); c[id] = (c[id] || 0) + qty; this.set(c); },
  setQty(id, qty){ const c = this.get(); if (qty <= 0) delete c[id]; else c[id] = qty; this.set(c); },
  remove(id){ const c = this.get(); delete c[id]; this.set(c); },
  clear(){ this.set({}); },
  count(){ return Object.values(this.get()).reduce((a, b) => a + b, 0); },
  total(){ const c = this.get(); return Object.entries(c).reduce((sum, [id, q]) => { const p = PRODUCTS.find(x => x.id == id); return p ? sum + p.price * q : sum; }, 0); }
};

function updateCartBadge(){
  document.querySelectorAll('.cart-count').forEach(el => {
    const n = Cart.count();
    el.textContent = n > 0 ? n : '';
  });
}

function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2200);
}

function priceFmt(n){ return n.toLocaleString('ru-RU') + ' ₽'; }

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger) burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  if (mobileMenu) mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // Модалка заявки
  const modal = document.getElementById('modal');
  if (modal){
    document.querySelectorAll('[data-modal]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); modal.classList.add('open'); }));
    document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => modal.classList.remove('open')));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });
    const form = modal.querySelector('form');
    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      modal.querySelector('.form-success').style.display = 'block';
    });
  }
});
