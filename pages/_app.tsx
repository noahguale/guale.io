import { AppProps } from "next/app";
import "../styles/index.css";
import "@code-hike/mdx/dist/index.css";
import { seo } from "@/lib/seo";
import { DefaultSeo } from "next-seo";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
