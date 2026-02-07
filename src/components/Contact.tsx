'use client'

import { useState } from 'react'
import { Send, Calendar, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/content/config'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError('Failed to send message. Please try again or email directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Whether you need a senior consultant for a complex implementation,
            want to discuss a potential engagement, or just want to connect—I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Form */}
          <div className="animate-fade-up">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-surface-400">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-surface-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-accent-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-surface-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-accent-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-surface-300 mb-2">
                    Company <span className="text-surface-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                    className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-surface-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-surface-900 border border-surface-700 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-400 disabled:bg-accent-500/50 text-surface-950 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-surface-950/30 border-t-surface-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Quick contact options */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            {/* Schedule call */}
            <a
              href={siteConfig.schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-surface-900/60 border border-surface-700/50 rounded-xl hover:border-accent-500/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <Calendar className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Schedule a Call
                  </h3>
                  <p className="text-sm text-surface-400">
                    Book a 30-minute discovery call to discuss your project and see if we&apos;re a good fit.
                  </p>
                </div>
              </div>
            </a>


            {/* Location & timezone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-surface-900/40 border border-surface-700/30 rounded-lg">
                <div className="flex items-center gap-3 text-surface-400">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-medium text-surface-300">Location</div>
                    <div className="text-xs">{siteConfig.location}</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-900/40 border border-surface-700/30 rounded-lg">
                <div className="flex items-center gap-3 text-surface-400">
                  <Clock className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-medium text-surface-300">Timezone</div>
                    <div className="text-xs">{siteConfig.timezone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <p className="text-xs text-surface-500 text-center">
              I typically respond within 24 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
