interface ProjectProps {
	title: string
	description: string
	image: string
	link: string
	date: string
	excerpt: string
	stack: string[]
	githubUrl: string
	blogpost: string
}

export function Project({
	title,
	description,
	image,
	link,
	date,
	excerpt,
	stack,
	githubUrl,
	blogpost,
}: ProjectProps) {
	return (
		<div>
			<h2 className='font-lora mb-4 text-2xl font-semibold'>{title}</h2>
			<p className='text-muted-foreground'>{description}</p>
			<p className='text-muted-foreground'>{excerpt}</p>
			<p className='text-muted-foreground'>{date}</p>
			<p className='text-muted-foreground'>{stack.join(', ')}</p>
			<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
				GitHub
			</a>
			<a href={blogpost} target='_blank' rel='noopener noreferrer'>
				Blogpost
			</a>
		</div>
	)
}
