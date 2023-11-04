import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'

import { Inter } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"

import { cn } from '@/lib/utils'

import './globals.css'
import { Toaster } from '@/components/ui/toaster'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIDynamiX',
  description: 'Generate a State-of-the-art AI SaaS Platform with five AI tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn( "bg-secondary", inter.className )}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            {children}
            <Toaster />
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
