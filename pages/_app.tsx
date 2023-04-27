import { AppProps } from "next/app";
import "../styles/index.css";
import "@code-hike/mdx/dist/index.css";
import { seo } from "@/lib/seo";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  );
}
