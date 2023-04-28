import { Html, Head, Main, NextScript } from "next/document";
import icon from "../public/favicon/favicon.ico";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <link rel="shortcut icon" href="../public/favicon/favicon.ico" />
        <meta name="theme-color" content="#181818" />
        <meta name="google-site-verification" content="FaK1rSoPG3Ae5c8uL_BQJMVVdWLOAtgSjNrVvb7dOU0" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9"
        />
      </Head>

      <body className="antialiased selection:bg-stone-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
