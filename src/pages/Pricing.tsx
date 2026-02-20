import PricingTable, { type Plan } from '../components/PricingTable'

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for indie developers and small side projects.',
    cta: 'Get Started Free',
    features: [
      '1 project',
      '3 GB cloud storage',
      'BunnyEra AI — 100 queries/month',
      'Shared compute (512 MB RAM)',
      'Community support',
      'BunnyEra DevKit access',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'month',
    description: 'For professional developers and growing teams.',
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited projects',
      '100 GB cloud storage',
      'BunnyEra AI — 10,000 queries/month',
      'Dedicated compute (4 vCPU / 8 GB RAM)',
      'BunnyEra OS — 3 device licences',
      'Email & chat support',
      'Custom domains',
      'Advanced analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for organisations at scale.',
    cta: 'Contact Sales',
    features: [
      'Unlimited projects & storage',
      'BunnyEra AI — unlimited queries',
      'Unlimited compute clusters',
      'BunnyEra OS — unlimited licences',
      'Dedicated account manager',
      '99.99% SLA & priority support',
      'Private cloud deployment',
      'Custom compliance packages',
      'SSO / SAML & advanced IAM',
    ],
  },
]

export default function Pricing() {
  return (
    <div className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="section-heading">Simple, Transparent Pricing</h1>
          <p className="section-subheading">
            Start for free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Table */}
        <div className="mt-16">
          <PricingTable plans={plans} />
        </div>

        {/* FAQ teaser */}
        <div className="mt-20 rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-2">
            {[
              {
                q: 'Can I change plans at any time?',
                a: 'Yes. You can upgrade or downgrade at any time. Billing is prorated automatically.',
              },
              {
                q: 'Is there a free trial for Pro?',
                a: 'Yes — the Pro plan includes a 14-day free trial with no credit card required.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit/debit cards, PayPal, and bank transfer for Enterprise plans.',
              },
              {
                q: 'Do you offer non-profit or student discounts?',
                a: 'Yes! Contact us with proof of eligibility for up to 80% off the Pro plan.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm text-gray-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
