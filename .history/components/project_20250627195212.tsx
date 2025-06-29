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
	return <div>Project</div>
}
