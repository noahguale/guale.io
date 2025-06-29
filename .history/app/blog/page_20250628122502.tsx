import { BlogPosts } from '@/components/posts'

export const metadata = {
	title: 'Blog',
	description: 'Read my blog.',
}

export default function Page() {
	return (
		<section>
			<h1 className='tracking-tighte font-lora mb-8 text-2xl font-semibold'>
				My Blog
			</h1>
			<BlogPosts />
		</section>
	)
}
