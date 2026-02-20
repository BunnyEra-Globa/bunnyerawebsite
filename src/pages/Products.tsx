import ProductCard from '../components/ProductCard';

const products = [
  {
    icon: '🖥️',
    name: 'BunnyEra OS',
    tagline: 'The AI-native operating system',
    description:
      'BunnyEra OS is engineered for the intelligence era. With an AI assistant embedded at the kernel level, a redesigned UI paradigm, and best-in-class privacy tooling, it\'s computing reimagined. Whether you\'re a developer, designer, or power user, BunnyEra OS adapts to your workflow.',
    features: [
      'AI-powered system assistant built-in',
      'Lightning-fast boot under 3 seconds',
      'Unified notification & focus modes',
      'End-to-end encrypted file system',
      'Developer-first terminal & tools',
      'Cross-platform app compatibility layer',
      'Automatic updates with zero downtime',
    ],
    badge: 'Beta',
  },
  {
    icon: '🤖',
    name: 'BunnyEra AI',
    tagline: 'Your intelligent companion',
    description:
      'BunnyEra AI is a next-generation multimodal AI platform designed to understand your context, automate your repetitive tasks, and augment your creativity. It runs locally for privacy, integrates with BunnyEra OS and Cloud, and is fully extensible via a plugin marketplace.',
    features: [
      'Multimodal: text, image, audio, code',
      'On-device inference for full privacy',
      'Deep OS & Cloud integration',
      'Plugin marketplace with 500+ extensions',
      'Semantic search across all your files',
      'Real-time collaboration co-pilot',
      'Custom fine-tuning for your workflows',
    ],
    badge: 'New',
  },
  {
    icon: '☁️',
    name: 'BunnyEra Cloud',
    tagline: 'Infrastructure for the future',
    description:
      'BunnyEra Cloud is a developer-first cloud platform with a global edge network optimized for AI workloads. From serverless functions to GPU clusters, deploy your apps and models with a single command and scale to millions of users instantly.',
    features: [
      '200+ edge nodes worldwide',
      'GPU-optimized AI inference clusters',
      'Serverless functions with cold-start < 1ms',
      'Managed databases & object storage',
      'Built-in CI/CD pipelines',
      'Auto-scaling & load balancing',
      'SOC 2 Type II & ISO 27001 certified',
    ],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">
            A complete ecosystem of intelligent computing tools — built to work seamlessly together.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Integration note */}
        <div className="mt-20 p-8 rounded-2xl bg-gray-900 border border-gray-800 text-center">
          <span className="text-4xl mb-4 block">🔗</span>
          <h3 className="text-2xl font-bold text-white mb-3">Better Together</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every BunnyEra product is built to integrate seamlessly with the others. BunnyEra AI runs natively on BunnyEra OS. BunnyEra Cloud powers BunnyEra AI's cloud features. The whole is greater than the sum of its parts.
          </p>
        </div>
      </div>
    </div>
  );
}
