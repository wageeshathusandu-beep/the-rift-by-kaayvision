import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { id: '01', title: 'Project 01', status: 'Classified', color: 'text-c-red', href: 'https://youtu.be/y3_Ll8mhzPw?si=qR8u0N-hSNcH6SJi', videoId: 'y3_Ll8mhzPw' },
  { id: '02', title: 'Project 02', status: 'In Development', color: 'text-c-cyan', href: 'https://youtu.be/oZ0AEXVQNdA?si=GnGMPZZBouu1gA03', videoId: 'oZ0AEXVQNdA' },
  { id: '03', title: 'Project 03', status: 'Coming Soon', color: 'text-c-muted', coverImage: 'https://lh3.googleusercontent.com/d/1cNwCn-r075gufwKLe4DP4MuwXyBpwEzF' },
]

export default function UpcomingProjects() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])

  return (
    <section id="upcoming" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-blue w-[400px] h-[400px] top-[10%] left-[-8%] opacity-50"></div>
      <div className="orb orb-purple w-[350px] h-[350px] bottom-[10%] right-[-5%] opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={vis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="tech-label text-center mb-3">FUTURE OPERATIONS</p>
          <h2 className="section-title mb-4">Our Projects</h2>
          <p className="text-center text-c-muted mb-14 font-body text-lg">Collaborations welcome. <span className="text-c-cyan">Contact KAAY VISION.</span></p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {projects.map((p, i) => {
            const content = (
              <>
                {(p.videoId || p.coverImage) && (
                  <div className="relative w-full h-40 -mt-8 -mx-8 mb-4 overflow-hidden rounded-t-2xl" style={{ width: 'calc(100% + 4rem)' }}>
                    <img
                      src={p.videoId ? `https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg` : p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = p.videoId ? `https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg` : `https://drive.google.com/uc?export=view&id=1cNwCn-r075gufwKLe4DP4MuwXyBpwEzF`; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent"></div>
                  </div>
                )}
                <span className="text-5xl font-display text-c-muted/10 group-hover:text-c-purple/10 transition-colors duration-500">{p.id}</span>
                <h3 className="font-display text-xl tracking-widest text-c-white mt-2 mb-3">{p.title}</h3>
                {p.status === 'Coming Soon' ? (
                  <motion.div
                    className="coming-soon-wrapper relative inline-flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={vis ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="coming-soon-glow-bg"></div>
                    <span className="coming-soon-text font-display font-bold text-sm md:text-base uppercase tracking-[0.25em] inline-block relative">
                      COMING SOON
                    </span>
                  </motion.div>
                ) : (
                  <span className={`font-mono text-[10px] uppercase tracking-widest ${p.color}`}>{p.status}</span>
                )}
              </>
            )

            const Wrapper = p.href ? 'a' : 'div'
            const wrapperProps = p.href ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' } : {}

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={vis ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                <Wrapper {...wrapperProps} className={`glass-card p-8 text-center group block overflow-hidden hover:scale-[1.02] transition-transform duration-300 ${p.href ? 'cursor-pointer' : ''}`}>
                  {content}
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={vis ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-producing-heading inline-block relative">
            <div className="cfp-bloom"></div>
            <h3 className="cfp-text font-display font-extrabold uppercase tracking-[0.22em] text-xl md:text-2xl lg:text-[1.7rem] text-center relative">
              Contact For Producing
            </h3>
            <p className="cfp-subtitle font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-center mt-3 relative">
              Press, partnerships, updates
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://wa.me/94775968200?text=Hello!%20I%20would%20like%20to%20contact%20you%20regarding%20your%20film."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Us on WhatsApp"
              className="cfp-whatsapp-btn inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-display font-bold uppercase tracking-[0.15em] text-xs md:text-sm text-white relative overflow-hidden transition-all duration-500"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
