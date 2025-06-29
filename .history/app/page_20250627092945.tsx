import { BlogPosts } from '@/components/posts'

export default function Page() {
	return (
		<section>
			<h1 className="mb-2 text-2xl font-semibold tracking-tighter font-lora">
				Noah Guale
			</h1>
			<span className="flex flex-row items-center gap-2 mb-8 text-">
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
		</section>
	)
}
