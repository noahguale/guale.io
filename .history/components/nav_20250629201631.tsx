import Link from 'next/link'
import { ModeSwitcher } from '@/components/mode-switcher'
import { Logo } from '@/components/logos'

const navItems = {
	'/': {
		name: 'home',
	},
	'/projects': {
		name: 'projects',
	},
	'/blog': {
		name: 'blog',
	},
	'https://www.awtar.dev/': {
		name: 'contact',
	},
}

export function Navbar() {
	return (
		<aside className='mb-16 -ml-[8px] tracking-tight'>
			<div className='lg:sticky lg:top-20'>
				<nav
					className='fade relative flex w-full scroll-pr-6 flex-row items-center justify-between px-0 pb-0 md:relative md:overflow-auto'
					id='nav'
				>
					<Link href='/'>
						<Logo className='h-10 w-10' />
					</Link>
					<div className='flex flex-row space-x-0'>
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className='hover:text-muted-foreground dark:hover:text-muted-foreground border-foregorund md:tex-sm relative m-1 flex border py-1 px-2 align-middle text-xs transition-all'
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
