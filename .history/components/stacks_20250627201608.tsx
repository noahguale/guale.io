import { Badge } from './ui/badge'
import Image from 'next/image'

interface StackProps {
	language: string
	icon: React.ReactNode
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
	stacks: StackProps[]
}

export const Stacks = ({ stacks }: StacksProps) => {
	return (
		<div>
			{stacks.map((stack) => (
				<StackBadge key={stack.language} {...stack} />
			))}
		</div>
	)
}
