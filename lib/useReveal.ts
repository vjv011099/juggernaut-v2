'use client'
import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const index = Array.from(items).indexOf(target)
            setTimeout(() => target.classList.add('visible'), index * 80)
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return ref
}
