import { Projects } from '@/components/project'
import projects from '@/lib/projects.json'

export default function Page() {
	return <Projects projects={projects.projects} />
}
