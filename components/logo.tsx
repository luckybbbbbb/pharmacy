import Image from "next/image"

export function Logo() {
  return (
    <Image
      src="/dark_logo_transparent_background.png"
      alt="AvicenaPlus Apoteka Novi Pazar - Logo"
      width={60}
      height={60}
      className="h-12 w-auto"
      priority
    />
  )
} 