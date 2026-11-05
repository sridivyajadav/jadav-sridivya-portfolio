import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    if (!formRef.current) return
    const formData = new FormData(formRef.current)
    const firstName = formData.get('first_name')?.toString().trim() || ''
    const lastName = formData.get('last_name')?.toString().trim() || ''
    const email = formData.get('user_email')?.toString().trim() || ''
    const message = formData.get('message')?.toString().trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: Mailto client
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax Giant Watermark */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-0 pointer-events-none z-0 flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front Red Card (aligned right) */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20">
          <span className="text-xs font-mono font-bold uppercase text-black/70 tracking-[0.2em]">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-semibold backdrop-blur-sm transition-colors"
            >
              DM on Instagram ↗
            </a>
          ) : null}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Personal Details */}
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Message Area */}
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors resize-none min-h-[148px]"
              />
            </div>
          </div>

          {/* Bottom Actions & Consents */}
          <div className="space-y-4 pt-4 border-t border-white/20">
            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                required
                defaultChecked
                className="w-4 h-4 mt-1 rounded text-black focus:ring-0 cursor-pointer accent-black"
              />
              <label
                htmlFor="consent"
                className="text-xs md:text-sm text-white/90 select-none cursor-pointer leading-normal"
              >
                I consent to having this website store my submitted information so they can respond to my inquiry.
              </label>
            </div>

            {/* Response Timeline Note */}
            <p className="text-xs text-white/80">
              Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
            </p>

            {/* Direct Urgent Mail Link */}
            <p className="text-xs text-white/90">
              Need urgent assistance?{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}?subject=Urgent%20Inquiry%20%E2%80%93%20Portfolio`}
                className="underline font-bold text-white hover:text-black transition-colors"
              >
                Email me directly
              </a>
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full border border-white/40 bg-black/30 text-white/70 font-bold flex items-center justify-center space-x-3 cursor-wait"
                >
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-green-600 text-white font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-8 py-4 rounded-full bg-red-900 text-white font-bold flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full border border-white text-white font-bold flex items-center justify-center space-x-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
