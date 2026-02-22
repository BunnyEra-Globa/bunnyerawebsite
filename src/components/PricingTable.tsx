import { Link } from 'react-router-dom'

export interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

interface PricingTableProps {
  plans: Plan[]
}

export default function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
            plan.highlighted
              ? 'border-brand-500 bg-brand-950/40 shadow-xl shadow-brand-950/60 ring-1 ring-brand-500/50'
              : 'border-gray-800 bg-gray-900 hover:border-brand-700'
          }`}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                {plan.badge}
              </span>
            </div>
          )}

          <div>
            <h3 className="text-lg font-bold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-gray-400">{plan.description}</p>
          </div>

          <div className="mt-6">
            <span className="text-5xl font-extrabold text-white">{plan.price}</span>
            {plan.period && (
              <span className="ml-2 text-sm text-gray-400">/{plan.period}</span>
            )}
          </div>

          <ul className="mt-8 flex-1 space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                <svg
                  className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                    plan.highlighted ? 'text-brand-400' : 'text-brand-500'
                  }`}
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

          <div className="mt-8">
            <Link
              to="/contact"
              className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-lg hover:shadow-brand-600/40'
                  : 'border border-gray-700 text-gray-200 hover:border-brand-500 hover:text-brand-400'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
