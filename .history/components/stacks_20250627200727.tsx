import { Badge } from './ui/badge'

interface StackBadgeProps {
	language: string
	icon: React.ReactNode
}

export const StackBadge = ({ language, icon }: StackBadgeProps) => {
	return (
		<Badge variant='secondary' className='flex flex-row items-center gap-2'>
			{icon}
			{language}
		</Badge>
	)
}
