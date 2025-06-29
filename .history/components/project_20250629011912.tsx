import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from './ui/badge'
import { formatDate } from '@/app/blog/utils'
import { Stacks } from './stacks'
import { Github } from './logos'
import Link from 'next/link'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ExternalLink } from './animate-ui/icons/external-link'
import { AnimateIcon } from './animate-ui/icons/icon'
import { Cog } from './animate-ui/icons/cog'

interface ProjectProps {
	title: string
	icon?: React.ReactNode
	date: string
	excerpt: string
	stack: string[]
	githubUrl: string
	blogpost: string
	featured: boolean
}

export function Project({
	title,
	icon,
	date,
	excerpt,
	stack,
	githubUrl,
	blogpost,
	featured,
}: ProjectProps) {
	return (
		<div
			className={`border-foreground flex h-64 flex-1 flex-col border p-4`}
		>
			<div className='mb-4 flex h-12 w-full flex-row items-center justify-between'>
				{icon ? (
					<div className='flex-shrink-0 mr-4'>{icon}</div>
				) : (
					<Cog
						className='text-muted-foreground flex-shrink-0 mr-2 h-5 w-5'
						animateOnHover
					/>
				)}
				<div className='font-lora flex-1 overflow-hidden text-lg font-bold'>
					<div className='line-clamp-1'>{title}</div>
				</div>
				<div className='bg-card flex-shrink-0 ml-2 flex rounded-xl p-1 text-xs tabular-nums'>
					{formatDate(date, false)}
				</div>
			</div>

			<div className='mb-4 flex flex-1 flex-col space-y-3'>
				<div className='h-12'>
					<p className='text-muted-foreground line-clamp-2 text-sm'>
						{excerpt}
					</p>
				</div>

				<div className='flex-1'>
					<div className='flex max-h-14 flex-wrap gap-1 overflow-hidden'>
						<Stacks stacks={stack} />
					</div>
				</div>
			</div>

			<div className='flex h-4 items-center gap-4'>
				<Link
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github className='hover:text-muted-foreground dark:hover:text-muted-foreground h-4 w-4' />
				</Link>
				<Link href={blogpost} target='_blank' rel='noopener noreferrer'>
					<ExternalLink className='h-5 w-5' animateOnHover />
				</Link>
			</div>
		</div>
	)
}

export const Projects = ({ projects }: { projects: ProjectProps[] }) => {
	return (
		<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
			{projects.map((project) => (
				<Project key={project.title} {...project} />
			))}
		</div>
	)
}

export const FeaturedProjects = ({
	projects,
}: {
	projects: ProjectProps[]
}) => {
	const featuredProjects = projects.filter((project) => project.featured)
	return (
		<div className='flex flex-col gap-4 md:flex-row'>
			{featuredProjects.map((project) => (
				<Project key={project.title} {...project} />
			))}
		</div>
	)
}
