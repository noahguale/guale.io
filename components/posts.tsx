import Link from 'next/link';
import { formatDate, getBlogPosts } from '@/app/blog/utils';
import { Badge } from './ui/badge';

export function BlogPosts() {
    let allBlogs = getBlogPosts();

    return (
        <div>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className='mb-4 flex flex-col space-y-1'
                        href={`/blog/${post.slug}`}
                    >
                        <div className='md:space-x-4` flex w-full flex-col items-start space-x-0 md:flex-row md:items-center'>
                            <Badge
                                variant='secondary'
                                className='mr-4 w-fit text-xs tabular-nums md:text-sm'
                            >
                                {formatDate(post.metadata.publishedAt, false)}
                            </Badge>
                            <p className='text-foreground font-lora text-lg tracking-tight transition-all duration-200 hover:underline hover:decoration-dashed hover:decoration-2 hover:underline-offset-6'>
                                {post.metadata.title}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    );
}
