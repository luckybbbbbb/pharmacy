"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Nađi najbliži <a> koji vodi na hash na istoj strani
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const hash = anchor.hash
      if (!hash || hash === "#") return

      const element = document.querySelector(hash)
      if (!element) return

      e.preventDefault()

      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 80

      const elementRect = element.getBoundingClientRect()
      const elementPosition = elementRect.top + window.pageYOffset

      const viewportHeight = window.innerHeight
      const additionalOffset = viewportHeight * 0.05 // 5vh

      window.scrollTo({
        top: elementPosition - headerHeight + 50 - additionalOffset,
        behavior: "smooth",
      })
    }

    // Event delegation – radi i za linkove koji se pojave kasnije (npr. u Sheet portalu)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
