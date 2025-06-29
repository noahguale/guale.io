import { formatDate } from '@/app/blog/utils'
import { Stacks } from './stacks'
import {
	Github,
	OpenAI,
	Python,
	Nextjs,
	TypeScript,
	TailwindCSS,
	Flowframe,
	Merkato,
	Logo,
} from './logos'
import Link from 'next/link'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ExternalLink } from './animate-ui/icons/external-link'
import { Cog } from './animate-ui/icons/cog'

interface ProjectProps {
	title: string
	icon?: string | React.ReactNode
	date: string
	excerpt: string
	stack: string[]
	githubUrl: string
	blogpost: string
	featured: boolean
}

// Icon mapping function
const getProjectIcon = (iconName: string): React.ReactNode => {
	const iconMap: Record<string, React.ReactNode> = {
		openai: <OpenAI className='h-5 w-5' />,
		python: <Python className='h-5 w-5' />,
		nextjs: <Nextjs className='h-5 w-5' />,
		typescript: <TypeScript className='h-5 w-5' />,
		tailwind: <TailwindCSS className='h-5 w-5' />,
		flowframe: <Flowframe className='h-5 w-5' />,
		merkato: <Merkato className='h-6 w-6' />,
		logo: <Logo className='h-6 w-6' />,
	}
	return iconMap[iconName] || <Cog className='h-5 w-5' />
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
			className={`border-foreground flex h-64 flex-1 flex-col border py-4 px-4`}
		>
			<div className='mb-4 flex h-12 w-full flex-row items-center justify-between'>
				{icon ? (
					<div className='flex-shrink-0 mr-2'>
						{typeof icon === 'string' ? getProjectIcon(icon) : icon}
					</div>
				) : (
					<Cog
						className='text-muted-foreground flex-shrink-0 mr-2 h-5 w-5'
						animateOnHover
					/>
				)}
				<div className='font-lora flex-1 overflow-hidden text-lg font-bold'>
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='line-clamp-1 cursor-default'>
								{title}
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>{title}</p>
						</TooltipContent>
					</Tooltip>
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
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href={githubUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							<Github className='hover:text-muted-foreground dark:hover:text-muted-foreground h-4 w-4' />
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>View on GitHub</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href={blogpost}
							target='_blank'
							rel='noopener noreferrer'
						>
							<ExternalLink className='h-5 w-5' animateOnHover />
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>View blogpost</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</div>
	)
}

export const Projects = ({ projects }: { projects: ProjectProps[] }) => {
	const sortedProjects = projects.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	)
	return (
		<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
			{sortedProjects.map((project) => (
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
	const featuredProjects = projects
		.filter((project) => project.featured)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	return (
		<div className='flex flex-col gap-4 md:flex-row'>
			{featuredProjects.map((project) => (
				<Project key={project.title} {...project} />
			))}
		</div>
	)
}
