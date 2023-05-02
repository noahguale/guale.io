import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <link rel="shortcut icon" href="favicon/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon.svg"
        />

        <meta name="theme-color" content="#181818" />
        <meta
          name="google-site-verification"
          content="FaK1rSoPG3Ae5c8uL_BQJMVVdWLOAtgSjNrVvb7dOU0"
        />
      </Head>

      <body className="antialiased selection:bg-stone-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
