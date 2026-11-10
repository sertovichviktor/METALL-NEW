// ==========================================================================
// 1. СИСТЕМА ПЕРЕКЛЮЧЕНИЯ ТЕМ (СИНИЙ НЕОН / МАТОВЫЙ ТИТАН)
// ==========================================================================
(function initTheme() {
  const savedTheme = localStorage.getItem('metall_east_theme') || 'blue';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

window.setSiteTheme = function(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('metall_east_theme', theme);
  const btns = document.querySelectorAll('.theme-toggle-btn');
  btns.forEach(btn => {
    if (btn.dataset.theme === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

// ==========================================================================
// 2. ВЕКТОРНЫЙ ЛОГОТИП METALL EAST (Звезда-шестерня с вашей визитки)
// ==========================================================================
const LOGO_SVG = `
<svg class="logo-mark" viewBox="0 0 100 100" fill="none" style="width:38px;height:38px;flex-shrink:0;">
  <defs>
    <linearGradient id="starMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#cbd5e1"/>
      <stop offset="70%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="starRingGrad" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#64748b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>
  <!-- 8-лучевая звезда-шестерня -->
  <path d="M50 4 L59 28 L82 18 L72 41 L96 50 L72 59 L82 82 L59 72 L50 96 L41 72 L18 82 L28 59 L4 50 L28 41 L18 18 L41 28 Z" 
        fill="url(#starMetalGrad)" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"/>
  <!-- Внешнее кольцо ступицы -->
  <circle cx="50" cy="50" r="23" fill="none" stroke="url(#starRingGrad)" stroke-width="4.5"/>
  <!-- Внутреннее отверстие трубы/ступицы -->
  <circle cx="50" cy="50" r="14" fill="#0c0d12" stroke="url(#starMetalGrad)" stroke-width="2"/>
</svg>`;

// ==========================================================================
// 3. ШАПКА САЙТА (HEADER)
// ==========================================================================
const currentSavedTheme = localStorage.getItem('metall_east_theme') || 'blue';

const HEADER_HTML = `
<header>
  <div class="container header-inner">
    <a href="index.html" class="logo">
      ${LOGO_SVG}
      <div class="logo-text">
        <b style="font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:0.12em;line-height:1;">METALL EAST</b>
        <span>Нержавеющий металл · ООО «Металл-Ист»</span>
      </div>
    </a>
    <nav>
      <a href="catalog.html">Каталог</a>
      <a href="index.html#features">Услуги</a>
      <a href="about.html">О компании</a>
      <a href="about.html#production">Производство</a>
      <a href="about.html#delivery">Доставка</a>
      <a href="contacts.html">Контакты</a>
    </nav>
    <div class="header-contacts">
      <!-- Переключатель тем: Синий / Титан -->
      <div class="theme-switcher-box" style="display:inline-flex;align-items:center;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:2px;gap:2px;">
        <button type="button" class="theme-toggle-btn ${currentSavedTheme === 'blue' ? 'active' : ''}" data-theme="blue" onclick="setSiteTheme('blue')" title="Синий неон" style="border:none;background:transparent;cursor:pointer;padding:4px 8px;border-radius:7px;font-size:11px;font-weight:600;color:#94a3b8;transition:all .2s;">⚡ Синий</button>
        <button type="button" class="theme-toggle-btn ${currentSavedTheme === 'titanium' ? 'active' : ''}" data-theme="titanium" onclick="setSiteTheme('titanium')" title="Матовый титан (визитка)" style="border:none;background:transparent;cursor:pointer;padding:4px 8px;border-radius:7px;font-size:11px;font-weight:600;color:#94a3b8;transition:all .2s;">⚙️ Титан</button>
      </div>

      <div class="phone">
        <a href="tel:+74993993501">+7 (499) 399-35-01</a>
        <span>Пн–Пт 9:00–18:00</span>
      </div>

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
  <div style="padding:12px 16px;display:flex;gap:8px;border-bottom:1px solid rgba(255,255,255,0.08);">
    <button type="button" class="theme-toggle-btn ${currentSavedTheme === 'blue' ? 'active' : ''}" data-theme="blue" onclick="setSiteTheme('blue')" style="flex:1;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.05);color:#fff;font-size:12px;">⚡ Синий</button>
    <button type="button" class="theme-toggle-btn ${currentSavedTheme === 'titanium' ? 'active' : ''}" data-theme="titanium" onclick="setSiteTheme('titanium')" style="flex:1;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.05);color:#fff;font-size:12px;">⚙️ Титан</button>
  </div>
  <a href="catalog.html">Каталог</a>
  <a href="index.html#features">Услуги</a>
  <a href="about.html">О компании</a>
  <a href="about.html#delivery">Доставка</a>
  <a href="contacts.html">Контакты</a>
  <a href="cart.html">Корзина</a>
  <a href="tel:+74993993501">+7 (499) 399-35-01</a>
  <a href="tel:+79661528800" style="color:#94a3b8;font-size:13px;">+7 (966) 152-88-00</a>
</div>`;

// ==========================================================================
// 4. ПОДВАЛ САЙТА (FOOTER С РЕКВИЗИТАМИ ИЗ ВИЗИТКИ)
// ==========================================================================
const FOOTER_HTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="logo">
          ${LOGO_SVG}
          <div class="logo-text">
            <b style="font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:0.12em;line-height:1;">METALL EAST</b>
            <span>Нержавеющий металл. Инженерные решения.</span>
          </div>
        </a>
        <p>Комплексные поставки нержавеющего металлопроката, трубопроводной арматуры и комплектующих стандарта DIN, SMS, ГОСТ.</p>
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
        <a href="about.html">О компании</a>
        <a href="about.html#production">Производство</a>
        <a href="about.html#delivery">Доставка</a>
        <a href="contacts.html">Контакты и реквизиты</a>
      </div>
      <div>
        <h4>Контакты</h4>
        <a href="tel:+74993993501" style="font-weight:700;">+7 (499) 399-35-01</a>
        <a href="tel:+79661528800">+7 (966) 152-88-00</a>
        <a href="mailto:ag@metall-east.ru" style="color:#38bdf8;">ag@metall-east.ru</a>
        <div class="requisites" style="margin-top:10px;line-height:1.5;font-size:12px;color:#94a3b8;">
          <b style="color:#fff;">ООО «МЕТАЛЛ-ИСТ»</b><br>
          ИНН 7704429127 · КПП 771501001 · ОГРН 1177746634515<br>
          127282, г. Москва, Чермянский пр-д, д. 7, помещ. 1/2<br>
          Руководитель: Попов Андрей Геннадьевич
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 ООО «МЕТАЛЛ-ИСТ» (METALL EAST). Все права защищены.</span>
      <span>Политика конфиденциальности · Согласие на обработку данных</span>
    </div>
  </div>
</footer>`;

// ==========================================================================
// 5. МОДАЛЬНОЕ ОКНО ЗАЯВКИ
// ==========================================================================
const MODAL_HTML = `
<div class="modal" id="modal">
  <div class="modal-backdrop" data-close></div>
  <div class="modal-box">
    <button class="modal-close" data-close>×</button>
    <form>
      <h3>Запросить счёт и КП</h3>
      <p>ООО «Металл-Ист» · Ответим в течение 15 минут в рабочее время</p>
      <div class="field"><input type="text" name="name" placeholder="Ваше имя / Организация" required></div>
      <div class="field"><input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required></div>
      <div class="field"><input type="email" name="email" placeholder="Email для счёта"></div>
      <div class="field"><textarea name="msg" rows="3" placeholder="Марка стали (AISI 304/316), диаметр Ду, объём заказа"></textarea></div>
      <button type="submit" class="btn btn-blue" style="width:100%;justify-content:center">Сформировать заявку</button>
      <p class="form-note">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
    </form>
    <div class="form-success">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" stroke="#2f7bff" stroke-width="3"/><path d="M15 27l8 8 14-16" stroke="#2f7bff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <b>Заявка принята в отдел продаж!</b>
      <p>Менеджер ООО «Металл-Ист» свяжется с вами и пришлет спецификацию.</p>
    </div>
  </div>
</div>`;

// ==========================================================================
// 6. ВСТАВКА В СТРАНИЦУ
// ==========================================================================
const headerEl = document.getElementById('site-header');
const footerEl = document.getElementById('site-footer');
if (headerEl) headerEl.innerHTML = HEADER_HTML;
if (footerEl) footerEl.innerHTML = FOOTER_HTML + MODAL_HTML;
