import { Badge } from './ui/badge'
import Image from 'next/image'

interface StackProps {
	language: string
	icon: React.ReactNode
}

// Tech stack icon mapping
const techStackMap: Record<string, React.ReactNode> = {
	Typescript: (
		<Image
			src='/icons/typescript.svg'
			alt='TypeScript'
			width={16}
			height={16}
			className='h-4 w-4'
		/>
	),
	Python: (
		<Image
			src='/icons/python.svg'
			alt='Python'
			width={16}
			height={16}
			className='h-4 w-4'
		/>
	),
	'Next.js': (
		<Image
			src='/icons/nextjs.svg'
			alt='Next.js'
			width={16}
			height={16}
			className='h-4 w-4'
		/>
	),
	Tailwind: (
		<Image
			src='/icons/tailwind.svg'
			alt='Tailwind CSS'
			width={16}
			height={16}
			className='h-4 w-4'
		/>
	),
	OpenAI: (
		<Image
			src='/icons/openai.svg'
			alt='OpenAI'
			width={16}
			height={16}
			className='h-4 w-4'
		/>
	),
}

export const StackBadge = ({ language, icon }: StackProps) => {
	return (
		<Badge variant='secondary' className='flex flex-row items-center gap-2'>
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
		<div className='grid grid-cols-2 gap-2 overflow-x-hidden'>
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
