import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function TicketBooking() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])

  return (
    <section id="ticket-booking" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-cyan w-[400px] h-[400px] top-[8%] right-[-8%] opacity-45"></div>
      <div className="orb orb-purple w-[350px] h-[350px] bottom-[12%] left-[-6%] opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={vis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="tech-label text-center mb-3">NOW SHOWING</p>
          <h2 className="section-title mb-4">Online Ticket Booking</h2>
          <p className="text-center text-c-muted mb-12 font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Reserve your movie tickets quickly and securely. Choose your preferred cinema, date, and time, then complete your booking online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={vis ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="#ticket-booking"
            className="ticket-booking-btn inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-display font-bold uppercase tracking-[0.15em] text-xs md:text-sm text-white relative overflow-hidden transition-all duration-500"
            aria-label="Book Tickets Now"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
            <span className="relative z-10">Book Tickets Now</span>
          </a>

          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-c-muted/60">
            Secure online booking &bull; Instant confirmation &bull; Mobile-friendly
          </p>
        </motion.div>
      </div>
    </section>
  )
}
