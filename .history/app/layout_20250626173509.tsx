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

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Next.js Portfolio Starter',
		template: '%s | Next.js Portfolio Starter',
	},
	description: 'This is my portfolio.',
	openGraph: {
		title: 'My Portfolio',
		description: 'This is my portfolio.',
		url: baseUrl,
		siteName: 'My Portfolio',
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
				'text-black bg-white dark:text-white dark:bg-black',
				geistSans.variable,
				geistMono.variable,
				lora.variable,
				ibmPlexSans.variable,
				ibmPlexMono.variable
			)}
		>
			<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	)
}
