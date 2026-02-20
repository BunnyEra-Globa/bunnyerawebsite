import { Link } from 'react-router-dom'

const footerLinks = {
  Products: [
    { label: 'BunnyEra OS', to: '/products' },
    { label: 'BunnyEra AI', to: '/products' },
    { label: 'BunnyEra Cloud', to: '/products' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Pricing', to: '/pricing' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Service', to: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src="/bunny.svg" alt="BunnyEra logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">
                Bunny<span className="text-brand-400">Era</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Powering the next era of intelligent software and cloud infrastructure.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {section}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-gray-400 transition-colors hover:text-brand-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} BunnyEra. All rights reserved.</p>
          <p>Built with ❤️ using React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
