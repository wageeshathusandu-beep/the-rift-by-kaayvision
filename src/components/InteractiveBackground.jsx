import { useEffect, useRef } from 'react'

// Alien sci-fi symbols for holographic rune effects
const ALIEN_SYMBOLS = [
  '\u2720', '\u2721', '\u2722', '\u2723', '\u2724', '\u2725',
  '\u2726', '\u2727', '\u2728', '\u2729', '\u272A', '\u272B',
  '\u25C6', '\u25C7', '\u25CA', '\u2B22', '\u2B23', '\u2B24',
  '\u2316', '\u2317', '\u2318', '\u2319', '\u23E3', '\u23E4',
]

export default function InteractiveBackground() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const stateRef = useRef({
    scanWaves: [],
    runeCircles: [],
    plasmaRipples: [],
    symbols: [],
    energyBursts: [],
    fogDistortions: [],
    eyeFlickers: [],
  })
  const lastMove = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    resize()
    window.addEventListener('resize', resize)

    // --- EFFECT CREATORS ---

    const triggerAlienEffect = (x, y) => {
      const s = stateRef.current

      // 1. Scan wave (expanding dashed ring)
      s.scanWaves.push({
        x, y, radius: 0, maxRadius: 150 + Math.random() * 80,
        life: 1, speed: 3 + Math.random(),
      })

      // 2. Alien rune circle (rotating segmented ring)
      s.runeCircles.push({
        x, y, radius: 35 + Math.random() * 20, rotation: 0,
        life: 1, segments: 5 + Math.floor(Math.random() * 4),
        direction: Math.random() > 0.5 ? 1 : -1,
      })

      // 3. Dark plasma ripple
      s.plasmaRipples.push({
        x, y, radius: 0, maxRadius: 90 + Math.random() * 50,
        life: 1, phase: Math.random() * Math.PI * 2,
      })

      // 4. Holographic alien symbols (3-5)
      const symCount = 3 + Math.floor(Math.random() * 3)
      for (let i = 0; i < symCount; i++) {
        const angle = (Math.PI * 2 * i) / symCount + Math.random() * 0.5
        const dist = 40 + Math.random() * 50
        s.symbols.push({
          x: x + Math.cos(angle) * dist,
          y: y + Math.sin(angle) * dist,
          char: ALIEN_SYMBOLS[Math.floor(Math.random() * ALIEN_SYMBOLS.length)],
          life: 1, decay: 0.012 + Math.random() * 0.006,
          size: 12 + Math.random() * 10,
          rotation: Math.random() * Math.PI * 2,
          drift: { x: Math.cos(angle) * 0.3, y: Math.sin(angle) * 0.3 },
        })
      }

      // 5. Energy burst particles (8-12)
      const burstCount = 8 + Math.floor(Math.random() * 5)
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.4
        const speed = 2 + Math.random() * 3
        s.energyBursts.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1, decay: 0.018 + Math.random() * 0.008,
          size: 1.5 + Math.random() * 2,
          type: Math.random() > 0.6 ? 'neon' : Math.random() > 0.3 ? 'blood' : 'plasma',
          trail: [],
        })
      }

      // 6. Fog distortion
      s.fogDistortions.push({
        x, y, radius: 20, maxRadius: 100 + Math.random() * 40,
        life: 1, intensity: 0.3 + Math.random() * 0.2,
      })

      // 7. Alien eye flicker (30% chance)
      if (Math.random() > 0.7) {
        s.eyeFlickers.push({
          x: x + (Math.random() - 0.5) * 60,
          y: y + (Math.random() - 0.5) * 40,
          life: 1, phase: 0, width: 25 + Math.random() * 15,
        })
      }
    }

    const triggerTrail = (x, y) => {
      const s = stateRef.current
      // Subtle energy trail on move
      s.energyBursts.push({
        x, y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.3 - Math.random() * 0.5,
        life: 1, decay: 0.02 + Math.random() * 0.01,
        size: 1 + Math.random() * 1.2,
        type: Math.random() > 0.5 ? 'neon' : 'plasma',
        trail: [],
      })
    }

    // --- EVENT HANDLERS ---

    const isInteractive = (el) => {
      if (!el) return false
      const tag = el.tagName
      if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'IFRAME') return true
      if (el.closest('a') || el.closest('button') || el.closest('input') || el.closest('textarea') || el.closest('iframe')) return true
      return false
    }

    const onClick = (e) => {
      if (isInteractive(e.target)) return
      triggerAlienEffect(e.clientX, e.clientY)
    }
    const onTouchStart = (e) => {
      if (isInteractive(e.target)) return
      const t = e.touches[0]
      triggerAlienEffect(t.clientX, t.clientY)
    }
    const onMouseMove = (e) => {
      const now = Date.now()
      if (now - lastMove.current > 60) {
        triggerTrail(e.clientX, e.clientY)
        lastMove.current = now
      }
    }
    const onTouchMove = (e) => {
      const now = Date.now()
      if (now - lastMove.current > 60) {
        const t = e.touches[0]
        triggerTrail(t.clientX, t.clientY)
        lastMove.current = now
      }
    }

    document.addEventListener('click', onClick, { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: true })

    // --- RENDER LOOP ---

    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      const s = stateRef.current

      // --- Fog distortions ---
      for (let i = s.fogDistortions.length - 1; i >= 0; i--) {
        const f = s.fogDistortions[i]
        f.radius += 1.5
        f.life -= 0.015
        if (f.life <= 0) { s.fogDistortions.splice(i, 1); continue }

        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius)
        grad.addColorStop(0, `rgba(0, 180, 220, ${f.life * f.intensity * 0.08})`)
        grad.addColorStop(0.4, `rgba(80, 0, 0, ${f.life * f.intensity * 0.05})`)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.fillRect(f.x - f.radius, f.y - f.radius, f.radius * 2, f.radius * 2)
      }

      // --- Plasma ripples ---
      for (let i = s.plasmaRipples.length - 1; i >= 0; i--) {
        const p = s.plasmaRipples[i]
        p.radius += 1.8
        p.life -= 0.013
        p.phase += 0.08
        if (p.life <= 0 || p.radius >= p.maxRadius) { s.plasmaRipples.splice(i, 1); continue }

        const progress = p.radius / p.maxRadius
        ctx.save()
        ctx.globalAlpha = p.life * 0.5 * (1 - progress)
        ctx.setLineDash([4 + Math.sin(p.phase) * 3, 8 + Math.cos(p.phase) * 4])
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(120, 0, 40, ${p.life * 0.6})`
        ctx.lineWidth = 1.5 * (1 - progress)
        ctx.stroke()
        ctx.setLineDash([])
        ctx.restore()
      }

      // --- Scan waves ---
      for (let i = s.scanWaves.length - 1; i >= 0; i--) {
        const sw = s.scanWaves[i]
        sw.radius += sw.speed
        sw.life -= 0.01
        if (sw.life <= 0 || sw.radius >= sw.maxRadius) { s.scanWaves.splice(i, 1); continue }

        const progress = sw.radius / sw.maxRadius
        ctx.save()
        ctx.globalAlpha = sw.life * 0.7 * (1 - progress * 0.8)

        // Outer scan ring
        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 212, 255, ${sw.life * 0.6})`
        ctx.lineWidth = 2 * (1 - progress)
        ctx.stroke()

        // Inner glow ring
        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.radius * 0.95, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 212, 255, ${sw.life * 0.2})`
        ctx.lineWidth = 6 * (1 - progress)
        ctx.stroke()

        ctx.restore()
      }

      // --- Rune circles ---
      for (let i = s.runeCircles.length - 1; i >= 0; i--) {
        const rc = s.runeCircles[i]
        rc.rotation += 0.02 * rc.direction
        rc.life -= 0.01
        if (rc.life <= 0) { s.runeCircles.splice(i, 1); continue }

        ctx.save()
        ctx.translate(rc.x, rc.y)
        ctx.rotate(rc.rotation)
        ctx.globalAlpha = rc.life * 0.6

        // Draw segmented alien circle
        const segAngle = (Math.PI * 2) / rc.segments
        for (let j = 0; j < rc.segments; j++) {
          const startA = j * segAngle + 0.1
          const endA = (j + 0.7) * segAngle
          ctx.beginPath()
          ctx.arc(0, 0, rc.radius, startA, endA)
          ctx.strokeStyle = `rgba(0, 200, 255, ${rc.life * 0.7})`
          ctx.lineWidth = 1.2
          ctx.stroke()

          // Small tick marks
          const tickAngle = (startA + endA) / 2
          const innerR = rc.radius - 5
          const outerR = rc.radius + 5
          ctx.beginPath()
          ctx.moveTo(Math.cos(tickAngle) * innerR, Math.sin(tickAngle) * innerR)
          ctx.lineTo(Math.cos(tickAngle) * outerR, Math.sin(tickAngle) * outerR)
          ctx.strokeStyle = `rgba(0, 180, 255, ${rc.life * 0.4})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }

        // Center dot
        ctx.beginPath()
        ctx.arc(0, 0, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${rc.life * 0.8})`
        ctx.fill()

        ctx.restore()
      }

      // --- Alien symbols ---
      for (let i = s.symbols.length - 1; i >= 0; i--) {
        const sym = s.symbols[i]
        sym.x += sym.drift.x
        sym.y += sym.drift.y
        sym.rotation += 0.01
        sym.life -= sym.decay
        if (sym.life <= 0) { s.symbols.splice(i, 1); continue }

        ctx.save()
        ctx.translate(sym.x, sym.y)
        ctx.rotate(sym.rotation)
        ctx.globalAlpha = sym.life * 0.7
        ctx.font = `${sym.size * sym.life}px monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // Glow layer
        ctx.shadowColor = 'rgba(0, 212, 255, 0.8)'
        ctx.shadowBlur = 8 * sym.life
        ctx.fillStyle = `rgba(0, 200, 255, ${sym.life * 0.7})`
        ctx.fillText(sym.char, 0, 0)

        ctx.shadowBlur = 0
        ctx.restore()
      }

      // --- Energy bursts with trails ---
      for (let i = s.energyBursts.length - 1; i >= 0; i--) {
        const eb = s.energyBursts[i]
        // Store trail position
        if (eb.trail.length < 6) {
          eb.trail.push({ x: eb.x, y: eb.y, life: eb.life })
        } else {
          eb.trail.shift()
          eb.trail.push({ x: eb.x, y: eb.y, life: eb.life })
        }

        eb.x += eb.vx
        eb.y += eb.vy
        eb.vx *= 0.96
        eb.vy *= 0.96
        eb.life -= eb.decay
        if (eb.life <= 0) { s.energyBursts.splice(i, 1); continue }

        // Get color
        let r, g, b
        if (eb.type === 'neon') { r = 0; g = 212; b = 255 }
        else if (eb.type === 'blood') { r = 180; g = 20; b = 20 }
        else { r = 100; g = 0; b = 180 } // plasma purple

        // Draw trail
        for (let t = 0; t < eb.trail.length; t++) {
          const tp = eb.trail[t]
          const ta = (t / eb.trail.length) * eb.life * 0.3
          ctx.beginPath()
          ctx.arc(tp.x, tp.y, eb.size * 0.5 * (t / eb.trail.length), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${ta})`
          ctx.fill()
        }

        // Outer glow
        ctx.beginPath()
        ctx.arc(eb.x, eb.y, eb.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${eb.life * 0.12})`
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(eb.x, eb.y, eb.size * eb.life, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${eb.life * 0.85})`
        ctx.fill()
      }

      // --- Eye flickers ---
      for (let i = s.eyeFlickers.length - 1; i >= 0; i--) {
        const eye = s.eyeFlickers[i]
        eye.phase += 0.12
        eye.life -= 0.025
        if (eye.life <= 0) { s.eyeFlickers.splice(i, 1); continue }

        ctx.save()
        ctx.translate(eye.x, eye.y)
        ctx.globalAlpha = eye.life * 0.5 * Math.abs(Math.sin(eye.phase * 2))

        // Alien eye shape (two arcs forming an eye)
        const ew = eye.width
        const eh = ew * 0.4
        ctx.beginPath()
        ctx.moveTo(-ew / 2, 0)
        ctx.quadraticCurveTo(0, -eh, ew / 2, 0)
        ctx.quadraticCurveTo(0, eh, -ew / 2, 0)
        ctx.strokeStyle = `rgba(180, 0, 0, ${eye.life * 0.8})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Pupil
        const pupilSize = 3 * eye.life * Math.abs(Math.sin(eye.phase))
        ctx.beginPath()
        ctx.arc(0, 0, pupilSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220, 0, 0, ${eye.life * 0.9})`
        ctx.fill()

        // Pupil glow
        ctx.beginPath()
        ctx.arc(0, 0, pupilSize * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 0, 0, ${eye.life * 0.15})`
        ctx.fill()

        ctx.restore()
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      document.removeEventListener('click', onClick)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[3]"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}
