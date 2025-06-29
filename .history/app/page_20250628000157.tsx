import { ChevronRight } from '@/components/animate-ui/icons/chevron-right'
import { ArrowIcon } from '@/components/logos'
import { BlogPosts } from '@/components/posts'
import { Project } from '@/components/project'
import projects from '@/lib/projects.json'

export default function Page() {
	return (
		<section className='mb-12'>
			<h1 className='font-lora mb-2 text-4xl font-semibold tracking-tighter'>
				Noah Guale
			</h1>
			<span className='text-muted-foreground mb-8 flex flex-row items-center gap-2 text-lg'>
				Software Engineer
			</span>
			<p className='mb-4'>
				Hello, I'm a full-stack developer based currently in Chicago!
			</p>
			<div className='my-8'>
				<h2 className='font-lora mb-4 text-2xl font-semibold'>
					Featured Projects
					<ChevronRight className='h-4 w-4' animateOnHover />
				</h2>
				<div className='flex gap-4'>
					{projects.projects.map((project) => (
						<Project key={project.title} {...project} />
					))}
				</div>
			</div>

			<div className='my-8'>
				<h2 className='font-lora mb-4 text-2xl font-semibold'>Blog</h2>
				<BlogPosts />
			</div>
			<ul className='font-sm mt-8 flex flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300'>
				<li>
					<a
						className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
						rel='noopener noreferrer'
						target='_blank'
						href='/rss'
					>
						<ArrowIcon />
						<p className='ml-2 h-7'>rss</p>
					</a>
				</li>
			</ul>
		</section>
	)
}
