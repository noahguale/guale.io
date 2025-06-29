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
		<div>
			<h2 className='font-lora mb-4 text-2xl font-semibold'>{title}</h2>
			<p className='text-muted-foreground'>{excerpt}</p>
			<p className='text-muted-foreground'>{date}</p>
			<p className='text-muted-foreground'>{stack.join(', ')}</p>
			<div>
				<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
					GitHub
				</a>
			</div>
			<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
				GitHub
			</a>
			<a href={blogpost} target='_blank' rel='noopener noreferrer'>
				Blogpost
			</a>
		</div>
	)
}
