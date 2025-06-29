import { Projects } from '@/components/project'
import projects from '@/lib/projects.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Projects I have worked on',
}
export default function Page() {
	return (
		<div className='my-8'>
			<h2 className='font-lora mb-4 flex flex-row items-center gap-2 text-2xl font-semibold'>
				Projects
			</h2>
			<Projects projects={projects.projects} />
		</div>
	)
}
