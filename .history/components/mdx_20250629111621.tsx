import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { type BundledLanguage } from '@/components/ui/kibo-ui/code-block'
import { CodeBlockContent } from '@/components/ui/kibo-ui/code-block/server'

// @ts-expect-error
function Table({ data }) {
	let headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	))
	let rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

// @ts-expect-error
function CustomLink(props) {
	let href = props.href

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

// @ts-expect-error
function RoundedImage(props) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />
}

// @ts-expect-error
function Code({ children, ...props }) {
	let codeHTML = highlight(children)
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Map unsupported languages to supported ones
function mapLanguage(lang: string): BundledLanguage {
	const languageMap: Record<string, BundledLanguage> = {
		code: 'text',
		txt: 'text',
		markdown: 'md',
		tsx: 'typescript',
		jsx: 'javascript',
	}

	return (languageMap[lang] || lang) as BundledLanguage
}

// @ts-expect-error
function Pre({ children, ...props }) {
	const codeElement = React.Children.toArray(children).find(
		(child) => React.isValidElement(child) && child.type === Code,
	)

	if (!React.isValidElement(codeElement)) {
		return <pre {...props}>{children}</pre>
	}

	const { className, children: code } = codeElement.props
	const rawLanguage = className?.replace('language-', '') || 'text'
	const language = mapLanguage(rawLanguage)

	return (
		<div className='mt-0 overflow-hidden rounded-md border text-sm [&_.line]:relative [&_.line]:w-full [&_.line]:px-4 [&_.line]:before:mr-4 [&_.line]:before:inline-block [&_.line]:before:w-4 [&_.line]:before:text-right [&_.line]:before:font-mono [&_.line]:before:text-[13px] [&_.line]:before:content-[counter(line)] [&_.line]:before:[counter-increment:line] [&_.line]:before:select-none [&_.shiki]:!bg-[var(--shiki-bg)] [&_code]:grid [&_code]:w-full [&_code]:overflow-x-auto [&_code]:bg-transparent [&_code]:[counter-increment:line_0] [&_code]:[counter-reset:line] [&_pre]:py-4'>
			<CodeBlockContent language={language}>
				{String(code).trim()}
			</CodeBlockContent>
		</div>
	)
}

// @ts-expect-error
function slugify(str) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
}

// @ts-expect-error
function createHeading(level) {
	// @ts-expect-error
	const Heading = ({ children }) => {
		let slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor',
				}),
			],
			children,
		)
	}

	Heading.displayName = `Heading${level}`

	return Heading
}

let components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	code: Code,
	pre: Pre,
	Table,
}

// @ts-expect-error
export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}
