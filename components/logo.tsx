"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme()
  
  return (
    <Image
      src={theme === 'dark' ? "/dark_logo_white_background.jpg" : "/dark_logo_transparent_background.png"}
      alt="AvicenaPlus Logo"
      width={60}
      height={60}
      className="h-12 w-auto"
      priority
    />
  )
} 