import { ImageResponse } from 'next/og'

export function GET(request: Request) {
	const url = new URL(request.url)
	const title = url.searchParams.get('title') || 'Noah Guale'
	const logoUrl = new URL('/logo.png', url.origin).toString()

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full items-center justify-center bg-black'>
				<div tw='flex flex-row w-full py-12 px-4 items-center justify-center p-8'>
					<img src={logoUrl} tw='w-16 mr-4' alt='Logo' />
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
