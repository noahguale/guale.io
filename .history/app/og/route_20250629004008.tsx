import { ImageResponse } from 'next/og'
import { Logo } from '@/components/logos'
export function GET(request: Request) {
	const url = new URL(request.url)
	const title = url.searchParams.get('title') || 'Noah Guale'

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full items-center justify-center bg-black'>
				<div tw='flex flex-row w-full py-12 px-4 items-center justify-center p-8'>
					<div tw='w-10 h-10 mr-4 flex'>
						<Logo color='white' />
					</div>
					<h2 tw='flex flex-col text-4xl font-bold tracking-tight text-left text-white'>
						{title}
					</h2>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	)
}
