"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          // Get the header height to calculate proper offset
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 80 // fallback to 80px
          
          // Get the element's position relative to the viewport
          const elementRect = element.getBoundingClientRect()
          const elementPosition = elementRect.top + window.pageYOffset
          
          // Calculate additional offset (5vh)
          const viewportHeight = window.innerHeight
          const additionalOffset = viewportHeight * 0.05 // 5vh
          
          // Scroll to element with offset to account for fixed header and additional 5vh
          window.scrollTo({
            top: elementPosition - headerHeight + 50 - additionalOffset, // 20px padding + 5vh
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleClick)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick)
      })
    }
  }, [])

  return null
}
