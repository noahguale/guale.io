import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import { NavBackground } from "components/ui/NavBackground";
import { Footer } from "components/ui/Footer";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <NavBackground children></NavBackground>
      <div className="flex items-center justify-center px-40 pt-36 mt-8 font-semibold text-white text-xl"></div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-6 relative place-items-center animated animatedFadeInUp fadeInUp">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="w-/12 lg:w-5/12 p-1 md:p-2 block h-full rounded-3xl object-cover object-center bg-white/5 overflow-hidden shadow-surface-elevation-low transition duration-200 hover:bg-sky-100/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:sky-500/70"
          >
            <div className="text-xl text-white opacity-100 px-4 pt-4 pb-2 font-medium">
              {post.title}
            </div>
            {/* <span className="text-sm pl-4 text-gray-300">Mar 1</span>
                        <span className="text-sm pl-4 text-gray-300">7,885 views</span>
                        <span className="text-sm pl-4 text-gray-300">300,000 likes</span> */}
            <div className="text-md text-white py-4 px-4 font-light">
              {post.description}
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
