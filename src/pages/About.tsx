const values = [
  {
    icon: '🚀',
    title: 'Boldly Innovative',
    description: 'We push boundaries rather than follow trends. Every product we ship challenges the status quo.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your data is yours. We build with privacy by design — not as an afterthought.',
  },
  {
    icon: '🌍',
    title: 'Open & Inclusive',
    description: 'We believe great technology should be accessible to everyone, everywhere.',
  },
  {
    icon: '⚡',
    title: 'Speed Obsessed',
    description: 'Performance is a feature. We measure success in milliseconds and delight in the details.',
  },
];

const team = [
  { name: 'Alex Bunny', role: 'Founder & CEO', emoji: '🐰' },
  { name: 'Sam Hopper', role: 'CTO', emoji: '🦔' },
  { name: 'Jordan Meadow', role: 'Head of Design', emoji: '🦊' },
  { name: 'Taylor Cloud', role: 'VP Engineering', emoji: '🐺' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="section-title">About BunnyEra</h1>
          <p className="section-subtitle">
            We're a team of engineers, designers, and dreamers on a mission to build the most intelligent computing ecosystem ever created.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                BunnyEra was born in 2023 from a simple frustration: the tools we use every day weren't built for the age of AI. Operating systems treat AI as an add-on. Cloud platforms treat developers as an afterthought. AI tools are siloed and disconnected.
              </p>
              <p>
                We set out to build something different — a unified ecosystem where the OS, AI, and cloud aren't just compatible, but deeply integrated. Where your system understands your context, your AI knows your workflows, and your infrastructure scales without friction.
              </p>
              <p>
                The name "BunnyEra" represents our belief in agility, speed, and the boundless curiosity that drives us forward. We're quick on our feet, relentlessly iterative, and always hopping toward what's next.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-900/50 via-gray-900 to-gray-800 border border-gray-700 flex items-center justify-center">
              <span className="text-9xl">🐰</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, description }) => (
              <div key={title} className="card text-center">
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-white text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, emoji }) => (
              <div key={name} className="card text-center">
                <span className="text-5xl mb-3 block">{emoji}</span>
                <h3 className="font-semibold text-white text-sm">{name}</h3>
                <p className="text-primary-400 text-xs mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
