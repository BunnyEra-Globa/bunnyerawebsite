import { Link } from 'react-router-dom'

export interface Product {
  name: string
  tagline: string
  description: string
  icon: string
  features: string[]
  badge?: string
  href?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, tagline, description, icon, features, badge, href = '/products' } = product

  return (
    <div className="card group flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-900/60 text-3xl">
          {icon}
        </div>
        {badge && (
          <span className="rounded-full bg-brand-700/30 px-3 py-1 text-xs font-semibold text-brand-300">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 flex-1">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm font-medium text-brand-400">{tagline}</p>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">{description}</p>

        {/* Feature list */}
        <ul className="mt-5 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
              <svg
                className="h-4 w-4 flex-shrink-0 text-brand-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <Link
          to={href}
          className="btn-secondary w-full group-hover:border-brand-500 group-hover:text-brand-400"
        >
          Learn More
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
