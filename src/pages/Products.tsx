import ProductCard, { type Product } from '../components/ProductCard'

const products: Product[] = [
  {
    name: 'BunnyEra OS',
    tagline: 'The OS built for the AI age',
    description:
      'BunnyEra OS redefines what an operating system can be. Powered by a microkernel architecture and an embedded AI engine, it delivers performance, security, and adaptability that traditional OS platforms simply cannot match.',
    icon: '🖥️',
    features: [
      'AI-assisted system management & diagnostics',
      'Zero-trust security model out of the box',
      'Lightning-fast boot time under 2 seconds',
      'Native container and WASM runtime',
      'Live kernel patching — zero downtime updates',
      'Compatible with x86_64, ARM64 & RISC-V',
    ],
    badge: 'New',
  },
  {
    name: 'BunnyEra AI',
    tagline: 'Your intelligent development co-pilot',
    description:
      'BunnyEra AI brings the most advanced language and code models directly into your workflow. Whether you are writing code, analyzing data, or building pipelines, BunnyEra AI accelerates every step.',
    icon: '🤖',
    features: [
      'Context-aware code completion & generation',
      'Natural language API queries and transformations',
      'Automated code review with security analysis',
      'Multi-model support: GPT, Claude, Llama, custom',
      'Real-time analytics & anomaly detection',
      'Private deployment options for enterprises',
    ],
    badge: 'Beta',
  },
  {
    name: 'BunnyEra Cloud',
    tagline: 'Infinite scale, effortless deployment',
    description:
      'BunnyEra Cloud provides a global, AI-optimized cloud infrastructure. From serverless functions to full Kubernetes clusters, deploy anywhere in the world with one command.',
    icon: '☁️',
    features: [
      'Global edge network with 150+ PoPs',
      '99.99% uptime SLA guaranteed',
      'One-click Kubernetes cluster provisioning',
      'Integrated CDN, WAF & DDoS protection',
      'Autoscaling with predictive AI load balancing',
      'Compliance: SOC 2, ISO 27001, GDPR',
    ],
  },
  {
    name: 'BunnyEra DevKit',
    tagline: 'The complete developer toolkit',
    description:
      'Everything you need to build, test, and ship applications on the BunnyEra platform. SDKs, CLI tools, and a powerful local development environment.',
    icon: '🛠️',
    features: [
      'TypeScript, Python, Go, and Rust SDKs',
      'Unified CLI for all BunnyEra services',
      'Local emulation of cloud services',
      'Built-in observability & tracing',
    ],
    badge: 'Coming Soon',
  },
  {
    name: 'BunnyEra Insights',
    tagline: 'Real-time business intelligence',
    description:
      'Transform raw data into actionable insights with BunnyEra Insights. AI-powered dashboards, custom reports, and streaming analytics at any scale.',
    icon: '📊',
    features: [
      'AI-generated dashboards from natural language',
      'Real-time streaming analytics pipeline',
      'Custom report builder with export options',
      'Anomaly detection & smart alerts',
    ],
    badge: 'Coming Soon',
  },
  {
    name: 'BunnyEra Secure',
    tagline: 'End-to-end security platform',
    description:
      'Protect your infrastructure and data with BunnyEra Secure — a unified security platform covering identity, access management, secrets, and compliance.',
    icon: '🔒',
    features: [
      'Identity & access management (IAM)',
      'Secrets manager with automatic rotation',
      'Continuous compliance monitoring',
      'Threat intelligence & SIEM integration',
    ],
    badge: 'Coming Soon',
  },
]

export default function Products() {
  return (
    <div className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="section-heading">Our Products</h1>
          <p className="section-subheading">
            A complete suite of products designed to work together — or independently — across every
            layer of the modern technology stack.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
