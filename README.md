# Verivo

## UA

### Жива історія вашого автомобіля

Verivo створює надійний запис історії автомобіля, який розвивається з часом і поєднує його ідентичність, володіння, догляд та важливі події в одному достовірному продуктовому досвіді.

### Локальний запуск

Сайт є статичним і не потребує збірки або встановлення залежностей.

```sh
python3 -m http.server 8000
```

Після запуску відкрийте `http://localhost:8000`.

### Структура сайту

| Шлях | Призначення |
| --- | --- |
| `index.html` | Головна сторінка. |
| `404.html` | Сторінка для невідомих адрес. |
| `styles/` | Стилі сайту. |
| `scripts/` | Клієнтський JavaScript. |
| `assets/` | Оптимізовані графічні ресурси та favicon. |
| `.github/workflows/pages.yml` | Автоматичне розгортання GitHub Pages із гілки `main`. |

### GitHub Pages

Workflow публікує лише статичні файли сайту. Після push до `main` розгортання запускається автоматично; його також можна запустити вручну через GitHub Actions.

## EN

### The Living History of Your Car

Verivo creates a durable, evolving record of a car's history, bringing its identity, ownership, care, and important events into one trustworthy product experience.

### Run locally

The site is static and requires no build step or dependency installation.

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` after the server starts.

### Site structure

| Path | Purpose |
| --- | --- |
| `index.html` | Homepage. |
| `404.html` | Fallback for unknown paths. |
| `styles/` | Site styles. |
| `scripts/` | Client-side JavaScript. |
| `assets/` | Optimized visual assets and favicons. |
| `.github/workflows/pages.yml` | Automatic GitHub Pages deployment from `main`. |

### GitHub Pages

The workflow publishes only the static site files. A deployment starts automatically after a push to `main` and can also be started manually through GitHub Actions.
