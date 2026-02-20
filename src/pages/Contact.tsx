import { useState, type FormEvent } from 'react'

const contactOptions = [
  { icon: '💬', title: 'General Enquiry', desc: 'Questions about our products or company.' },
  { icon: '💼', title: 'Sales', desc: 'Pricing, enterprise plans, and custom packages.' },
  { icon: '🛠️', title: 'Support', desc: 'Technical issues and bug reports.' },
  { icon: '🤝', title: 'Partnerships', desc: 'Integrations, resellers, and joint ventures.' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // In a real app this would POST to an API endpoint
    setSubmitted(true)
  }

  return (
    <div className="bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="section-heading">Get in Touch</h1>
          <p className="section-subheading">
            We would love to hear from you. Choose a topic below and we will get back to you as soon
            as possible.
          </p>
        </div>

        {/* Contact options */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactOptions.map(({ icon, title, desc }) => (
            <div key={title} className="card text-center">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="mt-16 mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-brand-700 bg-brand-950/30 p-10 text-center">
              <div className="text-5xl">🎉</div>
              <h2 className="mt-4 text-2xl font-bold text-white">Message Sent!</h2>
              <p className="mt-2 text-gray-400">
                Thanks for reaching out. We typically respond within one business day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="btn-primary mt-6"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="mt-2 block w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="mt-2 block w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject <span className="text-brand-400">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                >
                  <option value="" disabled>Select a subject…</option>
                  <option>General Enquiry</option>
                  <option>Sales</option>
                  <option>Support</option>
                  <option>Partnerships</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message <span className="text-brand-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help…"
                  className="mt-2 block w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div className="mt-6">
                <button type="submit" className="btn-primary w-full py-4 text-base">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
