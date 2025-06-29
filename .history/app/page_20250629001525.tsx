import { ChevronRight } from '@/components/animate-ui/icons/chevron-right'
import { TypingText } from '@/components/animate-ui/text/typing'
import { ArrowIcon } from '@/components/logos'
import { BlogPosts } from '@/components/posts'
import { FeaturedProjects, Project } from '@/components/project'
import projects from '@/lib/projects.json'

export default function Page() {
	return (
		<section className='mb-12'>
			<h1 className='font-lora text-[40px] font-semibold tracking-tighter'>
				Noah Guale
			</h1>
			<span className='text-muted-foreground mb-8 flex flex-row items-center gap-2 text-xl'>
				Software Engineer
			</span>
			<div className='mb-4 flex min-h-[1.5em] items-center'>
				<TypingText
					text='Hello, I am a full-stack developer based currently in Chicago!'
					className='w-full'
					duration={50}
				/>
			</div>

			<div className='my-8'>
				<h2 className='font-lora mb-4 flex flex-row items-center gap-2 text-2xl font-semibold'>
					Featured Projects
					<ChevronRight className='h-4 w-4' animateOnHover />
				</h2>
				<FeaturedProjects projects={projects.projects} />
			</div>

			<div className='my-8'>
				<h2 className='font-lora mb-4 flex flex-row items-center gap-2 text-2xl font-semibold'>
					Blog
					<ChevronRight className='h-4 w-4' animateOnHover />
				</h2>
				<BlogPosts />
			</div>
			<ul className='font-sm text-muted-foreground mt-8 flex flex-col space-y-2 space-x-0 md:flex-row md:space-y-0 md:space-x-4'>
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
