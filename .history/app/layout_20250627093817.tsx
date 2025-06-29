import './globals.css'
import type { Metadata } from 'next'
import {
	Geist,
	Geist_Mono,
	Lora,
	IBM_Plex_Sans,
	IBM_Plex_Mono,
} from 'next/font/google'

import { Navbar } from '@/components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Noah Guale',
		template: '%s | Noah Guale',
	},
	description: 'Noah Guale ',
	openGraph: {
		title: 'Noah Guale',
		description: 'Noah Guale',
		url: baseUrl,
		siteName: 'Noah Guale',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
})

const lora = Lora({
	subsets: ['latin'],
	variable: '--font-lora',
})

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ['latin'],
	variable: '--font-ibm-plex-sans',
	weight: ['400', '700'],
})

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	variable: '--font-ibm-plex-mono',
	weight: ['400', '700'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={cx(
				'text-foreground bg-background',
				geistSans.variable,
				geistMono.variable,
				lora.variable,
				ibmPlexSans.variable,
				ibmPlexMono.variable
			)}
			suppressHydrationWarning
		>
			<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
						<Navbar />
						{children}
						<Footer />
						<Analytics />
						<SpeedInsights />
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
