const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-founder',
    avatar: '👤',
    bio: 'Former VP Engineering at a top-5 cloud provider. Passionate about AI-native infrastructure.',
  },
  {
    name: 'Priya Patel',
    role: 'CTO & Co-founder',
    avatar: '👤',
    bio: 'PhD in Distributed Systems. Built hyperscale storage systems serving billions of users.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Head of AI Research',
    avatar: '👤',
    bio: 'Published AI researcher with expertise in LLMs and autonomous agents.',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Head of Design',
    avatar: '👤',
    bio: 'Award-winning product designer focused on making complex technology feel intuitive.',
  },
]

const values = [
  {
    icon: '🚀',
    title: 'Move Fast',
    description: 'We ship early, iterate quickly, and listen to our users. Speed without chaos.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'Every product is built with security and privacy as a foundational requirement, not an afterthought.',
  },
  {
    icon: '🌍',
    title: 'Build for Everyone',
    description: 'From solo developers in Nairobi to Fortune 500 teams in New York — our tools should work for all.',
  },
  {
    icon: '🤝',
    title: 'Open by Default',
    description: 'We believe in open standards, open APIs, and contributing back to the communities that power us.',
  },
]

export default function About() {
  return (
    <div className="bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-96 w-96 rounded-full bg-brand-700/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="section-heading">About BunnyEra</h1>
          <p className="section-subheading">
            We are a team of engineers, designers, and researchers on a mission to build the software
            infrastructure of tomorrow — intelligent, open, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-heading">Our Mission</h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                The world is entering a new technological era — one shaped by artificial intelligence,
                distributed computing, and a developer community that demands better tools. BunnyEra
                was founded to meet that moment.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                We build products that remove friction, amplify human capability, and make advanced
                technology accessible to organisations of every size. From a smart operating system
                that manages itself, to AI models that understand your codebase, to cloud
                infrastructure that scales globally with a single command — BunnyEra is the platform
                for the next generation of builders.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '2022', label: 'Founded' },
                { value: '50+', label: 'Team Members' },
                { value: '10k+', label: 'Developers' },
                { value: '$12M', label: 'Raised' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center"
                >
                  <p className="text-4xl font-extrabold text-white">{value}</p>
                  <p className="mt-2 text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Our Values</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon, title, description }) => (
              <div key={title} className="card text-center">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Meet the Team</h2>
            <p className="section-subheading">The people building the future of BunnyEra.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="card text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900/60 text-4xl">
                  {/* placeholder avatar */}
                  <span className="text-2xl">🐇</span>
                </div>
                <h3 className="mt-4 font-bold text-white">{name}</h3>
                <p className="text-sm font-medium text-brand-400">{role}</p>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
