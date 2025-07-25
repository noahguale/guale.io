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
		<div className='border-border flex h-80 max-w-sm flex-col border-2 border-dashed p-4'>
			{/* Title section - Fixed height */}
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

			{/* Content section - Flexible height that grows */}
			<div className='mb-4 flex flex-1 flex-col space-y-3'>
				{/* Excerpt - Fixed height with truncation */}
				<div className='h-12'>
					<p className='text-muted-foreground line-clamp-3 text-sm'>
						{excerpt}
					</p>
				</div>

				{/* Stack section - Max 2 rows */}
				<div className='flex-1'>
					<div
						className='flex flex-wrap gap-1 overflow-hidden'
						style={{ maxHeight: '3.5rem' }}
					>
						<Stacks stacks={stack} />
					</div>
				</div>
			</div>

			{/* Links section - Fixed height */}
			<div className='flex h-8 items-center gap-2'>
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

// export function Projects() {
// 	return (
// 		<div className='flex flex-col gap-4'>
// 			{projects.map((project) => (
// 				<Project key={project.title} {...project} />
// 			))}
// 		</div>
// 	)
// }
