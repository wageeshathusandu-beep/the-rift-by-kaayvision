import { useEffect, useRef, useState } from 'react'

/**
 * CinematicEffects — Global animated overlays for The Rift
 * Includes: particle system, fog layers, smoke, ambient flicker, cursor glow
 * Performance optimized with requestAnimationFrame and GPU acceleration
 */
export default function CinematicEffects() {
  const canvasRef = useRef(null)
  const cursorRef = useRef(null)
  const animFrameRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Floating particles canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    const particleCount = isMobile ? 25 : 60

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3 - 0.1
        this.opacity = Math.random() * 0.4 + 0.1
        this.fadeSpeed = Math.random() * 0.005 + 0.002
        this.fadeDir = 1
        // Color: mix of blood red, neon blue, and white
        const colorRoll = Math.random()
        if (colorRoll < 0.4) {
          this.color = `rgba(139, 0, 0, ` // blood red
        } else if (colorRoll < 0.75) {
          this.color = `rgba(0, 212, 255, ` // neon blue
        } else {
          this.color = `rgba(255, 255, 255, ` // white
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Fade in/out
        this.opacity += this.fadeSpeed * this.fadeDir
        if (this.opacity >= 0.5) this.fadeDir = -1
        if (this.opacity <= 0.05) {
          this.fadeDir = 1
          this.reset()
        }

        // Wrap around
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.opacity + ')'
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [isMobile])

  // Cursor glow effect (desktop only)
  useEffect(() => {
    if (isMobile) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const handleMouse = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.08
      cursorY += (mouseY - cursorY) * 0.08
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', handleMouse)
    animateCursor()

    return () => window.removeEventListener('mousemove', handleMouse)
  }, [isMobile])

  return (
    <>
      {/* Floating particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{ opacity: 0.7 }}
      />

      {/* Smoke layers - CSS animated */}
      {!isMobile && (
        <>
          <div className="smoke-layer-1" />
          <div className="smoke-layer-2" />
        </>
      )}

      {/* Ambient light flicker */}
      <div className="ambient-flicker" />

      {/* Cursor glow (desktop) */}
      {!isMobile && (
        <div ref={cursorRef} className="cursor-glow" />
      )}
    </>
  )
}
