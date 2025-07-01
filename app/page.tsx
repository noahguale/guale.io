import { ChevronRight } from '@/components/animate-ui/icons/chevron-right'
import { TypingText } from '@/components/animate-ui/text/typing'
import { CopyButton } from '@/components/copy-button'
import { ArrowIcon, AwtarLogo } from '@/components/logos'
import { BlogPosts } from '@/components/posts'
import { FeaturedProjects, Project } from '@/components/project'
import { Button } from '@/components/ui/button'
import projects from '@/lib/projects.json'
import Link from 'next/link'

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
					className='w-full text-lg'
					duration={50}
				/>
			</div>

			<div className='my-12'>
				<h2 className='font-lora mb-4 flex flex-row items-center gap-2 text-2xl font-semibold'>
					Featured Projects
					<ChevronRight className='h-4 w-4' animateOnHover />
				</h2>
				<FeaturedProjects
					projects={projects.projects.map((project) => ({
						...project,
						githubUrl: project.githubUrl ?? '',
						blogpost: project.blogpost ?? '',
					}))}
				/>
			</div>

			<div className='my-12'>
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

			<div className='my-12'>
				<h2 className='font-lora mb-6 flex flex-row items-center gap-2 text-2xl font-semibold'>
					hire me?
					<ChevronRight className='h-4 w-4' animateOnHover />
				</h2>
				<div className='space-y-4'>
					<div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
						<Link
							href='https://www.awtar.dev/'
							className='group hover:bg-accent flex flex-1 items-center gap-3 rounded-lg border p-4 transition-colors'
						>
							<AwtarLogo className='h-8 w-8 shrink-0' />
							<div className='flex flex-col'>
								<span className='text-muted-foreground text-sm font-medium'>
									Site
								</span>
								<span className='group-hover:text-accent-foreground font-semibold'>
									awtar.dev
								</span>
							</div>
						</Link>

						<div className='group flex flex-1 items-center gap-3 rounded-lg border p-4'>
							<div className='bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded'>
								<span className='text-primary text-lg font-bold'>
									@
								</span>
							</div>
							<div className='flex flex-1 flex-col'>
								<span className='text-muted-foreground text-sm font-medium'>
									Email
								</span>
								<span className='font-semibold'>
									noah@awtar.dev
								</span>
							</div>
							<div className='flex items-center'>
								<CopyButton
									value='noah@awtar.dev'
									variant='outline'
									className='hover:bg-accent relative h-8 w-8 bg-transparent'
								/>
							</div>
						</div>
					</div>

					<div className='text-center'>
						<p className='text-muted-foreground text-sm'>
							Available for full-time opportunities and consulting
							work
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
