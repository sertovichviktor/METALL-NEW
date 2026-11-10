// Общая шапка и футер для всех страниц
const LOGO_SVG = `<svg class="logo-mark" viewBox="0 0 48 48" fill="none">
  <path d="M6 40 L16 10 L24 28 L32 10 L42 40" stroke="#2f7bff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 40 L20 24 L27 40" stroke="#8fb8ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
</svg>`;

const HEADER_HTML = `
<header>
  <div class="container header-inner">
    <a href="index.html" class="logo">${LOGO_SVG}
      <div class="logo-text"><b>МЕТАЛЛ-ИСТ</b><span>Нержавеющий металл. Инженерные решения.</span></div>
    </a>
    <nav>
      <a href="catalog.html">Каталог</a>
      <a href="index.html#features">Услуги</a>
      <a href="about.html">О компании</a>
      <a href="about.html">Производство</a>
      <a href="about.html#delivery">Доставка</a>
      <a href="contacts.html">Контакты</a>
    </nav>
    <div class="header-contacts">
      <div class="phone"><a href="tel:+74951234567">+7 (495) 123-45-67</a><span>Пн–Пт 9:00–18:00</span></div>
      <button class="btn btn-blue" data-modal>Оставить заявку →</button>
      <a href="cart.html" class="cart-link">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.5" cy="20.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="20.5" r="1.5" fill="currentColor"/></svg>
        Корзина<span class="cart-count"></span>
      </a>
    </div>
    <button class="burger" aria-label="Меню"><span></span><span></span><span></span></button>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  <a href="catalog.html">Каталог</a><a href="index.html#features">Услуги</a><a href="about.html">О компании</a>
  <a href="about.html#delivery">Доставка</a><a href="contacts.html">Контакты</a>
  <a href="cart.html">Корзина</a><a href="tel:+74951234567">+7 (495) 123-45-67</a>
</div>`;

const FOOTER_HTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="logo">${LOGO_SVG}
          <div class="logo-text"><b>МЕТАЛЛ-ИСТ</b><span>Нержавеющий металл. Инженерные решения.</span></div>
        </a>
        <p>Оптовые поставки нержавеющего металлопроката, трубопроводной арматуры и комплектующих.</p>
      </div>
      <div>
        <h4>Каталог</h4>
        <a href="catalog.html?cat=truby">Трубы нержавеющие</a>
        <a href="catalog.html?cat=listy">Листы нержавеющие</a>
        <a href="catalog.html?cat=fitingi">Фитинги и соединения</a>
        <a href="catalog.html?cat=krany">Краны и арматура</a>
        <a href="catalog.html?cat=flantsy">Фланцы и детали</a>
      </div>
      <div>
        <h4>Компания</h4>
        <a href="about.html">О компании</a><a href="about.html#production">Производство</a>
        <a href="about.html#delivery">Доставка</a><a href="contacts.html">Контакты</a>
      </div>
      <div>
        <h4>Контакты</h4>
        <a href="tel:+74993993501">+7 (499) 399-35-01</a>
        <a href="mailto:info@metall-east.ru">info@metall-ist.ru</a>
        <div class="requisites">
          ООО «МЕТАЛЛ-ИСТ»<br>
          ИНН 7704429127 · ОГРН 1177746634515<br>
          г. Москва, Чермянский пр-д, д. 7
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 ООО «МЕТАЛЛ-ИСТ». Все права защищены.</span>
      <span>Политика конфиденциальности · Согласие на обработку данных</span>
    </div>
  </div>
</footer>`;

const MODAL_HTML = `
<div class="modal" id="modal">
  <div class="modal-backdrop" data-close></div>
  <div class="modal-box">
    <button class="modal-close" data-close>×</button>
    <form>
      <h3>Оставить заявку</h3>
      <p>Перезвоним в течение 15 минут в рабочее время</p>
      <div class="field"><input type="text" name="name" placeholder="Ваше имя" required></div>
      <div class="field"><input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required></div>
      <div class="field"><textarea name="msg" rows="3" placeholder="Что вас интересует? (марка стали, размеры, объём)"></textarea></div>
      <button type="submit" class="btn btn-blue" style="width:100%;justify-content:center">Отправить заявку</button>
      <p class="form-note">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
    </form>
    <div class="form-success">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" stroke="#2f7bff" stroke-width="3"/><path d="M15 27l8 8 14-16" stroke="#2f7bff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <b>Заявка отправлена!</b>
      <p>Менеджер свяжется с вами в ближайшее время.</p>
    </div>
  </div>
</div>`;

const headerEl = document.getElementById('site-header');
const footerEl = document.getElementById('site-footer');
if (headerEl) headerEl.innerHTML = HEADER_HTML;
if (footerEl) footerEl.innerHTML = FOOTER_HTML + MODAL_HTML;
