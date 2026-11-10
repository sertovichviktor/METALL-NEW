# МЕТАЛЛ-ИСТ — сайт

Многостраничный сайт компании ООО «МЕТАЛЛ-ИСТ» (ИНН 7704429127).
Чистый HTML/CSS/JS, без сборки и зависимостей — работает на GitHub Pages.

## Структура

```
index.html      — главная (хиро, категории, преимущества, о компании)
catalog.html    — каталог с фильтрами по категориям и поиском
product.html    — карточка товара (?id=1)
cart.html       — корзина и оформление заказа
about.html      — о компании, производство, доставка
contacts.html   — контакты, реквизиты, форма
css/style.css   — вся стилизация
js/data.js      — товары и категории (РЕДАКТИРУЙТЕ ТОВАРЫ ЗДЕСЬ)
js/layout.js    — общая шапка/футер/модалка
js/main.js      — корзина (localStorage), меню, формы
js/catalog.js   — логика каталога
js/product.js   — логика карточки товара
js/cart.js      — логика корзины
img/            — изображения
```

## Деплой на GitHub Pages

1. Создайте репозиторий (например, `metall-ist-site`).
2. Загрузите все файлы и папки (css, js, img) в корень ветки `main`.
   Можно через веб-интерфейс «upload files» или git:
   ```
   git init && git add . && git commit -m "site"
   git remote add origin https://github.com/<логин>/metall-ist-site.git
   git push -u origin main
   ```
3. Settings → Pages → Source: ветка `main`, папка `/ (root)` → Save.
4. Сайт появится через 1–2 минуты: `https://<логин>.github.io/metall-ist-site/`

## Что поменять под себя

- Телефон +7 (495) 123-45-67 — в `js/layout.js` (поиск по «123-45-67»).
- Почта info@metall-ist.ru — там же.
- Товары/цены — в `js/data.js`.
- Реквизиты — в `js/layout.js` (футер) и `contacts.html`.

## Реальная отправка заявок

Сейчас формы показывают только подтверждение. Чтобы заявки реально приходили:
- Formspree: создайте форму на formspree.io, замените у формы
  `<form action="https://formspree.io/f/ВАШ_ID" method="POST">` и уберите
  `e.preventDefault()` в обработчике.
- Или Telegram-бот: отправляйте POST на webhook через небольшой сервис-прослойку
  (GitHub Pages сам по себе не умеет отправлять почту/ботов).
