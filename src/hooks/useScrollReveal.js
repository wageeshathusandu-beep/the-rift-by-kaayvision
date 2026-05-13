import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for cinematic scroll reveal animations
 * Uses IntersectionObserver for performance
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isVisible]
}

/**
 * Hook for staggered card reveal animations
 */
export function useStaggerReveal(itemCount, options = {}) {
  const { threshold = 0.1, staggerDelay = 100 } = options
  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger reveal each item
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]))
            }, i * staggerDelay)
          }
          observer.unobserve(container)
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [itemCount, threshold, staggerDelay])

  return [containerRef, visibleItems]
}
