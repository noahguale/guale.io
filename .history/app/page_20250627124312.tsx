import { ArrowIcon } from '@/components/logos'
import { BlogPosts } from '@/components/posts'

export default function Page() {
	return (
		<section className="mb-12">
			<h1 className="mb-2 text-4xl font-semibold tracking-tighter font-lora">
				Noah Guale
			</h1>
			<span className="flex flex-row items-center gap-2 mb-8 text-muted-foreground text-lg">
				Software Engineer
			</span>
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
		</section>
	)
}
