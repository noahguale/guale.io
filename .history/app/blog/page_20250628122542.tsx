import { BlogPosts } from '@/components/posts'

export const metadata = {
	title: 'Blog',
	description: 'Read my blog.',
}

export default function Page() {
	return (
		<section>
			<h1 className='tracking-tighte font-lora mb-8 text-2xl font-semibold'>
				Blog
			</h1>
			<div className='mb-8'>
				<BlogPosts />
			</div>{' '}
		</section>
	)
}
