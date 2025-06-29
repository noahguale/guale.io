import { Badge } from './ui/badge'

interface StackBadgeProps {
	stack: string
}

export const StackBadge = ({ stack }: StackBadgeProps) => {
	return <Badge variant='secondary'>{stack}</Badge>
}
