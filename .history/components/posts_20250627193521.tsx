import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { Badge } from './ui/badge'

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
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-4` md:items-center items-start">
							<Badge
								variant="secondary"
								className="text-xs md:text-sm tabular-nums w-fit mr-4 "
							>
								{formatDate(post.metadata.publishedAt, false)}
							</Badge>
							<p className="text-foreground tracking-tight font-lora text-lg hover:underline hover:decoration-dashed hover:decoration-2 hover:underline-offset-6 transition-all duration-200">
								{post.metadata.title}
							</p>
						</div>
					</Link>
				))}
		</div>
	)
}
