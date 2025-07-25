import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'

export function BlogPosts() {
	let allBlogs = getBlogPosts()

	return (
		<div>
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1
					}
					return 1
				})
				.map((post) => (
					<Link
						key={post.slug}
						className="flex flex-col space-y-1 mb-4"
						href={`/blog/${post.slug}`}
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-center">
							<p className="text-muted-foreground w-fit tabular-nums bg-card rounded-xl p-2 text-sm font-lora text-shadow-sm">
								{formatDate(post.metadata.publishedAt, false)}
							</p>
							<p className="text-foreground tracking-tight">
								{post.metadata.title}
							</p>
						</div>
					</Link>
				))}
		</div>
	)
}
