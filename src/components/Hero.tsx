import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* Gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-brand-700/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-950/50 px-4 py-1.5 text-sm font-medium text-brand-300">
            <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            Now in Public Beta
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Powering the{' '}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Next Era
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 leading-relaxed">
            BunnyEra delivers a unified ecosystem of intelligent operating systems, AI-powered
            developer tools, and enterprise-grade cloud infrastructure — all in one place.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/products" className="btn-primary text-base px-8 py-4">
              Explore Products
            </Link>
            <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-800 pt-10">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '150+', label: 'Countries' },
              { value: '10 ms', label: 'Avg Latency' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="mt-1 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
