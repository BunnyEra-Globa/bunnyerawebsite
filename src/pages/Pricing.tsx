interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals exploring the BunnyEra ecosystem.',
    features: [
      'BunnyEra OS (community edition)',
      'BunnyEra AI — 100 requests/day',
      'BunnyEra Cloud — 1 GB storage',
      'Community support',
      '1 project',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For power users and professionals who need more.',
    features: [
      'BunnyEra OS (full edition)',
      'BunnyEra AI — unlimited requests',
      'BunnyEra Cloud — 100 GB storage',
      'Priority support',
      'Unlimited projects',
      'Plugin marketplace access',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For organizations that need scale, compliance, and dedicated support.',
    features: [
      'Everything in Pro',
      'Custom AI model fine-tuning',
      'Dedicated cloud infrastructure',
      'SLA-backed uptime guarantee',
      'SSO & advanced security',
      'Dedicated account manager',
      'Custom billing & contracts',
    ],
    cta: 'Contact Sales',
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Simple, Transparent Pricing</h1>
          <p className="section-subtitle">
            Start free, scale as you grow. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 border transition-colors ${
                tier.highlighted
                  ? 'bg-primary-900/30 border-primary-600 shadow-2xl shadow-primary-900/40'
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-gray-400 mb-1 text-sm">/ {tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full text-center py-3 rounded-lg font-semibold transition-colors text-sm ${
                  tier.highlighted
                    ? 'bg-primary-600 hover:bg-primary-500 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-20 text-center">
          <p className="text-gray-400">
            Questions about pricing?{' '}
            <a href="/contact" className="text-primary-400 hover:text-primary-300 font-medium">
              Reach out to us
            </a>{' '}
            — we're happy to help.
          </p>
        </div>
      </div>
    </div>
  );
}
