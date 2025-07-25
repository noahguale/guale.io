import Link from 'next/link'
import { ModeSwitcher } from './mode-switcher'
import { Logo } from './logos'

const navItems = {
	'/': {
		name: 'home',
	},
	'/blog': {
		name: 'blog',
	},
	'https://vercel.com/templates/next.js/portfolio-starter-kit': {
		name: 'deploy',
	},
}

export function Navbar() {
	return (
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative w-full justify-between"
					id="nav"
				>
					<Logo className="w-10 h-10" />
					<div className="flex flex-row space-x-0 pr-10">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
								>
									{name}
								</Link>
							)
						})}
					</div>
					<ModeSwitcher />
				</nav>
			</div>
		</aside>
	)
}
