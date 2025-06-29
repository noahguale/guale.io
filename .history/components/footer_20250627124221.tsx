import { getCurrentYear } from '@/lib/utils'
import { Github, Instagram, LinkedIn, X, Youtube } from './logos'

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
		href: 'https://x.com/noahguale',
		label: 'x',
		icon: <X />,
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
			<ul className="flex flex-row space-x-10 items-center justify-center">
				{socialLinks.map(({ href, label, icon }) => (
					<li key={href}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-muted-foreground dark:hover:text-muted-foreground"
						>
							{icon}
						</a>
					</li>
				))}
			</ul>
			<p className="mt-4 text-muted-foreground">
				© {getCurrentYear()} Noah Guale. All rights reserved.
			</p>
		</footer>
	)
}
