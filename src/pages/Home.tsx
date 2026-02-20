import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard, { type Product } from '../components/ProductCard'

const featuredProducts: Product[] = [
  {
    name: 'BunnyEra OS',
    tagline: 'The OS built for the AI age',
    description:
      'A next-generation operating system designed with AI at its core. Seamless performance, unmatched security, and a developer-first experience.',
    icon: '🖥️',
    features: [
      'AI-assisted system management',
      'Zero-trust security model',
      'Lightning-fast boot (< 2 s)',
      'Native container runtime',
    ],
    badge: 'New',
  },
  {
    name: 'BunnyEra AI',
    tagline: 'Your intelligent development co-pilot',
    description:
      'State-of-the-art AI models integrated directly into your workflow. From code generation to smart analytics — BunnyEra AI does the heavy lifting.',
    icon: '🤖',
    features: [
      'Context-aware code completion',
      'Natural language API queries',
      'Automated code review',
      'Multi-model support',
    ],
    badge: 'Beta',
  },
  {
    name: 'BunnyEra Cloud',
    tagline: 'Infinite scale, effortless deployment',
    description:
      'Enterprise-grade cloud infrastructure with global edge coverage, automatic scaling, and pay-as-you-go pricing built for modern applications.',
    icon: '☁️',
    features: [
      'Global edge network (150+ PoPs)',
      '99.99% uptime SLA',
      'One-click Kubernetes clusters',
      'Integrated CDN & DDoS protection',
    ],
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured products */}
      <section className="py-20 sm:py-28 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Our Ecosystem</h2>
            <p className="section-subheading mx-auto max-w-2xl">
              Three powerful products. One unified platform. Everything you need to build, deploy, and
              scale in the modern AI-driven world.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products" className="btn-primary">
              See All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative overflow-hidden border-t border-gray-800 bg-gray-900 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-96 w-96 rounded-full bg-brand-700/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="section-heading">Ready to enter the BunnyEra?</h2>
          <p className="section-subheading">
            Start for free. Scale without limits. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get Started Free
            </Link>
            <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
