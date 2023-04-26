import { allPosts, type Post } from "contentlayer/generated"
import { type GetStaticProps, type InferGetStaticPropsType } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { NavBackground } from "components/ui/NavBackground"
import { Footer } from "components/ui/Footer"
import clsx from "clsx"
import Head from "next/head"
import Link from "next/link"
// import * as React from 'react';
import Image from 'next/image';
import { LikeButtonHeart } from "components/ui/LikeButtonHeart"


export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}
 
export const getStaticProps: GetStaticProps<{
  post: Post
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug)
 
  if (!post) {
    return { notFound: true }
  }
 
  return { props: { post } }
}
 
export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code)
 
  return (
    <div>
      <NavBackground children></NavBackground>
      <div className="flex items-center justify-center px-40 pt-12 py-10 font-semibold text-white text-xl">
      </div>
 
        <article className="mx-auto max-w-3xl py-16 prose prose-neutral  prose-p:-my-1 prose-p:font-light	 prose-headings:text-stone-100 prose-headings:font-medium prose-code:text-sky-300 prose-strong:text-sky-300 prose-a:text-sky-300 lg:prose-lg animated animatedFadeInUp fadeInUp">
 
          <div className="block h-full rounded-3xl object-cover object-center bg-white/5 px-5 py-0.5">
            <div className="text-neutral-100 ">
              <div className="text-3xl font-medium  my-10 font-['Roboto']">{post.title}</div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center mt-1 mb-8 font-mono text-sm max-w-[650px]">
            <div className="bg-neutral-100 dark:bg-neutral-100 rounded-md px-2 py-1 tracking-tighter">
              {post.publishedAt}
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-50" />

            </ div>
            <div className="mb-6 text-stone-100  ">
              <MDXContent className="text-sky-100/80 text-lg"/>
            </div>
          </div>

        </article>


      <Footer />
    </div>
  )
}