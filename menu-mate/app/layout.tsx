import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/shared/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MenuMate - AI Restaurant Menu Recommendations',
  description: 'Discover the perfect dish with AI-powered menu recommendations tailored to your preferences and dietary needs.',
  keywords: ['restaurant', 'menu', 'AI', 'recommendations', 'food', 'dietary'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
} 