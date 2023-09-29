import type { Metadata } from 'next'
import { Aldrich } from 'next/font/google'

const inter = Aldrich({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Videogames',
  description: 'Generated by create next app',
}

export default function VideogamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section className={`${inter.className} bg-gradient-to-b from-black to-sky-800`}>
        {children}
      </section>
  )
}
