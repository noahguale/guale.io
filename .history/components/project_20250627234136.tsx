import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from './ui/badge'
import { formatDate } from '@/app/blog/utils'
import { Stacks } from './stacks'
import { Github } from './logos'
import { ExternalLink, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'

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
		<div className='border-border max-w-sm space-y-2 border-2 border-dashed p-4'>
			<div className='mb-4 flex w-full flex-row items-center justify-between'>
				<div className='font-lora text-lg font-semibold'>{title}</div>
				<div className='bg-card flex rounded-lg p-2 text-xs tabular-nums md:text-sm'>
					{formatDate(date, false)}
				</div>
			</div>
			<div className='mb-6 space-y-2'>
				<p className='text-muted-foreground mb-4 w-full text-sm'>
					{excerpt}
				</p>
				<Stacks stacks={stack} />
			</div>
			<div className='flex w-full justify-between gap-2'>
				<Link
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github className='h-4 w-4' />
				</Link>
				<Link href={blogpost} target='_blank' rel='noopener noreferrer'>
					<ExternalLink className='h-4 w-4' />
				</Link>
			</div>
		</div>
	)
}
