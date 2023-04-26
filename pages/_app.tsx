import { AppProps } from "next/app";
import "../styles/index.css";
import "@code-hike/mdx/dist/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
