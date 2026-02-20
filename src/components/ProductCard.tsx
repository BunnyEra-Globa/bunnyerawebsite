interface ProductCardProps {
  icon: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  badge?: string;
}

export default function ProductCard({
  icon,
  name,
  tagline,
  description,
  features,
  badge,
}: ProductCardProps) {
  return (
    <div className="card flex flex-col group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-primary-400 text-sm font-medium">{tagline}</p>
          </div>
        </div>
        {badge && (
          <span className="px-2 py-0.5 bg-primary-900 border border-primary-700 text-primary-300 text-xs font-medium rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <ul className="mt-auto space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
            <svg
              className="w-4 h-4 text-primary-500 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
