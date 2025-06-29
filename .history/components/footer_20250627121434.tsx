import { getCurrentYear } from '@/lib/utils'
import { Github, Instagram, LinkedIn, Youtube } from './logos'

function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	)
}

const socialLinks = [
	{
		href: 'https://github.com/noahguale',
		label: 'github',
		icon: <Github />,
	},
	{
		href: 'https://www.linkedin.com/in/noahguale/',
		label: 'linkedin',
		icon: <LinkedIn />,
	},
	{
		href: 'https://www.instagram.com/noahguale/',
		label: 'instagram',
		icon: <Instagram />,
	},
	{
		href: 'https://www.youtube.com/@noahguale',
		label: 'youtube',
		icon: <Youtube />,
	},
]

export default function Footer() {
	return (
		<footer className="mb-16 w-full flex flex-col items-center justify-center bottom-0 ">
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="/rss"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">rss</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/vercel/next.js"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">github</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://vercel.com/templates/next.js/portfolio-starter-kit"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">view source</p>
					</a>
				</li>
			</ul>
			<ul className="flex flex-row space-x-4">
				{socialLinks.map(({ href, label, icon }) => (
					<li key={href}>
						<a href={href} target="_blank" rel="noopener noreferrer">
							{icon}
						</a>
					</li>
				))}
			</ul>
			<p className="mt-4 text-muted-foreground">
				© {getCurrentYear()} Noah Guale.
			</p>
		</footer>
	)
}
