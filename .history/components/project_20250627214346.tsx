import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from './ui/badge'
import { formatDate } from '@/app/blog/utils'
import { Stacks } from './stacks'
import { Github } from './logos'
import { SquareArrowOutUpRight } from 'lucide-react'
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
		<Card className='border-border max-w-sm border-2 border-dashed'>
			<CardHeader className='flex w-full flex-row justify-between'>
				<div className='font-lora mb-4 text-xl font-semibold'>
					{title}
				</div>
				<Badge
					variant='secondary'
					className='mr-4 w-fit text-xs tabular-nums md:text-sm'
				>
					{formatDate(date, false)}
				</Badge>
			</CardHeader>
			<CardContent>
				<p className='text-muted-foreground mb-4 w-full text-sm'>
					{excerpt}
				</p>
				<Stacks stacks={stack} />
			</CardContent>
			<CardFooter className='flex w-full justify-between gap-2'>
				<Link
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github className='h-4 w-4' />
				</Link>
				<Link href={blogpost} target='_blank' rel='noopener noreferrer'>
					<SquareArrowOutUpRight className='h-4 w-4' />
				</Link>
			</CardFooter>
		</Card>
	)
}
