# Portfolio Website

This is a personal portfolio website built with React, styled using Tailwind CSS, and deployed using GitHub Pages or Vercel. It includes:

- **Resume** download
- **Blog section**
- **Project cards from GitHub**
- Fully responsive and modern UI

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 14)
- npm or yarn

### Installation
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 🛠 Deployment

### GitHub Pages
1. Update your `vite.config.js` with correct base URL:
```js
base: '/<your-repo-name>/',
```

2. Push your code to GitHub.

3. Add this GitHub Action to deploy automatically:

<details>
<summary><code>.github/workflows/deploy.yml</code></summary>

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```

</details>

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Use default build settings (Vite auto-detected)
4. Click Deploy

---

## ✨ Features
- Responsive design
- Auto-fetch GitHub projects
- Blog posts displayed dynamically
- PDF resume download button

---

## 📄 License
This project is licensed under the MIT License.

---

## 📫 Contact
- Email: msaalim1998@gmail.com
- GitHub: [@D3xt3rh](https://github.com/D3xt3rh)
- LinkedIn: [mohammad-saalim](https://www.linkedin.com/in/mohammad-saalim)
