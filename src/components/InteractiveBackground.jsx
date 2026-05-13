import { useEffect, useRef, useCallback } from 'react'

// Lightweight interactive canvas for cinematic background effects
export default function InteractiveBackground() {
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)
  const effectsRef = useRef({ ripples: [], particles: [], trails: [] })
  const lastInteraction = useRef(0)

  const createRipple = useCallback((x, y) => {
    const effects = effectsRef.current
    // Shockwave ring
    effects.ripples.push({
      x, y, radius: 0, maxRadius: 120 + Math.random() * 60,
      opacity: 0.6, lineWidth: 2, color: Math.random() > 0.5 ? 'neon' : 'blood',
    })
    // Inner energy ring
    effects.ripples.push({
      x, y, radius: 0, maxRadius: 60 + Math.random() * 30,
      opacity: 0.4, lineWidth: 1, color: 'white',
    })
    // Particle burst (6-10 particles)
    const count = 6 + Math.floor(Math.random() * 5)
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3
      const speed = 1.5 + Math.random() * 2.5
      effects.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.015 + Math.random() * 0.01,
        size: 1.5 + Math.random() * 2,
        color: Math.random() > 0.6 ? 'neon' : Math.random() > 0.3 ? 'blood' : 'white',
      })
    }
  }, [])

  const createTrail = useCallback((x, y) => {
    const effects = effectsRef.current
    // Floating energy trail particle
    effects.trails.push({
      x, y,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -0.5 - Math.random() * 0.8,
      life: 1,
      decay: 0.012 + Math.random() * 0.008,
      size: 1 + Math.random() * 1.5,
      color: Math.random() > 0.5 ? 'neon' : 'blood',
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    // Throttled interaction handler
    const handleInteraction = (clientX, clientY, isClick) => {
      const now = Date.now()
      if (isClick) {
        createRipple(clientX, clientY)
        lastInteraction.current = now
      } else if (now - lastInteraction.current > 50) {
        // Mouse move - create trail every 50ms
        createTrail(clientX, clientY)
        lastInteraction.current = now
      }
    }

    const onMouseMove = (e) => handleInteraction(e.clientX, e.clientY, false)
    const onClick = (e) => {
      // Only trigger on background clicks (not buttons/links)
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || e.target.closest('button') || 
          e.target.closest('input') || e.target.closest('textarea') ||
          e.target.closest('iframe')) return
      handleInteraction(e.clientX, e.clientY, true)
    }
    const onTouchStart = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || e.target.closest('button') ||
          e.target.closest('input') || e.target.closest('textarea') ||
          e.target.closest('iframe')) return
      const touch = e.touches[0]
      handleInteraction(touch.clientX, touch.clientY, true)
    }
    const onTouchMove = (e) => {
      const touch = e.touches[0]
      handleInteraction(touch.clientX, touch.clientY, false)
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('click', onClick, { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: true })

    // Color helpers
    const getColor = (type, opacity) => {
      switch (type) {
        case 'neon': return `rgba(0, 212, 255, ${opacity})`
        case 'blood': return `rgba(180, 30, 30, ${opacity})`
        case 'white': return `rgba(255, 255, 255, ${opacity})`
        default: return `rgba(0, 212, 255, ${opacity})`
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      const effects = effectsRef.current

      // Draw & update ripples
      for (let i = effects.ripples.length - 1; i >= 0; i--) {
        const r = effects.ripples[i]
        r.radius += 2.5
        r.opacity -= 0.012

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          effects.ripples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = getColor(r.color, r.opacity * 0.7)
        ctx.lineWidth = r.lineWidth * (1 - r.radius / r.maxRadius)
        ctx.stroke()

        // Inner glow
        if (r.lineWidth > 1) {
          ctx.beginPath()
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
          ctx.strokeStyle = getColor(r.color, r.opacity * 0.3)
          ctx.lineWidth = r.lineWidth * 3 * (1 - r.radius / r.maxRadius)
          ctx.stroke()
        }
      }

      // Draw & update particles
      for (let i = effects.particles.length - 1; i >= 0; i--) {
        const p = effects.particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.97
        p.vy *= 0.97
        p.life -= p.decay

        if (p.life <= 0) {
          effects.particles.splice(i, 1)
          continue
        }

        const alpha = p.life * 0.8
        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = getColor(p.color, alpha * 0.15)
        ctx.fill()
        // Core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = getColor(p.color, alpha)
        ctx.fill()
      }

      // Draw & update trails
      for (let i = effects.trails.length - 1; i >= 0; i--) {
        const t = effects.trails[i]
        t.x += t.vx
        t.y += t.vy
        t.vy -= 0.005 // slight float up
        t.life -= t.decay

        if (t.life <= 0) {
          effects.trails.splice(i, 1)
          continue
        }

        const alpha = t.life * 0.6
        // Soft glow
        ctx.beginPath()
        ctx.arc(t.x, t.y, t.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = getColor(t.color, alpha * 0.1)
        ctx.fill()
        // Core dot
        ctx.beginPath()
        ctx.arc(t.x, t.y, t.size * t.life, 0, Math.PI * 2)
        ctx.fillStyle = getColor(t.color, alpha)
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('click', onClick)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [createRipple, createTrail])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[3]"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}
