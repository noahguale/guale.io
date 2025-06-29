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
				<h2 className='font-lora mb-4 text-2xl font-semibold'>
					{title}
				</h2>
			</CardHeader>
			{/* <p className='text-muted-foreground'>{excerpt}</p>
			<p className='text-muted-foreground'>{date}</p>
			<p className='text-muted-foreground'>{stack.join(', ')}</p> */}
			<CardContent>
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
						GitHub
					</a>
				</div>
				<a href={blogpost} target='_blank' rel='noopener noreferrer'>
					Blogpost
				</a>
			</CardContent>
		</Card>
	)
}
