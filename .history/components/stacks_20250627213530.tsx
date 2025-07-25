import { Badge } from './ui/badge'
import { TypeScript, Python, Nextjs, TailwindCSS, OpenAI } from './logos'

interface StackProps {
	language: string
	icon: React.ReactNode
}

const techStackMap: Record<string, React.ReactNode> = {
	Typescript: <TypeScript className='h-6 w-6' />,
	Python: <Python className='h-6 w-6' />,
	'Next.js': <Nextjs className='h-6 w-6' />,
	Tailwind: <TailwindCSS className='h-6 w-6' />,
	OpenAI: <OpenAI className='h-6 w-6' />,
}

export const StackBadge = ({ language, icon }: StackProps) => {
	return (
		<Badge
			variant='secondary'
			className='flex flex-row items-center gap-2 rounded-md'
		>
			{icon}
			<p className='text-sm'>{language}</p>
		</Badge>
	)
}

interface StacksProps {
	stacks?: string[]
}

export const Stacks = ({ stacks }: StacksProps) => {
	return (
		<div className='flex flex-wrap gap-2'>
			{stacks?.map((stack) => (
				<StackBadge
					key={stack}
					language={stack}
					icon={techStackMap[stack] || null}
				/>
			))}
		</div>
	)
}
