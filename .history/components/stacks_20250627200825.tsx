import { Badge } from './ui/badge'
import Image from 'next/image'

interface StackProps {
	language: string
	icon: string
}

export const StackBadge = ({ language, icon }: StackProps) => {
	return (
		<Badge variant='secondary' className='flex flex-row items-center gap-2'>
			<Image src={icon} alt={language} width={16} height={16} />
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
