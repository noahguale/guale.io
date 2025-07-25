import { Badge } from './ui/badge'
import { TypeScript, Python, Nextjs, TailwindCSS, OpenAI } from './logos'

interface StackProps {
	language: string
	icon: React.ReactNode
}

// Tech stack icon mapping
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
			className='flex w-fit flex-row items-center gap-2'
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
		<div className='grid grid-cols-3 gap-2 overflow-x-hidden'>
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
