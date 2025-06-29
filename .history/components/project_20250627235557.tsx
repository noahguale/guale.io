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
}

export function Project({
	title,
	icon,
	date,
	excerpt,
	stack,
	githubUrl,
	blogpost,
}: ProjectProps) {
	return (
		<div className='border-border max-w-sm space-y-2 border-2 border-dashed p-4'>
			<div className='mb-4 flex w-full flex-row items-center justify-between'>
				{icon ? (
					<div className='mr-4'>{icon}</div>
				) : (
					<Cog
						className='text-muted-foreground mr-2 h-5 w-5'
						animateOnHover
					/>
				)}
				<div className='font-lora text-lg font-bold'>{title}</div>
				<div className='bg-card flex rounded-xl p-1 text-xs tabular-nums'>
					{formatDate(date, false)}
				</div>
			</div>
			<div className='mb-6 space-y-2'>
				<p className='text-muted-foreground mb-4 w-full text-sm'>
					{excerpt}
				</p>
				<Stacks stacks={stack} />
			</div>
			<div className='items-centergap-2 flex'>
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

export function Projects() {
	return (
		<div className='flex flex-col gap-4'>
			{projects.map((project) => (
				<Project key={project.title} {...project} />
			))}
		</div>
	)
}
