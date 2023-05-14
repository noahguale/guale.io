import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NavBackground } from "components/ui/NavBackground";
import { Footer } from "components/ui/Footer";
import { createOgImage } from "../../lib/createOgImage";
import Head from "next/head";
import { NextSeo, ArticleJsonLd } from "next-seo";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  const ogImage = createOgImage({
    title: post.title,
    meta: ["guale.io", post.publishedAt].join(" · "),
  });

  return (
    <div>
      <NextSeo
        openGraph={{
          type: "website",
          url: post.slug,
          title: post.title,
          description: post.description,
          images: [
            {
              url: ogImage,
              width: 1600,
              height: 836,
              alt: post.title,
            },
          ],
        }}
      />

      {/* <Head>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={post.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}

      <NavBackground children></NavBackground>
      <div className="flex items-center justify-center px-40 pt-12 py-10 font-semibold text-white text-xl"></div>

      {/* <article className="mx-auto max-w-3xl py-16 prose prose-neutral prose-p:font-light prose-headings:text-stone-100 prose-headings:font-medium prose-headings:underline	 prose-code:text-sky-300 prose-strong:text-sky-300 prose-a:text-sky-300 lg:prose-lg "> */}
      <article className="prose prose-quoteless prose-neutral dark:prose-invert mx-auto my-10 prose-h3:font-semibold prose-summary:text-sky-500">
        <div className="block h-full rounded-3xl object-cover object-center px-5 py-0.5 ">
          <div className="text-neutral-100 ">
            <div className="text-3xl font-medium">{post.title}</div>
          </div>
          <div className="grid grid-cols-[auto_1fr_auto] items-center font-mono text-sm max-w-[650px] mt-4">
            <div className="bg-neutral-100 text-black dark:bg-neutral-100 rounded-md px-2 py-1 tracking-tighter">
              {post.publishedAt}
            </div>
            <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-50" />
          </div>
          <div className="mb-4 text-stone-100  ">
            <MDXContent className="text-sky-100/80 text-lg" />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
