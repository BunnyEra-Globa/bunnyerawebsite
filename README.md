# BunnyEra Website

Official website for the **BunnyEra** ecosystem — providing product information, pricing, about the company, and a contact form for BunnyEra OS, BunnyEra AI, and BunnyEra Cloud.

---

## Tech Stack

| Layer       | Technology                         |
|-------------|-------------------------------------|
| Bundler     | [Vite 6](https://vitejs.dev/)       |
| UI Library  | [React 19](https://react.dev/)      |
| Language    | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com/) |
| Routing     | [React Router 7](https://reactrouter.com/) |
| Linting     | [ESLint 9](https://eslint.org/) + typescript-eslint |

---

## Folder Structure

```
bunnyerawebsite/
├── public/
│   └── bunny.svg            # Favicon / brand SVG
├── src/
│   ├── main.tsx             # React entry point
│   ├── App.tsx              # Root component with router + layout
│   ├── styles/
│   │   └── globals.css      # Tailwind directives + global styles
│   ├── pages/
│   │   ├── Home.tsx         # Landing page with Hero + featured products
│   │   ├── Products.tsx     # Full product catalogue
│   │   ├── Pricing.tsx      # Pricing tiers + FAQ
│   │   ├── About.tsx        # Mission, values, team
│   │   └── Contact.tsx      # Contact form
│   └── components/
│       ├── Navbar.tsx       # Sticky responsive navigation bar
│       ├── Footer.tsx       # Site footer with links
│       ├── Hero.tsx         # Full-width hero section
│       ├── ProductCard.tsx  # Reusable product card component
│       └── PricingTable.tsx # Responsive pricing plan grid
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── eslint.config.js
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev

# Type-check only
npx tsc --noEmit

# Lint
npm run lint
```

## Build Commands

```bash
# Type-check + production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Pages

| Route        | Description                              |
|--------------|------------------------------------------|
| `/`          | Home — Hero section + product highlights |
| `/products`  | Full product catalogue (6 products)      |
| `/pricing`   | Starter / Pro / Enterprise plans + FAQ   |
| `/about`     | Mission, company values, team            |
| `/contact`   | Contact form (client-side, no backend)   |

---

## Design System

- **Dark theme** — `gray-950` background throughout
- **Brand colour** — custom purple palette (`brand-*`) defined in `tailwind.config.js`
- **Typography** — Inter font loaded from Google Fonts
- **Components** — reusable Tailwind `@layer components` utilities: `.btn-primary`, `.btn-secondary`, `.card`, `.section-heading`

---

## License

[MIT](LICENSE)
