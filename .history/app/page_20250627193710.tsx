import { ArrowIcon } from '@/components/logos'
import { BlogPosts } from '@/components/posts'

export default function Page() {
	return (
		<section className="mb-12">
			<h1 className="mb-2 text-4xl font-semibold tracking-tighter font-lora">
				Noah Guale
			</h1>
			<span className="flex flex-row items-center gap-2 mb-8 text-muted-foreground ">
				Software Engineer
			</span>
			<p className="mb-4">
				Hello, I'm a full-stack developer based currently in Chicago!
			</p>
			<div className="my-8">
				<h2 className="text-2xl font-semibold mb-4">Blog</h2>
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
			</ul>
		</section>
	)
}
