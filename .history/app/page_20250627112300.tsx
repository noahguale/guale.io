import { BlogPosts } from '@/components/posts'
import { ModeSwitcher } from '@/components/mode-switcher'
import { Logo } from '@/components/logos'

export default function Page() {
	return (
		<section>
			<div className="flex flex-row items-center gap-2 mb-8">
				<Logo className="w-12 h-12" />
				<div className="flex flex-col">
					<h1 className="mb-1 text-4xl font-semibold tracking-tighter font-lora">
						Noah Guale
					</h1>
					<span className="flex flex-row items-center gap-2  text-muted-foreground text-lg">
						Software Engineer
					</span>
				</div>
			</div>{' '}
			<p className="mb-4">
				{`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	)
}
