import { Card, CardContent, CardHeader } from '@/components/ui/card'
interface ProjectProps {
	title: string
	date: string
	excerpt: string
	stack: string[]
	githubUrl: string
	blogpost: string
}

export function Project({
	title,
	date,
	excerpt,
	stack,
	githubUrl,
	blogpost,
}: ProjectProps) {
	return (
		<Card className='max-w-md p-4'>
			<CardHeader>
				<div className='font-lora mb-4 text-2xl font-semibold'>
					{title}
				</div>
			</CardHeader>
			<CardContent>
				<p className='text-muted-foreground'>{excerpt}</p>
				<a href={blogpost} target='_blank' rel='noopener noreferrer'>
					Read more
				</a>
				<div className='flex flex-row gap-2'>
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						Blogpost
					</a>
				</div>
			</CardContent>
		</Card>
	)
}
