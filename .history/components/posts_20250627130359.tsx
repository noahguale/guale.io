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
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-4` items-center">
							{/* <p className="text-muted-foreground w-fit tabular-nums text-sm">
								{formatDate(post.metadata.publishedAt, false)}
							</p> */}
							<Badge
								variant="outline"
								className="text-sm tabular-nums w-fit mr-4 "
							>
								{formatDate(post.metadata.publishedAt, false)}
							</Badge>
							<p className="text-foreground tracking-tight font-lora">
								{post.metadata.title}
							</p>
						</div>
					</Link>
				))}
		</div>
	)
}
