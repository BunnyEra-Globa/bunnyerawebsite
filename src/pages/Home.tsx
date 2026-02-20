import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const products = [
  {
    icon: '🖥️',
    name: 'BunnyEra OS',
    tagline: 'The AI-native operating system',
    description:
      'A next-generation operating system built from the ground up with AI at its core. Seamless, fast, and intelligent — designed for the modern developer and power user.',
    features: [
      'AI-powered system assistant',
      'Lightning-fast boot & performance',
      'Built-in privacy & security',
      'Universal app compatibility',
    ],
    badge: 'Beta',
  },
  {
    icon: '🤖',
    name: 'BunnyEra AI',
    tagline: 'Your intelligent companion',
    description:
      'A multimodal AI platform that understands your context, supercharges your workflow, and integrates deeply with the rest of the BunnyEra ecosystem.',
    features: [
      'Multimodal understanding',
      'Deep ecosystem integration',
      'Private, on-device inference',
      'Extensible via plugins',
    ],
    badge: 'New',
  },
  {
    icon: '☁️',
    name: 'BunnyEra Cloud',
    tagline: 'Infrastructure for the future',
    description:
      'A developer-first cloud platform with global reach. Deploy anywhere, scale infinitely, and power your AI workloads with our optimized infrastructure.',
    features: [
      'Global edge network',
      'AI-optimized compute',
      'One-click deployments',
      'Pay-as-you-go pricing',
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Products section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">The Ecosystem</h2>
            <p className="section-subtitle">
              Three products. One vision. A unified computing experience built for what's next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-900/50 via-gray-900 to-primary-900/50 border-y border-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to join the era?
          </h2>
          <p className="text-gray-400 mb-8">
            Get early access to the BunnyEra ecosystem and help shape the future of computing.
          </p>
          <a href="/contact" className="btn-primary text-base px-8 py-3.5">
            Request Early Access
          </a>
        </div>
      </section>
    </>
  );
}
