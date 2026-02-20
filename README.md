# BunnyEra Website

The official website for the **BunnyEra** ecosystem — an AI-native computing platform built around BunnyEra OS, BunnyEra AI, and BunnyEra Cloud.

## Tech Stack

- [Vite](https://vitejs.dev/) — lightning-fast build tooling
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/) — utility-first styling with a custom purple/violet palette
- [React Router v6](https://reactrouter.com/) — client-side routing

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx      # Global layout (Navbar + Footer)
│   ├── Navbar.tsx      # Responsive navigation bar
│   ├── Footer.tsx      # Footer with links and social icons
│   ├── Hero.tsx        # Home page hero section
│   └── ProductCard.tsx # Reusable product card component
├── pages/
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Product details
│   ├── Pricing.tsx     # Pricing tiers
│   ├── About.tsx       # About the company
│   └── Contact.tsx     # Contact form (frontend only)
└── index.css           # Tailwind directives + global styles
```

## Getting Started

```bash
npm install
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero + product overview |
| `/products` | Detailed product listing |
| `/pricing` | Pricing tiers (Free / Pro / Enterprise) |
| `/about` | Company story, values, team |
| `/contact` | Contact form |

## License

See [LICENSE](./LICENSE).
